import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/Menu.module.css'

export const Menu: React.FC = () => {
  return (
    <nav>
      <div className="container-fluid" >
        <ul className="nav nav-tabs">
            <li className="nav-item">
                  <Link href="/" className="nav-link">Menu</Link>
            </li>
            <li className="nav-item">
                  <Link href="/LivroLista" className="nav-link">Catálogo</Link>
            </li>
            <li className="nav-item">
                  <Link href="/LivroDados" className="nav-link">Novo</Link>
            </li>
          </ul>
      </div>
    </nav>
  );
};