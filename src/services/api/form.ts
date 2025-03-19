import {
  FETCH_DYNAMIC_FORM,
  FETCH_SUBMITTED_APPLICATION,
  SUBMIT_FORM,
} from "@app/constants";
import { httpService } from "../http/httpService";
import {
  GetDependSelectOptionsRequest,
  GetDynamicFormResponse,
  SubmitDynamicFormRequest,
  SubmitDynamicFormResponse,
  SubmittedApplicationResponse,
} from "./form.type";

export const getDynamicForm = () => {
  return httpService
    .get<GetDynamicFormResponse>(FETCH_DYNAMIC_FORM)
    .then((res) => res.data);
};

export const submitDynamicForm = (data: SubmitDynamicFormRequest) => {
  return httpService
    .post<SubmitDynamicFormResponse>(SUBMIT_FORM, data)
    .then((res) => res.data);
};

export const getSubmittedApplications = () => {
  return httpService
    .get<SubmittedApplicationResponse>(FETCH_SUBMITTED_APPLICATION)
    .then((res) => res.data);
};

export const getDependSelectOptions = ({
  dependsOn,
  endpoint,
  method,
  dependOnValue,
}: GetDependSelectOptionsRequest) => {
  return httpService
    .request<Record<string, unknown>>({
      method,
      url: `${endpoint}?${dependsOn}=${dependOnValue}`,
    })
    .then((res) => res.data);
};
