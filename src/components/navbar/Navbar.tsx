import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full bg-indigo-900 text-white font-semibold py-4">
        <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center px-6">
          <Link to="/" className="hover:underline text-lg">
            Farmacia
          </Link>

          <nav className="flex gap-6 items-center text-sm">
            <Link to="/categorias" className="hover:underline">
              Listar Categorias
            </Link>
            <Link to="/cadastrarcategorias" className="hover:underline">
              Cadastrar Categoria
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
