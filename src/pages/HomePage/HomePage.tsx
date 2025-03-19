import { SelectInput } from "@app/components/atoms";
import { DynamicFormSection } from "@app/components/organisms";
import { useDynamicForm, useSubmitDynamicForm } from "@app/hooks";
import { DynamicForm } from "@app/types";
import { Button, Divider, Grid2, Skeleton } from "@mui/material";
import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const [dynamicFormList, { isLoading }] = useDynamicForm();
  const [selectedFormId, setSelectedFormId] = useState<string>();
  const [selectedForm, setSelectedForm] = useState<DynamicForm>();

  const [submitForm, { isPending }] = useSubmitDynamicForm();
  const navigate = useNavigate();

  const selectOptions = dynamicFormList.map((frm) => ({
    label: frm.title,
    value: frm.formId,
  }));

  const onSelect = () => {
    const selected = dynamicFormList.find(
      (frm) => frm.formId === selectedFormId
    );
    setSelectedForm(selected);
  };

  const onSubmitForm = useCallback(
    (data: Record<string, unknown>, resetForm: () => void) => {
      submitForm(data, {
        onSuccess: () => {
          resetForm();
          setTimeout(() => navigate("/forms"), 300);
        },
      });
    },
    [navigate, submitForm]
  );

  return (
    <section className="pt-5">
      <Grid2
        container
        alignItems="center"
        rowSpacing={1}
        columnSpacing={1}
        justifyContent="space-between"
      >
        <Grid2 size={{ xs: 12, md: 4 }}>
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
        </Grid2>

        <Grid2 size={{ xs: 6, md: 6 }}>
          <Button
            onClick={onSelect}
            type="button"
            size="large"
            variant="contained"
            disabled={
              !selectedFormId || selectedFormId === selectedForm?.formId
            }
          >
            Select
          </Button>
        </Grid2>
        <Grid2 container justifyContent="flex-end" size={{ xs: 6, md: 2 }}>
          <Link to="/forms" className="whitespace-nowrap">
            <Button role="div">Submitted Forms</Button>
          </Link>
        </Grid2>
      </Grid2>
      <Divider sx={{ marginTop: "1rem", marginBottom: "2.5rem" }} />
      {!selectedForm && (
        <div className="flex justify-center items-center min-h-[45vh]">
          <p className="text-center text-2xl">
            <strong>Please select a form to continue</strong>
          </p>
        </div>
      )}
      <p className="mb-5">*Form has autosave draft feature.</p>
      {selectedForm && (
        <DynamicFormSection
          dynamicForm={selectedForm}
          isPending={isPending}
          onSubmit={onSubmitForm}
        />
      )}
    </section>
  );
};

export default HomePage;
