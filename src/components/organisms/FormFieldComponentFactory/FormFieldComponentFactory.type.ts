import { DynamicFormField } from "@app/types";
import { Control, UseFormWatch } from "react-hook-form";

export interface FormFieldComponentFactoryProps {
  formField: DynamicFormField;
  control: Control;
  watch: UseFormWatch<Record<string, unknown>>;
}
