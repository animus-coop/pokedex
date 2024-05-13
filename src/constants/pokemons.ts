export interface PokemonSpecs {
    HP: number;
    Attack: number;
    Defense: number;
    SpAttack: number;
    SpDefence: number;
  }
  
  export interface Pokemon {
    name: string;
    image: string;
    specs: PokemonSpecs;
  }
  
  export const pokemons: Pokemon[] = [
    {
      name: "Venusaur",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      specs: {
        HP: 80,
        Attack: 82,
        Defense: 83,
        SpAttack: 100,
        SpDefence: 95,
      },
    },
    {
        name: "bulbasaur",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        specs: {
          HP: 45,
          Attack: 49,
          Defense: 49,
          SpAttack: 65,
          SpDefence: 65,
        },
      },
      {
        name: "Charizard",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        specs: {
          HP: 78,
          Attack: 84,
          Defense: 78,
          SpAttack: 100,
          SpDefence: 85,
        },
      },
    // Add more pokemons here...
  ];
