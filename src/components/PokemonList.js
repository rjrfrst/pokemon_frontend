import Pokemons from "./Pokemons";
const PokemonList = ({pokemons}) => {

    // Map an array
    const pokemonComponents = pokemons.map((pokemon) => {
        return <Pokemons key={pokemon.id} pokemon={pokemon} />
    });

    return (
        <>
            <h2>This is the list of pokemons</h2>
            {pokemonComponents}
        </>
    );
}
 
export default PokemonList;