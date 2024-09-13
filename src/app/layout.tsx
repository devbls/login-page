"use client";
import { Montserrat } from "next/font/google";
import { FormProvider, useForm } from "react-hook-form";

import { Inputs } from "@/components/Login/types";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const methods = useForm<Inputs>({
    defaultValues: {
      remember_password: true,
    },
  });

  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <FormProvider {...methods}>{children}</FormProvider>
      </body>
    </html>
  );
}
