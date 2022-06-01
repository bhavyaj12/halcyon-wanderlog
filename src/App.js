import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavigationTop, Footer, Toast, PostModal } from "components";
import { Routes } from "routes";
import { useTheme } from "theme-context";
import "./App.css";

const App = () => {
  const { theme } = useTheme();
  console.log(theme);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className={`App ${theme}`}>
        <NavigationTop />
        <Toast />
        <Routes />
        <PostModal />
        <Footer />
    </div>
  );
}

export default App;
