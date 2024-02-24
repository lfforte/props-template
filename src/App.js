import './App.css';
import Header from './componentes/Header/Header';
import Footer from './componentes/Foorter/Footer';
import Garagem from './componentes/Garagem/Garagem';

function App() {

  const nome = 'LuizZ'

  const btnBoasVindas = (nomedaGaragem) => {
    alert(`Bem Vindos a Garagem do ${nomedaGaragem}`)
  }

  const carro1 = {
    nome: 'Fusca',
    cor: 'Amarelo',
    ano: 1983,
    flex: false
  }
  const carro2 = {
    nome: 'Fusca',
    cor: 'Azul',
    ano: 1969,
    flex: false
  }
  const carro3 = {
    nome: 'Fusca',
    cor: 'Branco',
    ano: 1990,
    flex: false
  }
  const carro4 = {
    nome: 'Fusca',
    cor: 'Preto',
    ano: 1945,
    flex: false
  }

  return (
    <>
      <Header />
      <Garagem
        nome={nome}
        btnBoasVindas={btnBoasVindas}
        carro1={carro1}
        carro2={carro2}
        carro3={carro3}
        carro4={carro4} />
      <Footer />
    </>
  );
}

export default App;
