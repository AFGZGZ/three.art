import logo from "./logo.svg";
import "./App.css";
import GlbViewer from "./viewer/viewer";

function App() {
  return (
    <div className="App">
      <GlbViewer height={"100vh"} width={"100vw"} />
    </div>
  );
}

export default App;
