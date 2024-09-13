"use client";
import { useState } from "react";

import { RegisterForm } from "@/components/Login/forms/RegisterForm";
import { ForgotPasswordForm } from "@/components/Login/forms/ForgotPasswordForm";
import { LoginForm } from "@/components/Login/forms/LoginForm";

export default function Login() {
  const [formType, setFormType] = useState("login");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-200">
      {formType === "login" && <LoginForm setFormType={setFormType} />}
      {formType === "register" && <RegisterForm setFormType={setFormType} />}
      {formType === "forgot_password" && (
        <ForgotPasswordForm setFormType={setFormType} />
      )}
    </div>
  );
}
