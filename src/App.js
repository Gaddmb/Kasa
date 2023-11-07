import "../src/sass/base/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Index";
import About from "./Pages/about/Index";
import Accommodation from "./Pages/accommodation/Index";
import NotFound from "./Pages/notFound/Index";
import Header from "./Components/Header/index";
import Footer from "./Components/Footer/index";

function App() {
  return (
    // ici je declare plusieur Route pour naviguer de page en page
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/house/:id" element={<Accommodation />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
