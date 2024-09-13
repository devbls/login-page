type InputValues =
  | "name"
  | "email"
  | "password"
  | "confirm_password"
  | "remember_password";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  remember_password: boolean;
};

export type { InputValues, Inputs };
