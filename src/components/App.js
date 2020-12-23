import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
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
      <Footer />
    </div>
  );
}

export default App;
