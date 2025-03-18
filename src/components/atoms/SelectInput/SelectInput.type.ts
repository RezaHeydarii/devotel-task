import { SelectProps } from "@mui/material";
export interface SelectInputOptionProps {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectInputProps
  extends Pick<
    SelectProps,
    "label" | "value" | "onChange" | "id" | "labelId" | "onBlur" | "onFocus"
  > {
  options: SelectInputOptionProps[];
  fullWidth?: boolean;
  helperText?: string;
  error?: boolean;
}
