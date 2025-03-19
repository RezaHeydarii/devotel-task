import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { SelectInputProps } from "./SelectInput.type";
import { forwardRef } from "react";

export const SelectInput = forwardRef<HTMLInputElement, SelectInputProps>(
  (props, ref) => {
    const {
      options,
      fullWidth,
      label,
      value,
      onChange,
      labelId,
      id,
      error,
      helperText,
      ...rest
    } = props;
    return (
      <FormControl fullWidth={fullWidth} error={error}>
        <InputLabel id={labelId}>{label}</InputLabel>
        <Select
          ref={ref}
          labelId={labelId}
          id={id}
          value={value}
          label={label}
          onChange={onChange}
          {...rest}
        >
          {options.map((op) => {
            return (
              <MenuItem key={op.value} disabled={op.disabled} value={op.value}>
                {op.label}
              </MenuItem>
            );
          })}
        </Select>
        {helperText && (
          <FormHelperText error={error}>{helperText}</FormHelperText>
        )}
      </FormControl>
    );
  }
);
