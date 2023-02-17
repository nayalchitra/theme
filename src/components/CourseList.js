import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function CourseList(){

    const {theme} = useContext(ThemeContext);
    return (
        <div className="course-list" style={{color:theme.color, background:theme.bg}}>
            <ul>
                <li style={{background:theme.ui}}>React JS</li>
                <li style={{background:theme.ui}}>Angular</li>
                <li style={{background:theme.ui}}>Node</li>
            </ul>
        </div>
    )
}

export default CourseList;
