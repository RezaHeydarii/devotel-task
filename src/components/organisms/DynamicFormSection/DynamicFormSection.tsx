import { FormFieldComponentFactory } from "../FormFieldComponentFactory";
import { DynamicFormSectionProps } from "./DynamicFormSection.type";
import { Button, Grid2 } from "@mui/material";
import { useDynamicFormProps } from "./hooks/useDynamicFormProps";

export const DynamicFormSection = (props: DynamicFormSectionProps) => {
  const { dynamicForm, onSubmit: onSubmitProp, isPending } = props;
  const { fields } = dynamicForm;
  const { control, handleSubmit, reset, watch } = useDynamicFormProps(
    dynamicForm.formId
  );

  const onSubmit = handleSubmit((data) => {
    onSubmitProp(data, () => reset({}));
  });

  return (
    <form onSubmit={onSubmit}>
      <Grid2 container rowSpacing={3} columnSpacing={1}>
        {fields.map((field) => {
          return (
            <FormFieldComponentFactory
              key={field.id}
              control={control}
              formField={field}
              watch={watch}
            />
          );
        })}
      </Grid2>
      <div className="flex justify-center items-center mt-5">
        <Button
          onClick={() => reset({})}
          size="large"
          color="warning"
          variant="contained"
          disabled={isPending}
        >
          Reset
        </Button>
        <div className="w-1" />
        <Button
          disabled={isPending}
          type="submit"
          size="large"
          color="success"
          variant="contained"
        >
          Submit Form
        </Button>
      </div>
    </form>
  );
};
