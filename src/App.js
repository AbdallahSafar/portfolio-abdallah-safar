import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Bio from "./components/Bio/Bio";
import ContactMe from "./components/ContactMe/ContactMe";
import DesktopHomePage from "./components/DesktopHomePage/DesktopHomePage";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="bg-gray-250">
      <DesktopHomePage />
      <Bio />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
