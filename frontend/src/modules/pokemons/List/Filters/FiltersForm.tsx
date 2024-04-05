"use client";
import { GridIcon, ListLinesIcon } from "@/components/Icons";
import { type ButtonGroupOption } from "@/components/ui/ButtonGroup";
import { ButtonGroupFormField, Form, InputFormField, SelectFormField } from "@/components/ui/Form";
import { ContentFilter, ViewMode } from "@/modules/pokemons/enums";
import { toTitleCase } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import debounce from "lodash.debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { filtersFormSchema, getDefaultFilterValues, setURLParams, type FiltersFormSchema } from "./filtersForm.utils";

const contentFilterOptions: ButtonGroupOption[] = Object.values(ContentFilter).map((value) => ({
  value,
  label: toTitleCase(value).replace(/_/g, " "),
}));

const viewModeOptions: ButtonGroupOption[] = Object.values(ViewMode).map((value) => ({
  value,
  Component: value === ViewMode.List ? <ListLinesIcon /> : <GridIcon />,
}));

type FiltersFormProps = {
  pokemonTypeOptions: { value: string; label: string }[];
};

export const FiltersForm: React.FC<FiltersFormProps> = ({ pokemonTypeOptions }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const form = useForm<FiltersFormSchema>({
    resolver: zodResolver(filtersFormSchema),
    defaultValues: getDefaultFilterValues(searchParams),
  });

  const watchedFields = form.watch();

  const debouncedSubmit = useRef(
    debounce((watchedFields: FiltersFormSchema) => {
      const params = setURLParams(watchedFields);
      replace(`${pathname}?${params.toString()}`);
    }, 500)
  ).current;

  useEffect(() => {
    debouncedSubmit(watchedFields);
  }, [watchedFields, debouncedSubmit]);

  return (
    <Form {...form}>
      <form className="flex w-full flex-col gap-1 lg:w-[1024px]">
        <ButtonGroupFormField name="contentFilter" control={form.control} options={contentFilterOptions} />
        <div className="flex items-center gap-1">
          <InputFormField name="name" control={form.control} className="w-1/2" inputProps={{ placeholder: "Search" }} />
          <SelectFormField name="pokemonType" control={form.control} options={pokemonTypeOptions} className="grow" />
          <ButtonGroupFormField
            name="viewMode"
            control={form.control}
            buttonGroupProps={{
              variant: "basic",
            }}
            options={viewModeOptions}
          />
        </div>
      </form>
    </Form>
  );
};
