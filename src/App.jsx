import Introduction from "./components/intro/Intro";
import About from './components/about/About';
import Contact from "./components/Contact/Contact";
import Toggle from "./components/Toggle/toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";
import Cards from "./components/Cards/Cards";
import "../src/App.css"
import Animat from "./components/Animat/Animat";



const App = () => {
  
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;





  return <div style={{backgroundColor:darkMode ? "rgb(14 5 59 / 89%)": "#e1f5fe",
  color: darkMode && "white"}}>
    
    <Toggle />
    <Introduction  />
    <About />
    <Cards />
    <Contact />
    <Animat />
    </div>;
};

export default App;