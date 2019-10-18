import React from "react";
import Header from "./components/Header.js";
import Welcomepage from "./components/WelcomePage";
import {Route,Link} from "react-router-dom";
import CharacterList from "./components/CharacterList";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";


export default function App() {
  return (
    <main>
      <Header/>
      <Route exact path="/" component={Welcomepage}/>
      <Route path = "/characters" component={CharacterList}/>
      <Link to="/characters">Characters</Link>
    </main>
  );
}
