import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Bio from "./components/Bio/Bio";
import ContactMe from "./components/ContactMe/ContactMe";
import DesktopHomePage from "./components/DesktopHomePage/DesktopHomePage";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="bg-gray-250">
      <DesktopHomePage />
      <Bio />
      <AboutMe />
      <Skills />
      <ContactMe />
    </div>
  );
}

export default App;
