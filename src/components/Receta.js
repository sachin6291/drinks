import React from 'react';

const Receta = ({receta}) => {
   const { strDrink, strDrinkThumb } = receta;
  return ( 
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header"> {strDrink} </h2>
        <img className="card-img-top" src={strDrinkThumb} alt={`imagen de ${strDrink}`}/>
        <div className="card-body">
          <button
          type="button"
          className=" btn btn-block btn-primary"
          >See Recipe</button>
        </div>
      </div>
    </div>
   );
}
 
export default Receta;