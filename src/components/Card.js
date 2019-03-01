import React from "react";

function Card(props) {
  const { className, children, title } = props;
  let { image } = props;

  const cardId = title ? title.replace(/\W/g, "-").toLowerCase() : "";

  return (
    <div id={cardId} className={`card ${className || ""}`}>
      <div className="card-content custom-opacity">
        <div
          className="card-media"
          style={{
            backgroundImage: image
              ? `url("${image}")`
              : `url("${require("../images/no-image-found.png")}")`
          }}
        />
        <div className="card-body">
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
      </div>
      <div className="card-actions">
        <a className="custom-opacity" href={`#${cardId}`}>
          Share
        </a>
        <a className="custom-opacity" href={`#${cardId}`}>
          Read More
        </a>
      </div>
    </div>
  );
}

export default Card;
