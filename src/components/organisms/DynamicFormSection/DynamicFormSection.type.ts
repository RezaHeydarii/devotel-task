import { DynamicForm } from "@app/types";

export interface DynamicFormSectionProps {
  dynamicForm: DynamicForm;
  onSubmit: (data: Record<string, unknown>, resetForm: () => void) => void;
  isPending?: boolean;
}
