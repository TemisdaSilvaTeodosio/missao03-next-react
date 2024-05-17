import React from 'react';
import ControleEditora from '../classes/controle/ControleEditora';
import { Livro } from '../classes/modelo/Livro';
import  Styles from '../../styles/Home.module.css';

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
    livro: Livro;
    excluir: (codigo: number) => void;
  }
  
  export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
    const { livro, excluir } = props;
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);
  
    return (
      <tr>
        <td>{livro.codigo}</td>
        <td>{livro.titulo}</td>
        <td>{livro.resumo}</td>
        <td>{nomeEditora}</td>
        <td>
          <ul>
            {livro.autores.map((autor, index) => (
              <li key={index}>{autor}</li>
            ))}
          </ul>
        </td>
        <td>
          <button onClick={() => excluir(livro.codigo)} className="btn btn-danger">
            Excluir
          </button>
        </td>
      </tr>
    );
  };