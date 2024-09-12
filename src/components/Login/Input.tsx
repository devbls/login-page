import { ReactElement } from "react";

type Props = {
  label: string;
  type?: string;
  name: string;
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
  return (
    <label
      className={`flex flex-col text-xs font-semibold relative ${labelStyles}`}
    >
      {label}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="h-9 font-normal border border-gray-300 focus-visible:border-blue-500 focus-visible:outline-none rounded-2xl px-3 mt-1 transition-colors"
      />
      <div className="absolute right-3 top-1/2 translate-y-1">{icon}</div>
    </label>
  );
};
