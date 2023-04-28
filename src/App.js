import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div >
     <NavBar />
      <Home />
      <About/>
      <Projects />
      <Skills />
      <Contact/>
      <SocialLinks/>
      <Footer />

    </div>
  );
}

export default App;
