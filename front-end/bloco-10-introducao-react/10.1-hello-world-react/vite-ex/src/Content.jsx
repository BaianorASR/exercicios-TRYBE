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
      <p key={index}>
        O conteudo é: {conteudo}<br />
        Status: {status}<br />
        Bloco: {bloco}
      </p>
    );
  });

export default Content;
