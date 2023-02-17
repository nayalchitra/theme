
import { createContext, useEffect, useState } from 'react';
import{light, dark} from './themes'; // contains the theme implementation

export const ThemeContext = createContext(); // creates a context
// we can pass default value to the createContext method;
// const mycontext = createContext(defaultValue);
// default value passed is used when the component does not have a matching Provider above it in the component tree


const ThemeContextProvider = ({children})=>{

    // theme state property holds the customized styles of different themes
    const [theme, setTheme] = useState(light); 
    // selected state property holds the name of the active theme
    const [selected, setSelected] = useState('light');

    /// theme property and setSelected method needs to be shared to child component.


    // when setSlected is called from child components and seletced property is modified,
    // useEffect will be executed updating the theme property.
    useEffect(()=>{
        setTheme(selected === 'light' ? light : dark);
    },[selected])

    return(

        // provider passes the state using the value props. the state passed will be shared among the components.
        // and wrap the NavBar and courseList components within the ThemeContextProvider compopnent in App.js
        <ThemeContext.Provider value={{theme,setSelected}}>
                {children}
        </ThemeContext.Provider>

        // themecontextProvider component can access NavBar and courseList as children
        // NavBar and CourseList component can access teh theme value either using Consumer or useContext hook.
         
    )

}

export default ThemeContextProvider;