import { useState } from "react";
function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState("");

  const calculate = () => {
    let a = Number(num1);
    let b = Number(num2);
    let answer;

    if (operation === "+") {
      answer = a + b;
    } 
    else if (operation === "-") {
      answer = a - b;
    } 
    else if (operation === "*") {
      answer = a * b;
    } 
    else if (operation === "/") {
      answer = a / b;
    }

    setResult(answer);
  };

  return (
    <div>
      <h1>Simple Calculator</h1>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
      >
        <option value="+">Addition (+)</option>
        <option value="-">Subtraction (-)</option>
        <option value="*">Multiplication (*)</option>
        <option value="/">Division (/)</option>
      </select>

      <br /><br />

      <button onClick={calculate}>Calculate</button>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;