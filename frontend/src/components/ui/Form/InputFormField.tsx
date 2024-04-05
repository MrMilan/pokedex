import { Input, InputProps } from "@/components/ui/Input";
import { cn } from "@/utils";
import { ControllerProps, ControllerRenderProps, FieldPath, FieldValues } from "react-hook-form";
import { FormControl, FormField, FormItem, useFormField } from ".";

interface InputFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<InputProps, keyof ControllerRenderProps<TFieldValues, TName>> {}

export interface InputFormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<ControllerProps<TFieldValues, TName>, "render"> {
  label?: string;
  error?: string;
  className?: string;
  inputProps?: Omit<InputFieldProps<TFieldValues, TName>, "label" | "error" | "labelProps" | "errorProps">;
}

export const InputFormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  label,
  inputProps,
  error,
  className,
  ...props
}: InputFormFieldProps<TFieldValues, TName>) => {
  return (
    <FormField
      {...props}
      render={({ field }) => (
        <FormItem className={cn(className)}>
          <FormControl>
            <ControlledInputField
              inputProps={{
                ...inputProps,
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
};

interface ControlledInputFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  inputProps?: InputFieldProps<TFieldValues, TName>;
  field?: ControllerRenderProps<TFieldValues, TName>;
}

const ControlledInputField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  inputProps,
  field,
}: ControlledInputFieldProps<TFieldValues, TName>) => {
  const { error, formMessageId, formItemId } = useFormField();

  const errorMessage = [error?.message, inputProps?.error].filter((errorItem) => errorItem).join(" ");

  const inputInnerProps: InputFieldProps<TFieldValues, TName> = {
    ...inputProps,
    label: inputProps?.label,
    error: errorMessage,
    labelProps: { htmlFor: formItemId },
    errorProps: { id: formMessageId },
  };
  return <Input {...inputInnerProps} {...field} />;
};
