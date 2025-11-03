import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full bg-indigo-900 text-white font-semibold py-4">
        <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center px-6">
          <Link to="/home" className="hover:underline text-lg">
            Blog Pessoal
          </Link>

          <nav className="flex gap-6 items-center text-sm">
            Temas Cadastrar Tema Perfil
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
