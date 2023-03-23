import logo from './logo2.png';
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" 
        alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyword="sunset" />
      </main>
      <footer className="App-footer">
        <small> 
        Coded by 
        <a href="https://idyllic-cobbler-4d0550.netlify.app/"> Appollonia Khan</a>
        </small>
      </footer>
    </div>
    </div>
  );
}

