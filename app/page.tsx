import React from 'react';
import Head from 'next/head';
import { Menu } from '../components/Menu'; 
import 'bootstrap/dist/css/bootstrap.css';
import  Styles from '../../styles/Home.module.css';

export default function Home() {
  return (
      <div className='container-fluid' style={{width: '100%'}}>
        <Head>
          <meta name="description" content="Catálogo de Livros" />
        </Head>

        <Menu />

        <main className='main '>
          <h1 className='title' style={{textAlign: 'center', padding: '15px'}}>
            Home
          </h1>
        </main>

      </div>
    
  );
}
