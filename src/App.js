
import './App.css';
import ThemeContextProvider from './components/ThemeContext';
import Navbar from './components/Navbar';
import CourseList from './components/CourseList';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
   <div className='App'>
      <ThemeContextProvider>
        <Navbar/>
        <CourseList/>
        <ThemeToggle/>
      </ThemeContextProvider>
   </div>
  );
}

export default App;
