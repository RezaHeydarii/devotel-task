import { TextInput, TextInputProps } from "@app/components/atoms";
import { FormComponentProps } from "./FormComponents.type";
import { Controller } from "react-hook-form";

export const FormTextInput = (props: FormComponentProps<TextInputProps>) => {
  const { name, control, required, ...inputProps } = props;
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field, fieldState }) => (
        <TextInput
          {...inputProps}
          {...field}
          error={!!fieldState.error}
          helperText={inputProps.helperText || fieldState.error?.message}
        />
      )}
    />
  );
};
