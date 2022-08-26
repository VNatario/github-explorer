import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter((prevState) => prevState + 1);
  }

  return (
    <div>
      <h2>Clickou ? {counter}</h2>

      <button type="button" onClick={increment}>
        INCREMENT
      </button>
    </div>
  );
}
