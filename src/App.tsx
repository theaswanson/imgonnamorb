import morb from "./assets/morb.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>It's morbin' time.</p>
      <p>I'm gonna morb!</p>
      <p>Morbs all over.</p>
      <img src={morb} alt="It's Morbin time." />
    </div>
  );
}

export default App;
