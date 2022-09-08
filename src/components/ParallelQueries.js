import axios from "axios";
import { useQuery } from "react-query";
const fetchSuperHeroes = () => {
  return axios.get("http://localhost:5000/superheroes");
};
const fetchFriends = () => {
  return axios.get("http://localhost:5000/friends");
};
const ParallelQueries = () => {
  const {
    data: superHeroes,
    isLoading: superHeroesLoading,
    isError: superisHeroError,
    error: superHeroError,
  } = useQuery("super-heroes", fetchSuperHeroes);
  const {
    data: friends,
    isLoading: friendsLoading,
    isError: friendsIsError,
    error: friendError,
  } = useQuery("friends", fetchFriends);

  if (friendsLoading || superHeroesLoading) {
    <div>
      {" "}
      <h2>Loading...</h2>
    </div>;
  }
  if (superHeroesLoading) {
    <div>
      {" "}
      <h2>SuperHeroes Loading...</h2>
    </div>;
  }
  if (superisHeroError || friendsIsError) {
    <div> {superHeroError.message}</div> && <div> {friendError.message}</div>;
  }
  return (
    <div>
      <div>
        <h6> Hello SuperHeroes</h6>
        {superHeroes?.data.map((superHero) => {
          return <h1 key={superHero.id}>{superHero.name}</h1>;
        })}
      </div>
      <h6>Hello Friends</h6>
      <div>
        {friends?.data.map((friend) => {
          return <h1 key={friend.id}>{friend.name}</h1>;
        })}
      </div>
    </div>
  );
};

export default ParallelQueries;
