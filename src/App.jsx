
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Experience from "./Components/Experince";

import { BrowserRouter} from "react-router-dom";
import About from "./Components/About";
import Education from "./Components/Education";
import Contact from "./Components/Contact";

function AppLayout() {



  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Education/>
      <Contact/>



    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;