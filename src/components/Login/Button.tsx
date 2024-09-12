import { ButtonHTMLAttributes, ReactElement } from "react";

type Props = {
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  title: string;
  icon?: ReactElement;
  styles: string;
};

export const Button = ({ type, title, icon, styles }: Props) => {
  return (
    <button
      type={type}
      className={`h-9 w-full text-sm select-none font-semibold mt-8 rounded-full transition-all duration-200 ${styles}`}
    >
      {icon ? (
        <div className="flex flex-row items-center justify-center">
          {icon}
          {title}
        </div>
      ) : (
        title
      )}
    </button>
  );
};
