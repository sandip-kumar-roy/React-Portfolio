import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="box btn_shadow">
        <img src={props.image} alt="" />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        
        <a href={props.link}>
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </>
  );
};

export default Card;
