import React, { useEffect, useState } from "react";
import axios from "axios";
import {Spinner} from "reactstrap";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import {Route, Link} from "react-router-dom";
import Welcomepage from "./WelcomePage";


export default function CharacterList() {
  const [characters,setCharacters]= useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
    .then((res)=>{
      console.log(res.data.results);
      setCharacters(res.data.results);
    })
  }, []);

  if(characters.length==0){
    return(
      <div>
        <Spinner color="primary"/>
      </div>
    );
  }

  

  return (
    <div>
      {/* <Link to="/characters/test">Search</Link>
      <div>
        <Route path ="/characters/test" component={SearchForm}/>
      </div> */}
      <section className="character-list">
        {characters.map((char,index)=>(
          <CharacterCard key = {index} img = {char.image} name={char.name} spec ={char.species} gender ={char.gender} status={char.status}/>
        ))}
      </section>
    </div>
  );
}
