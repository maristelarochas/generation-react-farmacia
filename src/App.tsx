import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FormCategoria from "./components/categoria/formulariocategoria/FormCategoria";
import ListaCategorias from "./components/categoria/listacategoria/ListaCategoria";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastrarcategorias" element={<FormCategoria />} />
            <Route path="/editarcategorias" element={<FormCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
