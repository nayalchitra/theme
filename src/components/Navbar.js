import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


// using useContext hook

// function Navbar(){

//     const {theme} = useContext(ThemeContext);
//     return(
//         <nav style={{background:theme.ui, color:theme.color}}>
//             <h1>Context APP</h1>
//             <ul>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Contact</li>
//             </ul>
//         </nav>
//     )
// }



// using Consumer

function Navbar(){

    
    return(
        //return ThemeContext.Consumer from the component
        //  Consumer expects us to pass a function as a child. Internally, react pass the current context value as an argument to this function
        
        <ThemeContext.Consumer>
                {({theme})=>{
                  
                  // Function returns a react node. Styles applied to nav element is from theme context.
                  return  <nav style={{background:theme.ui, color:theme.color}}>
                        <h1>Context APP</h1>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                }}
        </ThemeContext.Consumer>
        
    )
}

export default Navbar;