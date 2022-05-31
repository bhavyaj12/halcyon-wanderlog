import { NavigationTop, Footer, Toast } from "components";
import { Routes } from "routes";
import "./App.css";

const App = () => {
  return (
    <div className="App">
        <NavigationTop />
        <Toast />
        <Routes />
        <Footer />
    </div>
  );
}

export default App;
