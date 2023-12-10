import PokemonList from "../components/PokemonList";
// import Pokemons from "../components/Pokemons";
import { useEffect, useState } from "react";

const PokemonContainer = () => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(false);

    // fetch the data of the pokemons, create a fetchPokemon function
    const fetchPokemons = async () => {
        try{
        setLoading(true);
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/"); //This should load the first 20 pokemons
        const data = await response.json(); //call the function here
        setPokemon(data.results);
        setLoading(false);
        console.log(data); //This works, was able to generate array with 20 pokemons
        } catch (error){
            console.log("error",error);
        }
    }
    // insert the useEffect, remember the dependency array
    useEffect(() => {
        fetchPokemons();
    }, [])



    
    return ( 
        <>
        <h1>This is the pokemon container</h1>
        <PokemonList pokemon={pokemon}/>

        {!loading && pokemon ? (
            <div>
                <h1>{pokemon.name}</h1>
            </div>
        ): null}
        
        </>
    );
}

export default PokemonContainer;