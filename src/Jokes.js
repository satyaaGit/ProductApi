import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function JokesList() {
  const [jokes, setJokes] = useState([]);
  

  useEffect(() => {
    const getData =async () => {
        const jokes =await fetch("https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10");
        const data =await jokes.json();
       
        setJokes(data.jokes)
    }
    getData();
  
  },[]);


  return (
    <div>
      <h1>Jokes</h1>

      <ul>
        {jokes.map((item) => {
          return (

          
          <li key={item.id}><p>{item.joke}</p></li>
          )
        }
       )} </ul>
 
    </div>
  );
}

export default JokesList;