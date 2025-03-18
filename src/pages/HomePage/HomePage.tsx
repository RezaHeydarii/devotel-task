import { SelectInput } from "@app/components/atoms";
import { useDynamicForm } from "@app/hooks";
import { Skeleton } from "@mui/material";
import { useMemo, useState } from "react";

const HomePage = () => {
  const [dynamicFormList, { isLoading }] = useDynamicForm();
  const [selectedFormId, setSelectedFormId] = useState<string>();

  const selectOptions = dynamicFormList.map((frm) => ({
    label: frm.title,
    value: frm.formId,
  }));
  const selectedForm = useMemo(() => {
    return dynamicFormList.find((f) => f.formId === selectedFormId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFormId]);

  return (
    <section className="flex justify-center mt-10 items-center max-w-md px-2.5 mx-auto">
      {isLoading && (
        <Skeleton variant="rectangular" height="3.125rem" width="100%" />
      )}
      {!isLoading && (
        <SelectInput
          labelId="form-type"
          label="Form"
          fullWidth
          options={selectOptions}
          value={selectedForm}
          onChange={(e) => setSelectedFormId(e.target.value as string)}
        />
      )}
    </section>
  );
};

export default HomePage;
