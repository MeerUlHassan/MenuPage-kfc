import React from "react";
import catagories from '../Data/catagories.json'
import { CardsData } from "../Data/KfcProductsData";

const Catagories = ({onCatSelection}) => {
  return (
    <>
      {catagories.map((cat) => (
        <button
          type="button"
          className="btn my--btn btn-primary"
          key={cat.id}
          onClick={() => onCatSelection(cat.id)}
        >
          {cat.title}
        </button>
      ))}
    </>
  );
};

export default Catagories;
