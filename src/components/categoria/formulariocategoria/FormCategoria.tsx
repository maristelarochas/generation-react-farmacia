import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

function FormCategoria() {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria, {
        headers: { Authorization: "Bearer token" },
      });
    } catch (error) {
      console.error("Erro ao buscar categoria:", error);
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categorias");
  }

  async function gerarNovaCategoria(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria, {
          headers: { Authorization: "Bearer token" },
        });
        alert("Categoria atualizada com sucesso!");
        retornar();
      } catch (error) {
        console.log("Erro ao atualizar categoria:", error);
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria, {
          headers: { Authorization: "Bearer token" },
        });
        alert("Categoria cadastrada com sucesso!");
        retornar();
      } catch (error) {
        console.log("Erro ao cadastrar categoria:", error);
      }
    }
    setIsLoading(false);
  }

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">
        {id !== undefined ? "Editar Categoria" : "Cadastrar Categoria"}
      </h1>

      <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome da Categoria</label>
          <input
            type="text"
            placeholder="Nome"
            name="nome"
            required
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição da Categoria</label>
          <input
            type="text"
            placeholder="Descrição"
            name="descricao"
            required
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          type="submit"
          className="rounded disabled:bg-slate-200 hover:bg-indigo-800 bg-indigo-400 text-white font-bold
                      w-1/2 mx-auto py-2 flex justify-center"
        >
          Cadastrar Categoria
        </button>
      </form>
    </div>
  );
}
export default FormCategoria;
