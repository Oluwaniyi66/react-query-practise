import axios from "axios";
import React from "react";
import { useQueries } from "react-query";

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:5000/superheroes/${heroId}`);
};

const DynamicParallel = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperHero(id),
      };
    })
  );
  console.log(queryResults);
  const queryResultA = queryResults.map((queryResult) => {
    return queryResult.data.data;
  });

  console.log(queryResultA[1].name);

  return (
    <div>
      <h1>Dynamic Parallell Query Implementation Part A</h1>
      <p>{queryResultA[0].name}</p>
      <h1>Dynamic Parallell Query Implementation Part B</h1>
      <p>{queryResultA[1].name}</p>
    </div>
  );
};

export default DynamicParallel;
