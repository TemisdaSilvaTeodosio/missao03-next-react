import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ControleEditora from '../classes/controle/ControleEditora';
import { Livro } from '../classes/modelo/Livro';
import { Menu } from '../components/Menu';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const controleEditora = new ControleEditora();

const baseURL = "http://localhost:3000/api/livros";

const incluirLivro = async (livro: Livro) => {
  const resposta = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(livro),
  });
  return resposta.ok;
};

const LivroDados: React.FC = () => {
  const opcoes = controleEditora.getEditora().map((editora: { codEditora: any; nome: any; }) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0].value);
  const router = useRouter();

  const tratarCombo = (evento: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(evento.target.value));
  };

  const incluir = async (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const livro: Livro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora,
    };
    const sucesso = await incluirLivro(livro);
    if (sucesso) {
      router.push('/LivroLista');
    } else {
      console.error('Falha ao incluir o livro');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title style={{padding: '5px'}}>Incluir Livro</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Menu />
      <main className='container'>
        <h1 className={styles.title}>Incluir Livro</h1>
        <form onSubmit={incluir}>
          <div className="mb-3">
            <label htmlFor="titulo" className="form-label">Título</label>
            <input
              type="text"
              className="form-control"
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="resumo" className="form-label">Resumo</label>
            <textarea
              className="form-control"
              id="resumo"
              value={resumo}
              onChange={(e) => setResumo(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="autores" className="form-label">Autores (um por linha)</label>
            <textarea
              className="form-control"
              id="autores"
              value={autores}
              onChange={(e) => setAutores(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="editora" className="form-label">Editora</label>
            <select
              className="form-control"
              value={codEditora}
              onChange={tratarCombo}
            >
              {opcoes.map((opcao, index) => (
                <option key={index} value={opcao.value}>
                  {opcao.text}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Incluir</button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;