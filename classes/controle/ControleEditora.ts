import { Editora } from '../modelo/Editora';
import  Styles from '../../styles/Home.module.css';

const editoras: Array<Editora> = [
  { codEditora: 1, nome: 'Alta Books' },
  { codEditora: 2, nome: 'Bookman' },
  { codEditora: 3, nome: 'Addison Wesley' },
  { codEditora: 4, nome: 'Pearson' },
];

class ControleEditora {

  getEditoras = () => {
    return editoras;
  }

  getEditora(): Array<Editora> {
    return editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editora = editoras.find((e) => e.codEditora === codEditora);
    return editora ? editora.nome : '';
  }
}

export default ControleEditora