/* eslint-disable react/prop-types */
import React from 'react';

export default function SaveDogs({ name, handleChange, handleSave }) {
  return (
    <div>
      <input
        placeholder="Apelido"
        value={ name }
        type="text"
        id="apelido"
        onChange={ handleChange }
      />
      <button type="button" onClick={ handleSave }>
        Salvar
      </button>
    </div>
  );
}
