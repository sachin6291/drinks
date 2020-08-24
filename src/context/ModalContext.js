import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios'

export const ModalContext = createContext()

const ModalProvider = (props) => {

  const [idreceta, setIdreceta] = useState(null)
  const [recetaInfo, setReceta] = useState({});

  useEffect(()=>{
    if(idreceta){
      const obtenerReceta = async () =>{
        const url =`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`
        const resultado = await axios.get(url)
        setReceta(resultado.data.drinks[0])
      }
      obtenerReceta()
    }
  },[idreceta])

  return (
    <ModalContext.Provider
      value={{
        setIdreceta,
        setReceta,
        recetaInfo,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );

}
export default ModalProvider
