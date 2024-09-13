import { FaArrowLeft, FaEnvelope } from "react-icons/fa";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { useEffect } from "react";

import { Form } from ".";
import { Input } from "../../Input";
import { Button } from "../../Button";
import { Inputs } from "../types";

type Props = {
  setFormType: (type: string) => void;
};

export const ForgotPasswordForm = ({ setFormType }: Props) => {
  const { reset } = useFormContext<Inputs>();

  const handleRecovery: SubmitHandler<Inputs> = () => {};

  useEffect(() => {
    reset();
  }, [reset]);

  return (
    <Form
      title="Password recovery"
      onSubmit={handleRecovery}
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
  );
};
