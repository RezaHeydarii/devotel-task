import { SelectInputProps } from "@app/components/atoms";
import { FormComponentProps, FormSelectInput } from "@app/components/molecules";
import { useDependSelectOptions } from "@app/hooks";
import { DynamicFormSelectField } from "@app/types";
import { UseFormWatch } from "react-hook-form";

export const DependOnFormSelectInput = (
  props: FormComponentProps<SelectInputProps> & {
    dynamicDepend: DynamicFormSelectField["dynamicOptions"];
    watch: UseFormWatch<Record<string, unknown>>;
  }
) => {
  const { dynamicDepend, watch, options: propOptions, ...rest } = props;

  const [list, { isLoading }] = useDependSelectOptions(
    dynamicDepend
      ? {
          ...dynamicDepend,
          dependOnValue: watch(dynamicDepend.dependsOn) as string,
        }
      : undefined
  );

  const options =
    propOptions && propOptions.length > 0
      ? propOptions
      : list.map((i) => ({ label: i, value: i }));

  return (
    <FormSelectInput
      {...rest}
      options={options}
      label={isLoading ? "Loading Options" : rest.label}
    />
  );
};
