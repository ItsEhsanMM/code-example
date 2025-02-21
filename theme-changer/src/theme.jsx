/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react";

// Create Theme Context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
   const [theme, setTheme] = useState("light");

   useEffect(() => {
      // Remove previous theme classes and add the new one
      document.documentElement.className = theme;
   }, [theme]);

   const switchTheme = (newTheme) => {
      setTheme(newTheme);
   };

   return (
      <ThemeContext.Provider value={{ theme, switchTheme }}>
         {children}
      </ThemeContext.Provider>
   );
};

// Custom Hook for easy access
export const useTheme = () => useContext(ThemeContext);
