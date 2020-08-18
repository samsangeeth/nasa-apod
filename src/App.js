import React from 'react';
import {BrowserRouter, Route , Switch} from 'react-router-dom'
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import './App.css';
import { Button } from 'semantic-ui-react'
import MarsWeather from './components/MarsWeather';

function App() {
  return (
   <BrowserRouter>
   <div>
     <Switch>
      <Route component={Home} path="/" exact />
      <Route component={NasaPhoto} path="/nasaphoto" />
      <Route component={MarsWeather} path="/marsweather" />
     </Switch>
   </div>
   </BrowserRouter>
  );
}

export default App;
