import { Select, SelectProps } from "@/components/ui/Select";
import { cn } from "@/utils";
import { ControllerProps, ControllerRenderProps, FieldPath, FieldValues } from "react-hook-form";
import { FormControl, FormField, FormItem, useFormField } from ".";

export type SelectOption = {
  value: string;
  label: string;
};

interface SelectFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<SelectProps, keyof ControllerRenderProps<TFieldValues, TName>> {}

interface SelectFormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<ControllerProps<TFieldValues, TName>, "render"> {
  label?: string;
  error?: string;
  options: SelectOption[];
  className?: string;
  selectProps?: Omit<SelectFieldProps<TFieldValues, TName>, "label" | "error" | "labelProps" | "errorProps">;
}

export const SelectFormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  label,
  options,
  selectProps,
  error,
  className,
  ...props
}: SelectFormFieldProps<TFieldValues, TName>) => (
  <FormField
    {...props}
    render={({ field }) => (
      <FormItem className={cn(className)}>
        <FormControl>
          <ControlledSelectField
            options={options}
            selectProps={{
              ...selectProps,
              label: label,
              error: error,
            }}
            field={field}
          />
        </FormControl>
      </FormItem>
    )}
  />
);

interface ControlledSelectFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  options: SelectOption[];
  selectProps?: SelectFieldProps<TFieldValues, TName>;
  field?: ControllerRenderProps<TFieldValues, TName>;
}

const ControlledSelectField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  options,
  selectProps,
  field,
}: ControlledSelectFieldProps<TFieldValues, TName>) => {
  const { error, formMessageId, formItemId } = useFormField();

  const errorMessage = [error?.message, selectProps?.error].filter((errorItem) => errorItem).join(" ");

  const selectInnerProps: SelectFieldProps<TFieldValues, TName> = {
    ...selectProps,
    label: selectProps?.label,
    error: errorMessage,
    labelProps: { htmlFor: formItemId },
    errorProps: { id: formMessageId },
  };
  return (
    <Select {...selectInnerProps} {...field}>
      <option value="">All</option>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </Select>
  );
};
