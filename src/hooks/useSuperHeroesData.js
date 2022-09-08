import axios from "axios";
import { useQuery } from "react-query";

const fecthSuperHeroes = () => {
  return axios.get("http://localhost:5000/superheroes");
};
export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("super-heroes", fecthSuperHeroes, {
    onError: onError,
    onSuccess: onSuccess,
    // select: (data) => {
    //   const superHeroNames = data.data.map((hero) => hero.name);
    //   return superHeroNames;
    // },
  });
};
