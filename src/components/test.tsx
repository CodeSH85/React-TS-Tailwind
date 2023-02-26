import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

type Synonyms = {
  word: string;
  score: number;
}

const API_URL = import.meta.env.VITE_API_URL ?? `https://api.datamuse.com`;

function Test() {

  // const [word, setWord] = useState<string>();
  const [word, setWord] = useState("");
  const [synonyms, setSynonyms] = useState<Synonyms[]>([]);

  const fetchData = (word: string) => {
    fetch(`${API_URL}/words?rel_syn=${word}`)
    .then(res => res.json())
    .then(setSynonyms);  
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchData(word);
  };

  const handleClick = (val: string) => {
    fetchData(val);
    setWord(val);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="word-input">Your Word</label>
        <input 
          value={word}
          onChange={(e) => setWord(e.target.value)}
          id="word-input"
        />
        <button >Submit</button>
      </form>
      <ul>
      {synonyms.map((data)=>(
        <li 
          key={data.word}
          onClick={()=> handleClick(data.word)}
        >
          {data.word}
        </li>
      ))}
      </ul> 
    </div>
  )
}

export default Test
