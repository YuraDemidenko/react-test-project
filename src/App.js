import React, { useState } from 'react'
import Accordion from './component/accordion';
import './App.css';
import {GET_ALL_CONTINENTS} from './query/continents'
import {useQuery} from '@apollo/client'
import { useEffect } from 'react';

function App() {
  const {loading, error, data} = useQuery(GET_ALL_CONTINENTS);

  const [continents, setContinets] = useState([]);

 

  useEffect(() => {

    if (!loading) {
      setContinets(data)
    } 
    console.log(continents.getAllContitnents);
  }, [data])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) console.log(error);
  
  return (

    <div className="App">

      <div className="wrapper">
        
        <Accordion title="What is your return policy?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Accordion>

        <Accordion title="What is your return policy?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Accordion>

        <Accordion title="What is your return policy?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Accordion>

        
      </div>
       
      
    </div>
  );
}

export default App;
