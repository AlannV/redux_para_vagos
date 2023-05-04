import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getAllCharacters } from "./redux/action-creators";

function App() {
  const dispatch = useDispatch();

  const characters = useSelector((state) => state.allCharacters);

  useEffect(() => {
    dispatch(getAllCharacters());
  }, []);

  console.log(characters);

  return (
    <div className="App">
      <h1>Chau mundo</h1>
      {characters &&
        characters.map((char) => (
          <div key={char.id}>
            <h3>{char.name}</h3>
            <h4>{char.gender}</h4>
            <img src={char.image} alt={char.name} />
          </div>
        ))}
    </div>
  );
}

export default App;
