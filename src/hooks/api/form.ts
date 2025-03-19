import { FETCH_DYNAMIC_FORM } from "@app/constants";
import { getDependSelectOptions, getDynamicForm } from "@app/services";
import { DynamicFormSelectField } from "@app/types";
import { useQuery } from "@tanstack/react-query";

export const useDynamicForm = () => {
  const { data, ...rest } = useQuery({
    queryKey: [FETCH_DYNAMIC_FORM],
    queryFn: getDynamicForm,
  });

  const formList = data || [];

  return [formList, rest] as const;
};

export const useDependSelectOptions = (
  params?: DynamicFormSelectField["dynamicOptions"] & { dependOnValue?: string }
) => {
  const { endpoint, dependsOn, method, dependOnValue } = params || {};
  const { data, ...rest } = useQuery({
    queryKey: [endpoint, dependsOn, dependOnValue],
    queryFn: () =>
      getDependSelectOptions({
        dependsOn: dependsOn!,
        endpoint: endpoint!,
        method: method!,
        dependOnValue: dependOnValue!,
      }),
    enabled: !!endpoint && !!dependsOn && !!method && !!dependOnValue,
  });

  const list = data
    ? Object.keys(data).reduce<string[]>((total, key) => {
        if (Array.isArray(data[key])) {
          total = [...total, ...data[key]] as string[];
        }
        return total;
      }, [])
    : [];
  return [list, rest] as const;
};
