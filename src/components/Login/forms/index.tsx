import { ReactElement, ReactNode } from "react";
import { SubmitHandler, useFormContext } from "react-hook-form";

import { Inputs } from "../types";

type Props = {
  children: ReactNode;
  title: string;
  onSubmit: SubmitHandler<Inputs>;
  icon?: ReactElement;
};

export const Form = ({ children, title, onSubmit, icon }: Props) => {
  const { handleSubmit } = useFormContext<Inputs>();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[28rem] p-12 bg-white border rounded-lg"
    >
      {icon ? (
        <div className="flex items-center">
          {icon}
          <b className="pl-6 text-3xl select-none">{title}</b>
        </div>
      ) : (
        <b className="text-3xl select-none">{title}</b>
      )}
      {children}
    </form>
  );
};
