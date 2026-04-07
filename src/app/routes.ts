import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { CaseStudiesFeedPage } from "./pages/CaseStudiesFeedPage";
import { CaseStudyDetailPage } from "./pages/CaseStudyDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "casos", Component: CaseStudiesFeedPage },
      { path: "casos/:slug", Component: CaseStudyDetailPage },
    ],
  },
]);
