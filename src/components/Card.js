import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      {props.children}
      <div className='text_field'>
        <h5 className="title">{props.title}</h5>
        <p className="text">{props.text}</p>
        <button className="button" onClick={() => console.log("click")}>
          {props.buttonName}
        </button>
      </div>
    </div>
  );
};

export default Card;
