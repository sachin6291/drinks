import React from 'react';

const Formulario = () => {

      return (
    <form
      className="col-12"
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
          />
        </div>
      </div>
    </form>
  );
}

export default Formulario;