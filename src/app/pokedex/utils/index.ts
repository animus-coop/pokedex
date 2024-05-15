export const formatPokemons = async (results:any) => {
  const pokemons = [];
  const pokePromises = [];
  for (const dtoPokemon of results) {
    const resPokemon = await fetch(dtoPokemon.url);
    pokePromises.push(resPokemon);
  }
  const infoPokemons = await Promise.all(pokePromises);
  for (const pokemon of infoPokemons) {
    const infoPokemon = await pokemon.json();
    const stats = infoPokemon.stats.reduce((stats:any, stat:any) => {
      stats[stat.stat.name] = stat.base_stat;
      return stats;
    }, {});
    pokemons.push({
      name: infoPokemon.name,
      title: infoPokemon.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${infoPokemon.id}.png`,
      specs: stats
    });
  }
  return pokemons;
}