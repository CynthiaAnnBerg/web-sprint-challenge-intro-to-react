// This is for the fake API. Do not delete!
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { rest } from "msw";


import axios from 'axios'

import { worker } from "./mocks/browser";
worker.start();

ReactDOM.render(<App />, document.getElementById("root"));


// fetch('https://swapi.dev/api/people/')
//    .then(response => response.json())
//    .then(characters => showCharacters(characters.results));


const fetchPromise = fetch('https://swapi.dev/api/people/');
console.log(fetchPromise);

export const handlers = [
    rest.get("https://swapi.dev/api/people/", (req, res, ctx) => {
      return res(ctx.status(200));
    }),
  ];
  //ctx.json(data)

  function Character(props) {
    return <h1>Hello, {props.name}</h1>;
  }

//   function character(id, newName) {
//     const editedTaskList = tasks.map(task => {
//       if (id === character.id) {
//         //
//         return {...character, name: newName}
//       }
//       return task;
//     });
//     setTasks(editedCharacterList);
//   }

// const fetchPromise = fetch('https://swapi.dev/api/people/1/');
// fetchPromise.then(response => {
//   return response.json();
// }).then(people => {
//   const names = people.map(person => person.name).join("\character");
//   console.log(names);
// });


// - [*] Use the following API:
//   - [Star Wars API](https://swapi.dev/)
// - [*] Use the documentation and Google to learn how to fetch characters from your API.
// - [ ] Obtain a list of characters. One or several requests might be needed, depending on the API.
// - [ ] Set the list of characters into state.
// - [ ] Render your characters to the screen:
//   - Build a React component named 'Character' to render an individual character.
//   - Map over the list in state, and for each character render a Character to the page.
//   - You must display at least one element for each character in the data set.
//   - The elements must be styled with **styled-components** - don't rely on browser default styles.

// fetch(‘https://swapi.dev/api/peope/1/’)

//    .then(response => response.json())

//    .then(characters => showCharacters(characters.results));

   
//    function fetchPerson(id){

//   fetch(`http://swapi.co/api/people/${id}`)
//     .then( function(response){
//       return response.json()
//     })
//     .then(function(json){
//       console.log("data", json)

//       if (!json.name){
//         return;
//       }

//       const name = json.name;
//       const birth_year = json.birth_year;

//       const html = `
//         <div class="character">
//           <div class="name">
//             <a href="${json.url}">${name}</a>
//           </div>
//           <div class="year">${birth_year}</div>
//         </div>
      
//       document.querySelector("#characters").insertAdjacentHTML('afterbegin', html)

//     })
// }

// for (var i = 1; i <= 100; i++) {
//   fetchPerson(i)
// }
