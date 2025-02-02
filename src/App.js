import './App.css';
import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1> Contadores atualizados separadamente. </h1>
        <MyButton />
        <MyButton />
      </header>
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);
  function handleCLick() {
    setCount(count + 1);
  }
  return (
    <button onClick={handleCLick}>Clicou {count} vezes</button>
  );
}
export default App;