import React from "react"

const Carro = ({ carro }) => {

  return (
    <div className="carro">
      <h2>{carro.nome}</h2>
      <ul>
        <li>Cor: {carro.cor}</li>
        <li>Ano: {carro.ano}</li>
        <li>Felx: {carro.flex ? 'Sim' : 'Não'}</li>
      </ul>
    </div>
  )
}

export default Carro