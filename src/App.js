import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton/LoginButton';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <LoginButton />
    </header>
  </div>
);

export default App;
