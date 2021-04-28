import React, {useState, useEffect} from "react";
import './App.css'

const App = () => {

  const [search, setSearch] = useState('')
  console.log(search)
  function App() {
   // const [isLoading, setIsLoading] = useState(false);
    const [data, setdata] = useState([]);
  
  
    useEffect(() => {
      //setLoading(true);
  
      fetch(`/api/clients?search=${search}`)
        .then((response) => response.json())
        .then((data) => setdata(data))
        .catch((error) => setdata(null))
      //  .finally(() => setLoading(false));
    }, []);
  }

  return (
    <div className="App">
    <h1>Veterinarian admin - clients</h1>
    <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <button disabled={search.length < 3}>Search</button>

   

    </div>
  )
}

export default App
