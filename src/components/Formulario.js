import React, {useContext, useState} from 'react';
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {

  const [input, setInput] = useState({
    nombre: "",
    categoria:"",
  });

  const { categorias } = useContext(CategoriasContext);
  const { setBusqueda, guardarConsultar } = useContext(RecetasContext);

  //function para leer los contenidos del form
  const obtenerDatosReceta = e=>{
    setInput({
      ...input, 
      [e.target.name] : e.target.value
    })
  }
  
      return (
        <form 
          className="col-12"
          onSubmit={e=>{
            e.preventDefault()
            setBusqueda(input)
            guardarConsultar(true)
          }}
        >
          <fieldset className="text-center">
            <legend>Search Drinks by Category or Ingredient</legend>
          </fieldset>

          <div className="row mt-4">
            <div className="col-md-4">
              <input
                name="nombre"
                className="form-control"
                type="text"
                placeholder="Search by Ingredient"
                onChange={obtenerDatosReceta}
              />
            </div>
            <div className="col-md-4">
              <select 
              className="form-control" 
              name="categoria"
              onChange={obtenerDatosReceta}
              >
                <option value="">--Select Category--</option>
                {categorias.map((categoria, i) =>
                  (<option value={categoria.strCategory} key={i}>{categoria.strCategory}</option>)
                )}
              </select>
            </div>
            <div className="col-md-4">
              <input
                type="submit"
                className="btn btn-block btn-primary"
                value="Search Recipe"
              />
            </div>
          </div>
        </form>
      );
}

export default Formulario;