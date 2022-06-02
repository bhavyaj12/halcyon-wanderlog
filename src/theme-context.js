import { createContext, useContext, useState } from "react";

const initTheme = { theme: "dark" };

const ThemeContext = createContext(initTheme);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("wanderlog-theme") || "dark"
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
