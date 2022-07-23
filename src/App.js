import React, { useState, useEffect } from "react";
import Character from "./components/Character";

const App = () => {
  const [characters, setCharacters] = useState([]);

  function fetchData() {
    fetch("https://swapi.dev/api/people/")
      .then((resStream) => {
        return resStream.json();
      })
      .then((characterFromApi) => {
        console.log(characterFromApi);
        // update the array above
        setCharacters(characterFromApi);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

 return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {/* {characters.map((character)=>{
        return <div>{character}</div>
      })} */}
      {characters.map((character) => {
        return <Character key={character.name} name={character.name} />;
      })}
    </div>
  );
};

export default App;
