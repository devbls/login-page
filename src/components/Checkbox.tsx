import { useFormContext } from "react-hook-form";

import { Inputs, InputValues } from "./Login/types";

type Props = {
  title: string;
  id: InputValues;
};

export const Checkbox = ({ title, id }: Props) => {
  const { register } = useFormContext<Inputs>();

  return (
    <div className="inline-flex items-center select-none">
      <label className="flex items-center cursor-pointer relative hover:shadow-md transition-all">
        <input
          type="checkbox"
          id={id}
          {...register(id)}
          className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 checked:bg-blue-500 checked:border-blue-500"
        />
        <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
      <label className="cursor-pointer ml-2 text-xs font-semibold" htmlFor={id}>
        {title}
      </label>
    </div>
  );
};
