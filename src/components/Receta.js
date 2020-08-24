import React, {useContext, useState} from 'react';
import {ModalContext} from '../context/ModalContext'

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Receta = ({receta}) => {

  //configuracion del modal de matirial UI

  const[ modalStyle ] = useState(getModalStyle)
  const[open, setOpen] = useState(false)

  const classes = useStyles()

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  //extraer valeores del context
        
  const { recetaInfo, setIdreceta, setReceta } = useContext(ModalContext);
  
  const { idDrink, strDrink, strDrinkThumb } = receta;

  //muestra los ingredientes
    const mostrarIngredientes = (recetaInfo) => {
      let ingredientes = [];
      for (let i = 1; i < 16; i++) {
        if (recetaInfo[`strIngredient${i}`]) {
          ingredientes.push(
            <li>
              {" "}
              {recetaInfo[`strIngredient${i}`]} {recetaInfo[`strMeasure${i}`]}
            </li>
          );
        }
      }

      return ingredientes;
    };


  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header"> {strDrink} </h2>
        <img
          className="card-img-top"
          src={strDrinkThumb}
          alt={`imagen de ${strDrink}`}
        />
        <div className="card-body">
          <button
            type="button"
            className=" btn btn-block btn-primary"
            onClick={() => {
              setIdreceta(idDrink);
              handleOpen();
            }}
          >
            See Recipe
          </button>
          <Modal
            open={open}
            onClose={() => {
              setIdreceta(null);
              setReceta({})
              handleClose();
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h2> {recetaInfo.strDrink} </h2>
              <h3 className="mt-4">Instructions</h3>
              <p>
                {recetaInfo.strInstructions}
              </p>
              <img className="img-fluid my-4" src={recetaInfo.strDrinkThumb} alt={recetaInfo.strDrink} />
              <h3>Ingredients & Quantity</h3>
              <ul>
                {mostrarIngredientes(recetaInfo)}
              </ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
 
export default Receta;