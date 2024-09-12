"use client";
import { useState } from "react";
import { FaArrowLeft, FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Form } from "@/components/Login/Form";
import { Input } from "@/components/Login/Input";
import { Button } from "@/components/Login/Button";
import { Checkbox } from "@/components/Login/Checkbox";

export default function Home() {
  const [formType, setFormType] = useState("login");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-200">
      {formType === "login" && (
        <Form title="Login">
          <Button
            type="button"
            title="Sign in with Google"
            icon={<FcGoogle size={18} className="inline-block mr-1" />}
            styles="border border-gray-300 hover:shadow-md"
          />
          <div className="flex flex-row items-center justify-between my-4">
            <hr className="w-64" />
            <p className="w-full text-xs text-center text-gray-400 select-none mx-2">
              or Sign in with email
            </p>
            <hr className="w-64" />
          </div>
          <Input
            label="E-mail*"
            name="email"
            type="email"
            placeholder="Enter your e-mail"
            icon={<FaEnvelope color="#9ca3af" />}
          />
          <Input
            label="Password*"
            name="password"
            type="password"
            placeholder="Enter your password"
            icon={<FaLock color="#9ca3af" />}
            labelStyles="mt-4"
          />
          <div className="flex flex-row items-center justify-between mt-2">
            <Checkbox title="Remember Me" id="remember" />
            <span
              onClick={() => setFormType("forgot_password")}
              className="font-bold text-blue-500 text-xs cursor-pointer select-none transition-colors hover:text-blue-600 active:opacity-85"
            >
              Forgot password?
            </span>
          </div>
          <Button
            type="submit"
            title="Login"
            styles="text-white bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
          />
          <p className="text-xs font-semibold text-center mt-2 select-none">
            Not registered?
            <span
              onClick={() => setFormType("register")}
              className="text-blue-500 cursor-pointer transition-colors hover:text-blue-600 active:opacity-85"
            >
              {" "}
              Create account
            </span>
          </p>
        </Form>
      )}
      {formType === "register" && (
        <Form
          title="Register"
          icon={
            <FaArrowLeft
              size={21}
              onClick={() => setFormType("login")}
              className="cursor-pointer"
            />
          }
        >
          <Input
            label="Name*"
            name="name"
            placeholder="Enter your name"
            icon={<FaUser color="#9ca3af" />}
            labelStyles="mt-8"
          />
          <Input
            label="E-mail*"
            name="email"
            type="email"
            placeholder="Enter your e-mail"
            icon={<FaEnvelope color="#9ca3af" />}
            labelStyles="mt-4"
          />
          <Input
            label="Password*"
            name="password"
            type="password"
            placeholder="Enter your password"
            icon={<FaLock color="#9ca3af" />}
            labelStyles="mt-4"
          />
          <Input
            label="Confirm password*"
            name="confirm-password"
            type="password"
            placeholder="Confirm your password"
            icon={<FaLock color="#9ca3af" />}
            labelStyles="mt-4"
          />
          <Button
            type="submit"
            title="Create account"
            styles="text-white bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
          />
        </Form>
      )}
      {formType === "forgot_password" && (
        <Form
          title="Password recovery"
          icon={
            <FaArrowLeft
              size={21}
              onClick={() => setFormType("login")}
              className="cursor-pointer"
            />
          }
        >
          <Input
            label="Email*"
            name="email"
            type="email"
            placeholder="Enter your e-mail"
            icon={<FaEnvelope color="#9ca3af" />}
            labelStyles="mt-8"
          />
          <Button
            type="submit"
            title="Recover password"
            styles="text-white bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
          />
        </Form>
      )}
    </div>
  );
}
