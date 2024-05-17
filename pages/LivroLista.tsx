import Head from 'next/head';
import { Menu } from '../components/Menu'
import { LinhaLivro } from '../components/LinhaLivro';
import { Livro } from '../classes/modelo/Livro';
import styles from '../styles/Home.module.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const baseURL = "http://localhost:3000/api/livros";

const obterLivros = async (): Promise<Livro[]> => {
  const resposta = await fetch(baseURL);
  return resposta.json();
};

const excluirLivro = async (codigo: number): Promise<boolean> => {
  const resposta = await fetch(`${baseURL}/${codigo}`, {
    method: 'DELETE',
  });
  return resposta.ok;
};

const LivroLista: React.FC = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    if (!carregado) {
      obterLivros().then((dados) => {
        setLivros(dados);
        setCarregado(true);
      });
    }
  }, [carregado]);

  const excluir = async (codigo: number) => {
    const sucesso = await excluirLivro(codigo);
    if (sucesso) {
      setCarregado(false);
    }
  };

  return (
    <div className='container-fluid'>
      <Head>
        <title>Lista de Livros</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Menu />
      <main className='main'>
        <h1 className='title'>Catálogo de Livros</h1>
        <table className="table" style={{width: '100%'}}>
          <thead>
            <tr>
              <th>Id</th>
              <th style={{wordWrap: 'break-word'}}>Título</th>
              <th style={{wordWrap: 'break-word'}}>Resumo</th>
              <th style={{wordWrap: 'break-word'}}>Autores</th>
              <th>Editora</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro: Livro) => (
              <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;

