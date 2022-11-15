import "./styles.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Mainhome from "./Components/Mainhome";

export default function App() {
  return (
    <div className="App">
      <Header />
      <br /> <br />
      <Main />
      <Footer />
      <Mainhome />
    </div>
  );
}
