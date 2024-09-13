"use client";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { RegisterForm } from "@/components/Login/forms/RegisterForm";
import { ForgotPasswordForm } from "@/components/Login/forms/ForgotPasswordForm";
import { LoginForm } from "@/components/Login/forms/LoginForm";
import { Inputs } from "@/components/Login/types";

export default function Home() {
  const [formType, setFormType] = useState("login");
  const methods = useForm<Inputs>({
    defaultValues: {
      remember_password: true,
    },
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-200">
      <FormProvider {...methods}>
        {formType === "login" && <LoginForm setFormType={setFormType} />}
        {formType === "register" && <RegisterForm setFormType={setFormType} />}
        {formType === "forgot_password" && (
          <ForgotPasswordForm setFormType={setFormType} />
        )}
      </FormProvider>
    </div>
  );
}
