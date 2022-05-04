// import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
// import Body from "./containers/Body/Body";
import Main from "./containers/Main/Main";
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
