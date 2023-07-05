import { useEffect, useState } from "react";

import api from "../../services/api";
import { Link } from "react-router-dom";
import "./home.css";
function Home() {
  //URL da API: /movie/now_playing?api_key=2964cbfec518e08fd92f84dbb1571232&language=pt-BR

  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFIlme() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "2964cbfec518e08fd92f84dbb1571232",
          language: "pt-BR",
          page: 1,
        },
      });

      setFilmes(response.data.results.slice(0, 10));
      setLoading(false);
    }
    loadFIlme();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>carregando filmes...</h2>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={filme.title}
              ></img>
              <Link to={`/filmes/${filme.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
export default Home;
