import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import { Inputs, InputValues } from "./Login/types";

type Props = {
  label: string;
  type?: string;
  name: InputValues;
  placeholder: string;
  icon: ReactElement;
  labelStyles?: string;
};

export const Input = ({
  label,
  type = "text",
  name,
  placeholder,
  icon,
  labelStyles = "",
}: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Inputs>();

  return (
    <label
      className={`flex flex-col text-xs font-semibold relative ${labelStyles}`}
    >
      {label}
      <input
        {...register(name, { required: true })}
        type={type}
        placeholder={placeholder}
        aria-required={errors[name] ? "true" : "false"}
        className={`h-9 font-normal border border-gray-300 rounded-2xl px-3 mt-1 transition-colors focus-visible:outline-none focus-visible:border-blue-500 aria-required:border-red-300`}
      />
      <div className="absolute right-3 top-1/2 translate-y-1">{icon}</div>
    </label>
  );
};
