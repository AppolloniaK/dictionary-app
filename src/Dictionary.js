import React, { useState } from "react";
import axios from "axios";
import './Dictionary.css';
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

function handleDictionaryResponse(response) {
  setResults(response.data[0]);
}

function handlePexelsResponse(response) {
  console.log(response);
}

function search() {
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(apiUrl).then(handleDictionaryResponse);
  
  let pexelsApiKey = "EADLQmaWSMtpa3FvI2FiZNJhJADhWq1S1tFXgMrBeS4XE1D2CuifHrbx";
  let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
  let headers = {Authorization: `Bearer ${pexelsApiKey}` }
  axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
}

function handleSubmit(event) {
  event.preventDefault();
  search();
}

function handleKeywordChange(event) {
  setKeyword(event.target.value);
}

function load() {
  setLoaded(true);
  search();
}

if (loaded) {
  return (
    <div className="Dictionary">  
    <section> 
      <h1>What word do you want to look up?</h1>
     <form onSubmit={handleSubmit}>
        <input type="search" 
        onChange={handleKeywordChange} 
        defaultValue={props.defaultKeyword} />
     </form>
     <div className="hint">
      Suggested words: sunset, wine, yoga, plant...
     </div>
     </section>  
     <Results results={results}/>
     </div>
    );
} else {
  load();
  return "Loading";
}
}
