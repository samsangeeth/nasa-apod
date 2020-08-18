import React, { useState, useEffect } from 'react';
import NavBar from "./NavBar";
import Nav from "./Nav";
import { Segment, Image, Header } from 'semantic-ui-react'


const apiKey = process.env.REACT_APP_NASA_KEY;

export default function MarsWeather(){

  const[photoData, SetPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto(){
      const res = await fetch (`https: //api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`);
      const data = await res.json();
      SetPhotoData(data);
    }
  }, []);

  if(!photoData) return <div />;


  return(
    <>
    
    </>
  )
}