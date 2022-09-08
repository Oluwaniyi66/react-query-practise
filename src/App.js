import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import { Homepage } from "./components/Home.page";
import RqSuperheroespage from "./components/RqSuperheroespage";
import SuperHeroespage from "./components/SuperHeroespage";
import { RqSuperHero } from "./components/RqSuperHero";
import ParallelQueries from "./components/ParallelQueries";
import DynamicParallel from "./components/DynamicParallelQueries";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Super heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">Rq Super heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/rq-dynamic-parallel"
              element={<DynamicParallel heroIds={[1, 3]} />}
            />
            <Route path="/rq-parallel" element={<ParallelQueries />} />
            <Route path="/rq-super-heroes/:heroId" element={<RqSuperHero />} />
            <Route path="/super-heroes" element={<SuperHeroespage />} />

            <Route path="/" element={<Homepage />} />

            <Route path="/rq-super-heroes" element={<RqSuperheroespage />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
