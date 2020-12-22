import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Nav from "./Nav";
import PictureProjects from "./PictureProjects";
import Projects from "./Projects";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Home />
      <About />
      {/* <Projects /> */}
      <PictureProjects />
      <Contact />
    </div>
  );
}

export default App;
