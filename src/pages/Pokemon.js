
import axios from 'axios';
import { useEffect, useState} from 'react';
function Pokemon1() {
  const [pokemon, setPokemon]= useState([])
  const get20Pokemon =()=>{
    axios
    .get(' http://pokeapi.co/api/v2/pokemon')
    .then((response)=>{ 
    setPokemon(response?.data?.results)
    console.log(response?.data?.results);
     })
  .catch((err)=>{
    console.log(err)
  })
}
  useEffect(() => {
  get20Pokemon ()},[])
 return(
  <div className='poke'>
    <h1>POKEMON GO!</h1>
    <div style={{ display: 'flex-center', gap: '16px', alignContent:'space-between', justifyContent:'center',color:'GrayText'}}>
        {pokemon.map((e)=>
        <div>
          <button onClick={e.results}>{e.name}</button></div>
        
        )}
    </div>
  </div>
);
}

export default Pokemon1;