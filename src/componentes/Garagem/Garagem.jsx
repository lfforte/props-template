import React from "react"
import Carro from "../Carro/Carro"

const Garagem = ({ nome, btnBoasVindas, carro1, carro2, carro3, carro4 }) => {

  // console.log(props);

  return (
    <main>
      <h1>Garagem do {nome}</h1>
      <br />
      <button onClick={() => btnBoasVindas(nome)}>Boas Vindas</button>
      <br />
      <Carro carro={carro1} />
      <Carro carro={carro2} />
      <Carro carro={carro3} />
      <Carro carro={carro4} />
    </main>
  )
}
export default Garagem