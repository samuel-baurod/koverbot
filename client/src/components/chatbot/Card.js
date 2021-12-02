import React from 'react';

const Card = (props) => {
    return (
    <div style={{ height: 200, paddingRight:20, float: 'left'}}>
      <div className="card">
        <div className="card-image" style={{ width: 200}}>
            <img alt={props.payload.header} src={props.payload.imagen} />   
        </div>
        <div className="card-content" style={{ width: 200}}>
        <span className="card-title">{props.payload.titulo}</span>
            {props.payload.descripcion}
        </div>
      </div>
    </div>
  );
};

export default Card;




