import { gql } from "@apollo/client";

export const GET_POKEMONS_QUERY = gql`
  query GetPokemons($query: PokemonsQueryInput!) {
    pokemons(query: $query) {
      edges {
        id
        number
        name
        weight {
          minimum
          maximum
        }
        height {
          minimum
          maximum
        }
        classification
        types
        resistant
        attacks {
          fast {
            name
            type
            damage
          }
          special {
            name
            type
            damage
          }
        }
        weaknesses
        fleeRate
        maxCP
        evolutions {
          id
          name
        }
        evolutionRequirements {
          amount
          name
        }
        maxHP
        image
        sound
        isFavorite
      }
    }
  }
`;

export const GET_SIMPLE_POKEMONS_QUERY = gql`
  query GetSimplePokemons($query: PokemonsQueryInput!) {
    pokemons(query: $query) {
      edges {
        id
        name
        types
        isFavorite
        image
      }
    }
  }
`;

export const GET_POKEMON_BY_NAME_QUERY = gql`
  query GetPokemonByName($name: String!) {
    pokemonByName(name: $name) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      weaknesses
      fleeRate
      maxCP
      evolutions {
        id
        name
      }
      evolutionRequirements {
        amount
        name
      }
      maxHP
      image
      sound
      isFavorite
    }
  }
`;

export const GET_POKEMON_SIMPLE_BY_NAME_QUERY = gql`
  query GetPokemonByName($name: String!) {
    pokemonByName(name: $name) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      types
      resistant
      classification
      maxCP
      evolutions {
        id
        name
      }
      evolutionRequirements {
        amount
        name
      }
      maxHP
      image
      sound
      isFavorite
    }
  }
`;

export const GET_POKEMON_BY_ID_QUERY = gql`
  query GetPokemonById($id: ID!) {
    pokemonById(id: $id) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      weaknesses
      fleeRate
      maxCP
      evolutions {
        id
        name
      }
      evolutionRequirements {
        amount
        name
      }
      maxHP
      image
      sound
      isFavorite
    }
  }
`;

export const FAVORITE_POKEMON_MUTATION = gql`
  mutation FavoritePokemon($id: ID!) {
    favoritePokemon(id: $id) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      weaknesses
      fleeRate
      maxCP
      evolutions {
        id
        name
      }
      evolutionRequirements {
        amount
        name
      }
      maxHP
      image
      sound
      isFavorite
    }
  }
`;

export const UNFAVORITE_POKEMON_MUTATION = gql`
  mutation UnFavoritePokemon($id: ID!) {
    unFavoritePokemon(id: $id) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      weaknesses
      fleeRate
      maxCP
      evolutions {
        id
        name
      }
      evolutionRequirements {
        amount
        name
      }
      maxHP
      image
      sound
      isFavorite
    }
  }
`;
