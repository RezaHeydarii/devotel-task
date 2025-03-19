import { useForm } from "react-hook-form";
import { FormFieldComponentFactory } from "../FormFieldComponentFactory";
import { DynamicFormSectionProps } from "./DynamicFormSection.type";
import { Button, Grid2 } from "@mui/material";
import { useEffect } from "react";

export const DynamicFormSection = (props: DynamicFormSectionProps) => {
  const { dynamicForm } = props;
  const { fields } = dynamicForm;
  const { control, handleSubmit, reset, watch } =
    useForm<Record<string, unknown>>();

  const onSubmit = handleSubmit(() => {});

  useEffect(() => {
    reset({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dynamicForm.formId]);

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
        <Button type="submit" size="large" color="success" variant="contained">
          Submit Form
        </Button>
      </div>
    </form>
  );
};
