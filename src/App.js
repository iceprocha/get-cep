import "./App.css";
import React, { useState } from "react";
import { DadosCep } from "./components/DadosCep";
import cepService from "./services/cepService";
import { FiSearch } from "react-icons/fi";

function App() {
  const [inputCep, setInputCep] = useState("");
  const [cepData, setCepData] = useState({});

  const handleClick = async () => {
    var response = await cepService.getCepOrFake(inputCep);
    response !== null ? setCepData(response.data) : setCepData({});
    setInputCep("");
  };

  return (
    <div className="container">
      <div class="title">
        <p>Buscador de CEP - Brasil</p>
      </div>

      <div className="containerInput">
        <input
          value={inputCep}
          onChange={(e) => setInputCep(e.target.value)}
          type="text"
        />
        <button className="buttonSearch" onClick={handleClick}>
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>

      <DadosCep data={cepData} />
    </div>
  );
}

export default App;
