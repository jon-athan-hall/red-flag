import './App.css';
import Card from '../card/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Red Flag</h1>
      </header>
      <main className="App-main">
        <Card value={4} />
      </main>
    </div>
  );
}

export default App;
