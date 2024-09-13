import type { Metadata } from "next";

import Login from "./login";

export const metadata: Metadata = {
  title: "Login",
  description: "This is the login page",
};

export default function LoginPage() {
  return <Login />;
}
