import React, { useState, useEffect } from "react";
import axios from "axios";
import {Form,Field,withFormik} from "formik";
import CharacterCard from "./CharacterCard"; 
import StyledCenter from "./styled";

function SearchForm(props){

  return (
    <StyledCenter>
      <form className="search">
        <input
          type="text"
          onChange={props.funct}
          value={props.query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
    </StyledCenter>
  );
}

export default SearchForm;