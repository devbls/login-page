import { FaArrowLeft, FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { useEffect } from "react";

import { Form } from "../Form";
import { Input } from "../Input";
import { Button } from "../Button";
import { Inputs } from "../types";

type Props = {
  setFormType: (type: string) => void;
};

export const RegisterForm = ({ setFormType }: Props) => {
  const { reset } = useFormContext<Inputs>();

  const handleRegister: SubmitHandler<Inputs> = () => {};

  useEffect(() => {
    reset();
  }, [reset]);

  return (
    <Form
      title="Register"
      onSubmit={handleRegister}
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
        name="confirm_password"
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
  );
};
