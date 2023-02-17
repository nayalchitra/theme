import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


function ThemeToggle(){

    // setSelected method from ThemeContextProvider component is destructured to a variable
    const {setSelected, theme} = useContext(ThemeContext);
    // calculating the next theme based on the current theme
    const next = theme.name === 'light' ? 'dark':'light';

    // on Click of the button setSelected method is called which updates the theme in ThemeContextProvider
    //component. however, ThemeToggle component should be rendered as child
    // of ThemeContextProvider to access these values. App component needs to be updated
    
    return (
        <button onClick={()=>setSelected(next)}>Toggle the theme</button>
    )
}
export default ThemeToggle;