import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./favoritos.css";

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function excluirFilme(id) {
    let filtroFilmes = filmes.filter((item) => {
      return item.id !== id;
    });
    setFilmes(filtroFilmes);
    localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes));
    toast.success("filme removido com sucesso");
  }

  return (
    <div className="meus-filmes">
      <h1>Meu Filmes</h1>

      {filmes.length === 0 && <span>você não possui filme salvo :(</span>}

      <ul>
        {filmes.map((filme) => {
          return (
            <li key={filme.id}>
              <div className="container-meus-filmes">
                <span>{filme.title}</span>
                <img
                  src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                  alt={filme.title}
                />
              </div>

              <div className="buttons">
                <Link to={`/filmes/${filme.id}`}> Ver Detalhes</Link>
                <button onClick={() => excluirFilme(filme.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favoritos;
