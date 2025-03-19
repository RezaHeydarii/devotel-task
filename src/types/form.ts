export interface DynamicFormFieldShared {
  id: string;
  label: string;
}

export type DynamicFormFieldInputType = "text" | "date";

export interface DynamicFormInputField extends DynamicFormFieldShared {
  required: boolean;
  type: DynamicFormFieldInputType;
}

export interface DynamicFormSelectField
  extends Omit<DynamicFormInputField, "type"> {
  type: "select";
  options?: string[];
  dynamicOptions?: {
    dependsOn: string;
    endpoint: string;
    method: "GET";
  };
}

export interface DynamicFormGroupField extends DynamicFormFieldShared {
  type: "group";
  fields: Array<
    DynamicFormGroupField | DynamicFormInputField | DynamicFormInputField
  >;
}

export type DynamicFormField =
  | DynamicFormInputField
  | DynamicFormGroupField
  | DynamicFormSelectField;

export interface DynamicForm {
  formId: string;
  title: string;
  fields: DynamicFormField[];
}

export interface SubmittedForm {
  columns: string[];
  data: Array<Record<string, unknown>>;
}
