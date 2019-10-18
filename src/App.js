import React from "react";
import Header from "./components/Header.js";
import Welcomepage from "./components/WelcomePage";
import {Route,Link} from "react-router-dom";
import CharacterList from "./components/CharacterList";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import SearchForm from "./components/SearchForm";


export default function App() {
  return (
    <main>
      <Header/>
      <Route path = "/characters" component={CharacterList}/>
      <Route exact path= "/" component={Welcomepage}/>
      <Link to="/characters">All Characters</Link>
    </main>
  );
}
