import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'semantic-ui-react'
export default function NavBar(){
  return(
    <div>
      <ul>
        <Button secondary>
        <Link to="/">Take Me Home!</Link>
        </Button>
      </ul>
    </div>
  )
}