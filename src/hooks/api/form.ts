import { FETCH_DYNAMIC_FORM } from "@app/constants";
import { getDynamicForm } from "@app/services";
import { useQuery } from "@tanstack/react-query";

export const useDynamicForm = () => {
  const { data, ...rest } = useQuery({
    queryKey: [FETCH_DYNAMIC_FORM],
    queryFn: getDynamicForm,
  });

  const formList = data || [];

  return [formList, rest] as const;
};
