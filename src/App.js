import React, {useState, useEffect} from "react";
import './App.css'

const App = () => {

  const [search, setSearch] = useState('')

  return (
    <div className="App">
    <h1>Veterinarian admin - clients</h1>
    <input type="text" />
      <button>Search</button>

   

    </div>
  )
}

export default App
