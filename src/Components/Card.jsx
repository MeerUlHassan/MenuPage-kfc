import React from "react";
import '../App.css'
import { CardsData } from "../Data/KfcProductsData";

const Card = ({data, incrementCart}) => {
  return (
    <div className="container">
        <div className="col">
          <div className="card my--card" style={{ width: "20rem" }}>
            <img src={data.image} className="my--card-img card-img-top" alt="..." />
            <div className="card-body">
              <div className="title-sec">
                <h5 className="card-title">{data.title}</h5>
                <h6>Rs.{data.price}</h6>
              </div>
              <p className="card-text">{data.desc}</p>
              <button
                onClick={incrementCart}
                className="btn btn-primary my-btn"
              >
                + Add to Bucket
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Card;
