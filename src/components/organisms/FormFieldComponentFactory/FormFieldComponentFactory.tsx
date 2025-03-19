import { FormDatePicker, FormTextInput } from "@app/components/molecules";
import { FormFieldComponentFactoryProps } from "./FormFieldComponentFactory.type";
import { Grid2 } from "@mui/material";
import { DependOnFormSelectInput } from "./DependOnFormSelectInput";

export const FormFieldComponentFactory = (
  props: FormFieldComponentFactoryProps
) => {
  const { formField, control, watch } = props;
  const { type, label, id } = formField;

  switch (type) {
    case "text":
      return (
        <Grid2 size={{ xs: 12, md: 3 }}>
          <FormTextInput
            name={id}
            control={control}
            label={label}
            required={formField.required}
            fullWidth
          />
        </Grid2>
      );
    case "select":
      return (
        <Grid2 size={{ xs: 12, md: 3 }}>
          <DependOnFormSelectInput
            name={id}
            control={control}
            label={label}
            fullWidth
            required={formField.required}
            labelId={id}
            dynamicDepend={formField.dynamicOptions}
            watch={watch}
            options={
              formField.options?.map((i) => ({ label: i, value: i })) || []
            }
          />
        </Grid2>
      );

    case "date":
      return (
        <Grid2 size={{ xs: 12, md: 3 }}>
          <FormDatePicker
            name={id}
            control={control}
            label={label}
            required={formField.required}
          />
        </Grid2>
      );
    case "group":
      return (
        <Grid2 size={{ xs: 12 }}>
          <label htmlFor={id} className="lg mb-3 block">
            <strong>{label}</strong>
          </label>
          <Grid2 id={id} container spacing={1}>
            {formField.fields.map((item) => {
              return (
                <FormFieldComponentFactory
                  key={item.id}
                  control={control}
                  formField={item}
                  watch={watch}
                />
              );
            })}
          </Grid2>
        </Grid2>
      );
    default:
      return null;
  }

  return null;
};
