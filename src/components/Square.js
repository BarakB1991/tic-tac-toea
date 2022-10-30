import React from 'react';

export default function Square({ value, onClick }) {
  return (
    <button className={`button ${value ? 'disabled' : ''}`} onClick={onClick}>
      {value}
    </button>
  );
}
