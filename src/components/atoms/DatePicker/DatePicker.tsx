import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { DatePickerProps } from "./DatePicker.type";
import { FormHelperText } from "@mui/material";
import { forwardRef } from "react";

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (props, ref) => {
    const { value, onChange, error, helperText, label } = props;
    return (
      <>
        <MuiDatePicker
          ref={ref}
          value={value}
          onChange={onChange}
          label={label}
        />
        <FormHelperText error={error}>{helperText}</FormHelperText>
      </>
    );
  }
);
