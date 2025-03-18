import { Control } from "react-hook-form";

export type FormComponentProps<ComponentProps> = ComponentProps & {
  control: Control;
  name: string;
  required?: boolean;
};
