import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Nav from "./Nav";
import PictureProjects from "./PictureProjects";
import Videos from "./Videos";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Home />
      <About />
      <PictureProjects />
      <Videos />
      <Contact />
    </div>
  );
}

export default App;
