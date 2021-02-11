import './App.css';
import Navbar from "./components/navbar/navbar";
import Carousel from "./components/carousel/carousel";
import TitleMessage from "./components/title-message/title-message";
import About from "./pages/about/about";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <TitleMessage />
      <About />
    </div>
  );
}

export default App;
