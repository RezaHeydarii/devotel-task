import { TextFieldProps } from "@mui/material";

export type TextInputProps = Pick<
  TextFieldProps,
  | "value"
  | "onChange"
  | "id"
  | "onKeyDown"
  | "onKeyUp"
  | "variant"
  | "label"
  | "onFocus"
  | "onBlur"
  | "helperText"
  | "error"
  | "fullWidth"
>;
