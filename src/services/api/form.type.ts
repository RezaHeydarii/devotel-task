import {
  DynamicForm,
  DynamicFormSelectField,
  SubmittedForm,
} from "@app/types/form";

export type GetDynamicFormResponse = DynamicForm[];

export type SubmitDynamicFormRequest = Record<string, unknown>;
export interface SubmitDynamicFormResponse {
  test: string;
}

export type SubmittedApplicationResponse = SubmittedForm;

export type GetDependSelectOptionsRequest =
  Required<DynamicFormSelectField>["dynamicOptions"] & {
    dependOnValue: string;
  };
