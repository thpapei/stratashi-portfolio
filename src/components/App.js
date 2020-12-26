import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Nav from "./Nav";
import PictureProjects from "./PictureProjects";
import ScrollToTop from "./ScrollToTop";
import Videos from "./Videos";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <ScrollToTop />
      <Home />
      <About />
      <Videos />
      <PictureProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
