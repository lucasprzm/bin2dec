import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [resposta, setResposta] = useState(0);

  function converter() {
    let valor = 0;
    let expoenteBase = input.length - 1;
    if (input.length <= 8) {
      for (let i = 0; i < input.length; i++) {
        if (Number(input[i]) === 0 || Number(input[i]) === 1) {
          if (Number(input[i]) === 1) {
            valor += Math.pow(2, expoenteBase);
          }
          expoenteBase--;
        } else {
          alert("O número binário só pode ser composto por 0 e 1.");
        }
      }
    } else {
      alert("Favor colocar no máximo 8 números!");
    }
    setResposta(valor);
  }

  return (
    <div className="App">
      <h1> Binário para Número</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="button" onClick={converter}>
        Converter
      </button>
      <p>Número: {resposta} </p>
    </div>
  );
}

export default App;
