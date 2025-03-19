import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";

export const useDynamicFormProps = (formId: string) => {
  const formProps = useForm<Record<string, unknown>>();

  const DRAFT_STORE_KEY = useMemo(() => `@devotel-drafts:${formId}`, [formId]);

  useEffect(() => {
    const draftData = localStorage.getItem(DRAFT_STORE_KEY);
    if (draftData && typeof draftData === "string") {
      formProps.reset(JSON.parse(draftData));
    } else {
      formProps.reset({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formId]);

  useEffect(() => {
    const { unsubscribe } = formProps.watch((value) => {
      localStorage.setItem(DRAFT_STORE_KEY, JSON.stringify(value));
    });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formProps.watch, formId, DRAFT_STORE_KEY]);

  return formProps;
};
