"use server";

import { client } from "./client";
import { FAVORITE_POKEMON_MUTATION, UNFAVORITE_POKEMON_MUTATION } from "./gqlDefinitions";
import { handleError, handleResult } from "./utils";

import type { Pokemon } from "./schema";
import type { ResponseResult } from "./types";

/**
 * Marks a Pokemon as favorite.
 * @param id The ID of the Pokemon to mark as favorite.
 * @returns A Promise representing the updated Pokemon.
 */
export const favoritePokemon = async (id: string): Promise<ResponseResult<Pokemon>> => {
  try {
    const result = await client.mutate<{ favoritePokemon: Pokemon }>({
      mutation: FAVORITE_POKEMON_MUTATION,
      variables: { id },
    });
    return handleResult(result, (resultData) => resultData.favoritePokemon);
  } catch (error) {
    return { serverError: handleError(`Failed to mark Pokemon with ID "${id}" as favorite`, error) };
  }
};

/**
 * Unmarks a Pokemon as favorite.
 * @param id The ID of the Pokemon to unmark as favorite.
 * @returns A Promise representing the updated Pokemon.
 */
export const unFavoritePokemon = async (id: string): Promise<ResponseResult<Pokemon>> => {
  try {
    const result = await client.mutate<{ unFavoritePokemon: Pokemon }>({
      mutation: UNFAVORITE_POKEMON_MUTATION,
      variables: { id },
    });
    return handleResult(result, (resultData) => resultData.unFavoritePokemon);
  } catch (error) {
    return { serverError: handleError(`Failed to unmark Pokemon with ID "${id}" as favorite`, error) };
  }
};
