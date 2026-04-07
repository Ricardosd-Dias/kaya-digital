import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "jsr:@supabase/supabase-js@2";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-079be383/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form submission endpoint
app.post("/make-server-079be383/contact", async (c) => {
  try {
    const body = await c.req.json();
    
    // Validate required fields
    if (!body.nome || !body.email) {
      return c.json({ 
        success: false, 
        error: "Nome and email are required fields" 
      }, 400);
    }

    // Create Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    );

    // Insert data into form_submissions table
    const { data, error } = await supabase
      .from('form_submissions')
      .insert({
        name: body.nome,
        email: body.email,
        phoneNumber: body.telefone || null,
        empresa: body.empresa || null,
        website: body.website || null,
        message: body.mensagem || null,
      })
      .select()
      .single();

    if (error) {
      console.error("Database error while saving form submission:", error);
      return c.json({ 
        success: false, 
        error: `Failed to save submission to database: ${error.message}` 
      }, 500);
    }

    console.log(`Contact form submission saved successfully with id: ${data.id}`);

    return c.json({ 
      success: true, 
      message: "Submission saved successfully",
      submissionId: data.id
    });

  } catch (error) {
    console.error("Error processing contact form submission:", error);
    return c.json({ 
      success: false, 
      error: `Failed to save submission: ${error.message}` 
    }, 500);
  }
});

Deno.serve(app.fetch);