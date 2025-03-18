import { DatePickerProps as MuiDatePickerProps } from "@mui/x-date-pickers/DatePicker";

export interface DatePickerProps
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extends Pick<MuiDatePickerProps<any>, "value" | "onChange"> {
  error?: boolean;
  helperText?: string;
}
