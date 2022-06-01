import { NavigationTop, Footer, Toast, PostModal } from "components";
import { Routes } from "routes";
import "./App.css";

const App = () => {
  return (
    <div className="App">
        <NavigationTop />
        <Toast />
        <Routes />
        <PostModal />
        <Footer />
    </div>
  );
}

export default App;
