import { TextField } from "@mui/material";
import { TextInputProps } from "./TextInput.type";
import { forwardRef } from "react";

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const { id, label, value, onChange, variant, ...rest } = props;
    return (
      <TextField
        ref={ref}
        id={id}
        label={label}
        variant={variant}
        value={value}
        onChange={onChange}
        {...rest}
      />
    );
  }
);
