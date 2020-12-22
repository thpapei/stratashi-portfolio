import About from "./About";
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
    </div>
  );
}

export default App;
