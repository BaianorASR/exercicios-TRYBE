import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido',
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei',
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei',
  },
];

const Content = () =>
  conteudos.map(({ conteudo, bloco, status }, index) => {
    return (
      <p key={index} className='Content'>
        <span>O conteudo é: {conteudo}</span><br />
        <span>Status: {status}</span><br />
        <span>Bloco: {bloco}</span>
      </p>
    );
  });

export default Content;
