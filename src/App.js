import Game from './components/Game.js';
import './App.css';

function App() {
  return (
    <div className="body flex-center flex-column">
      <h1 className="title">Wordle</h1>
      <Game />
    </div >
  );
}

export default App;
