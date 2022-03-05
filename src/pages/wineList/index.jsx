import React from "react";

import { useParams } from "react-router-dom";

export default function WineList() {
  const { selectedCategory } = useParams();

  return (
    <div className='container'>Categoria Selecionada: {selectedCategory}</div>
  );
}
