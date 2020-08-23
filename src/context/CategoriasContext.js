//1. importar createContext
import React, {createContext, useState, useEffect} from 'react';
import Axios from 'axios'

//2. exportar la funcion de context creado
export const CategoriasContext = createContext()

//3. Provider: donde se encuentran las funciones y el state
//siempre se le pasa los props

const CategoriasProvider = (props)=>{

  //State del context
  const [categorias, setCategorias] = useState([])

  //Llamar a la api
  useEffect(()=>{
    const obtenerCategorias = async ()=>{
      const url =`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
      const categorias = await Axios.get(url)
      setCategorias(categorias.data.drinks)
    }
    obtenerCategorias()
  },[])

  //lo que esta en return esta disponible para otros componentes
  return(
    <CategoriasContext.Provider
    // lo que este en value que es obligatorio va a estar duspnible para todo lo que englobe
      value={{
        categorias
      }}
    >

      {/* cundo esto se coloque en app.js props se convierte en todo lo que englobaria esta entiqueta */}
      {props.children}
    </CategoriasContext.Provider>
  )
}
export default CategoriasProvider