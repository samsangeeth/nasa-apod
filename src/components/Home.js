import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Menu , Segment , Image } from 'semantic-ui-react';
import Nav from './Nav'
import logo from './wormlogo.png';


export default function Home(){
  return(
   
    <div>
      <Segment>
       <Nav />
       </Segment>
       <Image src={logo} size='massive' bordered centered />
    </div>
  )
}
