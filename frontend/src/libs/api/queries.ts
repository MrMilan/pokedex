"use server";

import React from "react";
import { client } from "./client";
import {
  GET_POKEMON_BY_ID_QUERY,
  GET_POKEMON_SIMPLE_BY_NAME_QUERY,
  GET_POKEMON_TYPES_QUERY,
  GET_SIMPLE_POKEMONS_QUERY,
} from "./gqlDefinitions";
import { handleError, handleResult } from "./utils";

import { NEXT_CACHE_TAGS } from "./constants";
import type { Pokemon, PokemonConnection, PokemonsQueryInput } from "./schema";
import type { ResponseResult } from "./types";

/**
 * Retrieves a list of Pokemon based on the provided query parameters.
 * @param queryInput The input parameters for querying Pokemon.
 * @returns A Promise representing the list of retrieved Pokemon.
 */
export const getPokemons = React.cache(
  async (queryInput: PokemonsQueryInput): Promise<ResponseResult<PokemonConnection>> => {
    try {
      const result = await client.query<{ pokemons: PokemonConnection }>({
        query: GET_SIMPLE_POKEMONS_QUERY,
        variables: { query: queryInput },
        context: { fetchOptions: { next: { tags: [NEXT_CACHE_TAGS.pokemons] } } },
      });
      return handleResult(result, (resultData) => resultData.pokemons);
    } catch (error) {
      return { serverError: handleError(`Failed to fetch Pokemons`, error) };
    }
  }
);

/**
 * Retrieves a Pokemon by its name.
 * @param name The name of the Pokemon to retrieve.
 * @returns A Promise representing the retrieved Pokemon.
 */
export const getPokemonByName = React.cache(async (name: string): Promise<ResponseResult<Pokemon>> => {
  try {
    const result = await client.query<{ pokemonByName: Pokemon }>({
      query: GET_POKEMON_SIMPLE_BY_NAME_QUERY,
      variables: { name },
      context: { fetchOptions: { next: { tags: [NEXT_CACHE_TAGS.pokemonByName(name)] } } },
    });
    return handleResult(result, (resultData) => resultData.pokemonByName);
  } catch (error) {
    return { serverError: handleError(`Failed to fetch Pokemon by name "${name}"`, error) };
  }
});

/**
 * Retrieves a Pokemon by its ID.
 * @param id The ID of the Pokemon to retrieve.
 * @returns A Promise representing the retrieved Pokemon.
 */
export const getPokemonById = React.cache(async (id: string): Promise<ResponseResult<Pokemon>> => {
  try {
    const result = await client.query<{ pokemonById: Pokemon }>({
      query: GET_POKEMON_BY_ID_QUERY,
      variables: { id },
      context: { fetchOptions: { next: { tags: [NEXT_CACHE_TAGS.pokemon(id)] } } },
    });
    return handleResult(result, (resultData) => resultData.pokemonById);
  } catch (error) {
    return { serverError: handleError(`Failed to fetch Pokemon by ID "${id}"`, error) };
  }
});

/**
 * Retrieves a list of Pokemon types.
 * @returns A Promise representing the list of Pokemon types.
 */
export const getPokemonTypes = React.cache(async (): Promise<ResponseResult<string[]>> => {
  try {
    const result = await client.query<{ pokemonTypes: string[] }>({
      query: GET_POKEMON_TYPES_QUERY,
    });
    return handleResult(result, (resultData) => resultData.pokemonTypes);
  } catch (error) {
    return { serverError: handleError(`Failed to fetch Pokemon types`, error) };
  }
});
