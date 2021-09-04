import "./App.css";
import Bio from "./components/Bio/Bio";
import ContactMe from "./components/ContactMe/ContactMe";
import DesktopHomePage from "./components/DesktopHomePage/DesktopHomePage";

function App() {
  return (
    <div>
      <DesktopHomePage />
      <Bio />
      <ContactMe />
    </div>
  );
}

export default App;
