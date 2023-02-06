import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import api from './services/api';
import './styles.css';
function App() {

  const [input, setInput] = useState('');
  const[cep, setCep] = useState({});


    // chamada assincrona do buscador aguarda a api retornar.

  async function handleSearch(){

    if(input === ''){
      alert("Preencher CEP!")
      return;
    }

    //Marca um bloco para ser testado try e especifica uma solução caso haja uma exceção catch.
    
    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput("");
    
    }catch{
      alert("CEP não existe!");
      setInput("")
    }

  } 

    // dentro do Object keys fica todo o json que ira retornar, se for igual a zero manda Preencher cep.

  return (
    <div className="container">
      <h1 className="title">Código de Endereçamento Postal</h1>
     
      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite seu cep..."
        value={input}
        onChange={(e) => setInput(e.target.value) } 
        />


        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={26} color="#FFF"/>
        </button>
      </div>



      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: {cep.cep}</h2>

          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>

        </main>
      )}

    </div>
  );
}

export default App;
