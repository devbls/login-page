import type { Metadata } from "next";

import Home from "./home";

export const metadata: Metadata = {
  title: "Homepage",
  description: "This is the homepage",
};

export default function HomePage() {
  return <Home />;
}
