import "./App.css";
import Header from "./component/templates/Header";
import ChromeDownload from "./pages/ChromeDownload";

function App() {
  return (
    <>
        <Header/>
      {/* wrap page chrome download */}
        <ChromeDownload />
  
    </>
  );
}

export default App;
