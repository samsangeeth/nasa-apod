import React, { useState, useEffect } from 'react';
import NavBar from "./NavBar";
import Nav from "./Nav";
import { Segment, Image, Header } from 'semantic-ui-react'


const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto(){

  const[photoData, SetPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto(){
      const res = await fetch (`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
      const data = await res.json();
      SetPhotoData(data);
    }
  }, []);

  if(!photoData) return <div />;


  return(
    <>
    <Segment>
      <Nav />
    </Segment>

    <Header textAlign="center" as='h1'>Image Of The Day</Header>
    
    <div>
      {photoData.media_type === "image" ? (
      <Image src={photoData.url} alt={photoData.title} size='huge' centered/>
      ) : (
        <iframe 
        title = "space-video"
        src={photoData.url}
        frameBorder = "0"
        gesture = "media"
        allow = "encrypted-media"
        allowFullScreen
        className = "photo"
        />
      )}
      <div>
      <Header as='h2' textAlign="center">{photoData.title}</Header>
        <Header as='h3' textAlign="center">Explanation: {photoData.explanation}</Header>
        <p>Date: {photoData.date}</p>
      </div>
    </div>
    </>
  )
}