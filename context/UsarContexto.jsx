
import { useState } from "react";
import Contexto from "./Contexto";


export default function UsarContexto(props) {
  const {children} =props;
  const estadoInicial = {
    cantidadManzanas: 0,
    agregarManzana: () => { }
  }

  const [cantidadManzanas, setCantidadManzanas] = useState(0);

  const agregarManzana = () => {
    setCantidadManzanas(cantidadManzanas + 1);
  };

  return (
    <Contexto.Provider value={{
      cantidadManzanas: cantidadManzanas,
      agregarManzana
    }}>
      {children}
    </Contexto.Provider>
  )
}