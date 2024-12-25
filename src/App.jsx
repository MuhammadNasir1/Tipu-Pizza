import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/AboutSection";
import MenuHeading from "./Components/MenuHeading";

function App() {
  return (
<>
<Navbar />
<Hero />
{/* <MenuTabs />   */}
<MenuHeading />
<About  />
<Footer />
</>
  );
}

export default App;
  