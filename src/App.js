import { NavigationTop, Footer } from "components";
import { Routes } from "routes";
import "./App.css";

const App = () => {
  return (
    <div className="App">
        <NavigationTop />
        <Routes />
        <Footer />
    </div>
  );
}

export default App;
