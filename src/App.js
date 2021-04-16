import React, { useState, useEffect, useDebugValue } from 'react';
import './App.css';
import styled from 'styled-components'
import axios from 'axios'
import { rest } from "msw";



const App = () => {
  const [friends, setCharacter] = useState([]);
  const [currentCharacterId, setCurrentCharacterId] = useState(null);

  const openDetails = (id) => {
    setCurrentCharacterId(id);
  };

  const closeDetails = () => {
    setCurrentCharacterId(null);
  };
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.



  useEffect(() => {
    const fetchCharacter = () => {
    axios.get('https://swapi.dev/api/people/')
      .then(res => {

        setCharacter(res.data)
      })
      .catch( err => {
        console.log(err);
      })
    }
  fetchCharacter()
  }, [])







  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}
const StyledApp = styled.div`
color: ${pr => pr.theme.starwarsColor};

&:hover {
    color: ${pr => pr.theme.secondaryColor};
    background-color: cyan;
    transition: all 1s ease-in-out;
  }

app-header {
    color: ${pr => pr.theme.primaryColor};
    &:hover {
        transform: scale(2);
        transition: all 1s ease-in-out;
      }
}
app-link{
    color: ${pr => pr.theme.dangerColor};
}
`

// function App() {
//   const [character, setCharacters] = useState("");
//   const [photo, setPhoto] = useState("");

//   useEffect(function(){
//     axios
//     .get('https://swapi.dev/api/people/')
//     .then(function(res){
//       setDataSet(res.data)
//       setPhoto(res.data.hdurl)
//       console.log(res.data.hdurl)
//     })
//     .catch(function(err){
//       console.log(err)
//     })
//   });

export default App;

// export const handlers = [
//   rest.get("https://swapi.dev/api/people/", (req, res, ctx) => {
//     return res(ctx.status(200), ctx.json(data));
//   }),
// ];

