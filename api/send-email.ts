import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { nome, email, telefone, empresa, website, mensagem } = req.body;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: process.env.EMAIL_TO!,
    subject: `Novo pedido de auditoria - ${nome}`,
    html: `
      <h2>Novo pedido de auditoria</h2>
      <p><b>Nome:</b> ${nome}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Telefone:</b> ${telefone}</p>
      <p><b>Empresa:</b> ${empresa}</p>
      <p><b>Website:</b> ${website}</p>
      <p><b>Mensagem:</b> ${mensagem}</p>
    `,
  });

  res.status(200).json({ success: true });
}
