import { ButtonHTMLAttributes, ReactElement } from "react";
import ClipLoader from "react-spinners/ClipLoader";

type Props = {
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  title: string;
  icon?: ReactElement;
  styles: string;
  loading?: boolean;
  onClick?: () => void;
};

export const Button = ({
  type,
  title,
  icon,
  styles,
  loading = false,
  onClick = () => {},
}: Props) => {
  const handleInnerContent = () => {
    if (loading)
      return (
        <ClipLoader
          color="white"
          loading={loading}
          size={20}
          aria-label="Loading Spinner"
        />
      );

    if (icon) {
      return (
        <>
          {icon}
          {title}
        </>
      );
    }

    return title;
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`h-9 w-full text-sm select-none font-semibold mt-8 rounded-full transition-all duration-200 ${styles}`}
    >
      <div className="flex flex-row items-center justify-center">
        {handleInnerContent()}
      </div>
    </button>
  );
};
