import { ReactElement, ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
  icon?: ReactElement;
};

export const Form = ({ children, title, icon }: Props) => {
  return (
    <form className="w-[28rem] p-12 bg-white border rounded-lg">
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
