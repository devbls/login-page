import { FcGoogle } from "react-icons/fc";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Form } from ".";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { Checkbox } from "../../Checkbox";
import { Inputs } from "../types";

type Props = {
  setFormType: (type: string) => void;
};

export const LoginForm = ({ setFormType }: Props) => {
  const [loading, setLoading] = useState(false);

  const { reset, watch } = useFormContext<Inputs>();

  const { push } = useRouter();

  const handleLogin: SubmitHandler<Inputs> = async () => {
    setLoading(true);

    const email = watch("email");

    try {
      setTimeout(() => {
        push(`/home?email=${email}`);
        setLoading(false);
        reset(undefined, { keepDefaultValues: true });
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    reset();
  }, [reset]);

  return (
    <Form onSubmit={handleLogin} title="Login">
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
        <Checkbox title="Remember Me" id="remember_password" />
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
        loading={loading}
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
  );
};
