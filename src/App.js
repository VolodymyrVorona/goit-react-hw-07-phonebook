import './App.css';

function App() {
  fetch('http://localhost:4040/contacts')
    .then(res => res.json())
    .then(console.log);
  return <div className="App"></div>;
}

export default App;
