import React from 'react';

const Card = (props) => {
    return (
        <div  style={{ height: 200, paddingRight:20, float: 'left'}}>
            <div className="card">
                <div className="card-image" style={{ width: 200}}>
                    <img alt={props.payload.header} src={props.payload.imagen} />
                    <span className="card-title">{props.payload.titulo}</span>
                </div>
                <div className="card-content" style={{ width: 200}}>
                    {props.payload.descripcion}
                </div>
                <div className="card-action">
                    <a target="_blank" rel="noopener noreferrer" href={props.payload.link}>Ver mas</a>
                </div>
            </div>
        </div>
    );
};

export default Card;




