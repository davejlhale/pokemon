import { useState, useEffect } from 'react';
import "../scss/pokeCard.scss";



const PokeCard = ({ pokemon, onClick }) => {
    const [pokeData, setPokeData] = useState([]);
   
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(pokemon.url)
          const data = await response.json()
          setPokeData(data)
        } catch (err) {
          console.log(err);
        }
      }
      fetchData();
    }, [pokemon.url]);
    let altn = `normal ${pokeData.name}`
    let alts = `shiny ${pokeData.name}`
   
   
    return (
      <div className="poke-card" id="poke-card" onClick={onClick}>
        {pokeData.sprites ? <img  alt={altn} src={pokeData.sprites.front_default} /> : null}
        <h2>{pokeData.name}</h2>
        {pokeData.sprites ? <img  alt={alts} src={pokeData.sprites.front_shiny} /> : null}   


        
      </div>
  
  
    )
  }

  export default PokeCard;
  