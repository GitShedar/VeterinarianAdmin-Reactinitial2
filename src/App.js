import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [data, setdata] = useState([]);

  function click() {
    //setLoading(true);

    fetch(`/api/clients?search=${search}`)
      .then((response) => response.json())
      .then((data) => setdata(data))
      .catch((error) => setdata("hiba"));
  }

  return (
    <div className="App">
      <h1>Veterinarian admin - clients</h1>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <button
        disabled={search.length < 3 ? true : false}
        onClick={() => click()}
      >
        Search
      </button>
    </div>
  );
};

export default App;
