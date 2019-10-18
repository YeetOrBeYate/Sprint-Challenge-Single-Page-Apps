import React, { useState, useEffect } from "react";
import axios from "axios";
import {Form,Field,withFormik} from "formik";
import CharacterCard from "./CharacterCard";

function SearchForm({values}) {

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
 
  return (
    <section className="search-form">

        <Form className = "formy">
                
                <label>
                    Name:
                    <Field className="inputs" type="text" name="name" placeholder="enter your name"/>
                </label>
                
                <button type="submit">Submit</button>
        </Form>
    
    </section>
  );
}

const RenderForm = withFormik({

  mapPropsToValues({name}){
    return{
      name: name || ''
    }
  },

  handleSubmit(values,{characters}){
    console.log(values);
  
  }

})(SearchForm)

export default RenderForm;
