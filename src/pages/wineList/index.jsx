import React from "react";

import { useQuery } from "../../helpers/useQuery";

export default function WineList() {
  const query = useQuery();

  return (
    <>
      <div className='container'>
        Tipo de Vinho Selecionada: {query.get("type")}
      </div>
      <div className='container'>
        Valor Minimo Selecionado: {query.get("min")} - Valor Maximo Selecionado: {query.get("max")}
      </div>
    </>
  );
}
