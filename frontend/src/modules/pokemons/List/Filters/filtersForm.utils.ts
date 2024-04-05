import { ContentFilter, ViewMode } from "@/modules/pokemons/enums";
import { ReadonlyURLSearchParams } from "next/navigation";
import * as z from "zod";

export const filtersFormSchema = z.object({
  name: z.string().optional(),
  pokemonType: z.string().optional(),
  contentFilter: z.nativeEnum(ContentFilter),
  viewMode: z.nativeEnum(ViewMode),
});

export type FiltersFormSchema = z.infer<typeof filtersFormSchema>;

export const getDefaultFilterValues = (searchParams: ReadonlyURLSearchParams): FiltersFormSchema => {
  const name = searchParams.get("name") ?? "";
  const pokemonType = searchParams.get("pokemonType") ?? "";
  const contentFilter = (searchParams.get("contentFilter") as ContentFilter) ?? ContentFilter.All;
  const viewMode = (searchParams.get("viewMode") as ViewMode) ?? ViewMode.Grid;

  return {
    name,
    pokemonType,
    contentFilter,
    viewMode,
  };
};

export const setURLParams = (values: FiltersFormSchema) => {
  const params = new URLSearchParams();

  Object.entries(values).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      params.set(key, value.toString());
    } else {
      params.delete(key);
    }
  });

  return params;
};
