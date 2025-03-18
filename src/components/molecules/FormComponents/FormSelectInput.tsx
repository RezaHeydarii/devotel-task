import { SelectInput, SelectInputProps } from "@app/components/atoms";
import { FormComponentProps } from "./FormComponents.type";
import { Controller } from "react-hook-form";

export const FormSelectInput = (
  props: FormComponentProps<SelectInputProps>
) => {
  const { name, control, ...inputProps } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <SelectInput
          {...inputProps}
          {...field}
          error={!!fieldState.error}
          helperText={inputProps.helperText || fieldState.error?.message}
        />
      )}
    />
  );
};
