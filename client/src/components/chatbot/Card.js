import React from "react";

const Card = (props) => {
    return (
    <div style={{ float: 'left', paddingRight:30, height: 270 }}>
        <div className="card">
            <div className="card-image" style={{width: 240}}>
                <img alt={props.payload.fields.titulo.stringValue} src={props.payload.fields.imagen.stringValue} />
                    <span className="card-title">{props.payload.fields.titulo.stringValue}</span>
            </div>
            <div className="card-content">
                {props.payload.fields.descripcion.stringValue}
                <p><a href="/">{props.payload.fields.stock.stringValue}</a></p>
            </div>
            <div className="card-action">
                <a target="_blank" rel="noopener noreferrer" href={props.payload.fields.link.stringValue}>Ver más</a>
            </div>
        </div>
    </div>
    );
};

export default Card;




