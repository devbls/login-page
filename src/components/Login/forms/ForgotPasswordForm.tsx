import { FaArrowLeft, FaEnvelope } from "react-icons/fa";
import { SubmitHandler } from "react-hook-form";

import { Form } from "../Form";
import { Input } from "../Input";
import { Button } from "../Button";
import { Inputs } from "../types";

type Props = {
  setFormType: (type: string) => void;
};

export const ForgotPasswordForm = ({ setFormType }: Props) => {
  const handleRecovery: SubmitHandler<Inputs> = () => {};

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
