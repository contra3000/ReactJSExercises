import logo from './logo.svg';
import './App.css';
import { EstadoContacto } from './components/container/estadoDeContacto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <EstadoContacto></EstadoContacto>
      </header>
    </div>
  );
}

export default App;
