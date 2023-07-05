import "./erro.css";
import { Link } from "react-router-dom";
function Erro() {
  return (
    <div className="container-erro">
      <h1 className="Erro">404</h1>
      <h1>Pagina não Encontrada...</h1>
      <Link to="/">Veja todos os Filmes!</Link>
    </div>
  );
}

export default Erro;
