import logo from './logo.svg';
import './App.css';
import React from 'react';
import FetchData from './components/FetchData'; // FetchData 컴포넌트 추가

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* FetchData 컴포넌트를 App에 추가 */}
      <main>
        <h1>React Axios Example</h1>
        <FetchData />
      </main>
    </div>
  );
}

export default App;

