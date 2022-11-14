import { useState, useEffect } from "react";
import axios from "axios";

function ApiTeste() {
  const [beers, setBeers] = useState([]);
  const [reload, setReload] = useState(false);

  //fetch -> api do navegador -> requisições http (get, put, pacth, delete, post) -> axios
  //promisses -> async/await

  //useEffect()
  // array de dependencias
  // [] -> vai rodar APENAS uma vez -> quando o componente/pagina for carregado
  // [state] -> toda vez que esse state MUDAR DE VALOR -> o código dentro do useEffect roda novamente.

  useEffect(() => {
    async function fetchBeers() {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(response.data);
    }

    fetchBeers();
  }, [reload]);

  function handleReload() {
    setReload(!reload);
  }

  console.log(beers);

  return (
    <div>
      <h1>Aqui é a página que vamos mostrar as nossas Cervejas</h1>

      <form>
      {beers.map((beers) => {
        return (
          <div key={beers._id}>
          <p>{beers.name}</p>
          </div>)})}
      </form>

      {/*       <button onClick={handleReload}>Recarregar api!!</button> */}

      {/*       {alunos.map((beers) => {
        return (
          <div key={beers._id}>
            <p>
              {beers.nome} - {aluno.turma}
            </p>
          </div>
        );
      })} */}
    </div>
  );
}

export default ApiTeste;
