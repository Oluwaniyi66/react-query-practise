import axios from "axios";
import React, { useEffect, useState } from "react";

const SuperHeroespage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('')

  useEffect(() => {
    axios.get("http://localhost:5000/superheroes").then((res) => {
      setData(res.data);
      setIsLoading(false);
    }).catch((error) => {
              setError(error.message)
              setIsLoading(false)
    })
    }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if(error){
    return <h2>{error}</h2>
  }
 
  return (
    <>
      <h2>Super heroes page</h2>
      {data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};

export default SuperHeroespage;
