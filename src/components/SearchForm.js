import React, { useState, useEffect } from "react";
import axios from "axios";
import {Form,Field,withFormik} from "formik";
import CharacterCard from "./CharacterCard";

function SearchForm(){

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

  const names = []

  characters.forEach(char=>{
    names.push(char.name);
  })

  

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  useState(() => {
    const results = names.filter(name =>
      name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  console.log('result', searchTerm)

  return (
    <div className="yeet">
      <input
        type="text"
        placeholder="Search"
        // value={searchTerm}
      />
      <button onClick={handleChange}>Search!</button>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </div>
  );
}

export default SearchForm;