import React from "react";
import './App.css';
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
<h1>Hey Bruh! Let's build a clone today.</h1>
   <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
  <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>


    </div>
  );
}

export default App;
