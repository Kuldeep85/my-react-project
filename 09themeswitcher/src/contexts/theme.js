import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode : "Light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

function useTheme(){
    return useContext(ThemeContext)
}

export default useTheme;