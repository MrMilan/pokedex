import { ButtonGroup, ButtonGroupProps } from "@/components/ui/ButtonGroup";
import { ControllerProps, ControllerRenderProps, FieldPath, FieldValues } from "react-hook-form";
import { FormControl, FormField, FormItem } from ".";

interface ButtonGroupsFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<ButtonGroupProps, keyof ControllerRenderProps<TFieldValues, TName>> {}

export interface ButtonGroupsFormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<ControllerProps<TFieldValues, TName>, "render"> {
  options: ButtonGroupsFieldProps<TFieldValues, TName>["options"];
  buttonGroupProps?: Omit<ButtonGroupsFieldProps<TFieldValues, TName>, "options">;
}

export const ButtonGroupFormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  options,
  buttonGroupProps,
  ...props
}: ButtonGroupsFormFieldProps<TFieldValues, TName>) => {
  return (
    <FormField
      {...props}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <ButtonGroup {...field} variant={buttonGroupProps?.variant} options={options} />
          </FormControl>
        </FormItem>
      )}
    />
  );
};
