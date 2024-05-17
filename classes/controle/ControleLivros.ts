import { Livro } from '../modelo/Livro';
import  Styles from '../../styles/Home.module.css';

const livros: Array<Livro> = [
  {
    codigo: 1,
    titulo: 'Livro A',
    resumo: 'Resumo do Livro A',
    codEditora: 1,
    autores: ['Autor A1']
  },
  {
    codigo: 2,
    titulo: 'Livro B',
    resumo: 'Resumo de Livro B',
    codEditora: 2,
    autores: ['Autor B1']
  },
  {
    codigo: 3,
    titulo: 'Livro C',
    resumo: 'Resumo do Livro C',
    codEditora: 3,
    autores: ['Autor C1']
  }
];

export class ControleLivro {
  // retorna todos os livros
  obterLivros(): Array<Livro> {
    return livros;
  }

  // inclui um novo livro
  incluir(livro: Livro): void {
    const novoCodigo = livros.length > 0 ? Math.max(...livros.map(l => l.codigo)) + 1 : 1;
    livro.codigo = novoCodigo;
    livros.push(livro);
  }

  // exclui um livro
  excluir(codigo: number): void {
    const indice = livros.findIndex(l => l.codigo === codigo);
    if (indice >= 0) {
      livros.splice(indice, 1);
    }
  }
}
