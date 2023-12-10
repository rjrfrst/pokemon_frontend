import Pokemons from "./Pokemons";
const PokemonList = ({pokemon}) => {

    // Map an array, need to pass pokemon inside the () => {}
    const pokemonComponents = pokemon.map((pokemon) =>{
    return <Pokemons key={pokemon.id} pokemon={(pokemon)}/>
    })

    return (
        <>
            <h2>This is the list of pokemons</h2>
            {pokemonComponents}
        </>
    );
}
 
export default PokemonList;