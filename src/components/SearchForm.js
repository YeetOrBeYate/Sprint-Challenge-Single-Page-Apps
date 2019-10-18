import React, { useState, useEffect } from "react";
import axios from "axios";
import {Form,Field,withFormik} from "formik";
import CharacterCard from "./CharacterCard";

function SearchForm(props){

  return (
    <div>
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
    </div>
  );
}

export default SearchForm;