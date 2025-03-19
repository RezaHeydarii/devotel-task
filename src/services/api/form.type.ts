import {
  DynamicForm,
  DynamicFormSelectField,
  SubmittedForm,
} from "@app/types/form";

export type GetDynamicFormResponse = DynamicForm[];

export interface SubmitDynamicFormRequest {
  test: string;
}
export interface SubmitDynamicFormResponse {
  test: string;
}

export type SubmittedApplicationResponse = SubmittedForm;

export type GetDependSelectOptionsRequest =
  Required<DynamicFormSelectField>["dynamicOptions"] & {
    dependOnValue: string;
  };
