import React, { useEffect, useState } from "react";
import axios from "axios";
import {Spinner} from "reactstrap";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import {Route, Link} from "react-router-dom";
import Welcomepage from "./WelcomePage";
import StyledCenter from "./styled";


export default function CharacterList() {
  
  const [data,setData]= useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
    .then((res)=>{
      const character = res.data.results.filter(character=>{
        return character.name.toLowerCase().includes(query.toLowerCase())
      });
      console.log("characters:", res.data.results);
      setData(character)
    })
  }, [query]);


  const handleInputChange = e =>{
    setQuery(e.target.value);
  }

  if(data.length==0){
    return(
      <div>
        <Spinner color="primary"/>
      </div>
    );
  }

  

  return (

    <div>
      <StyledCenter>
        <Link to ="/">Home</Link>
      </StyledCenter>
      <div>
        <Route exact path="/" component= {Welcomepage}/>
      </div>
      <SearchForm query = {query} funct = {handleInputChange}/>
      <section className="character-list">
        {data.map((char,index)=>(
          <CharacterCard key = {index} img = {char.image} name={char.name} spec ={char.species} gender ={char.gender} status={char.status}/>
        ))}
      </section>
    </div>
  );
}
