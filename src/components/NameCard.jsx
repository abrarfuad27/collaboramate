import React from "react";

export default function NameCard(prop) {
  return (
    <div className="namecard-container">
      <h3 className="namecard-name">{prop.nameCard.name}</h3>
      <p className="namecard-description">{prop.nameCard.description}</p>
      <div className="namecard-technologies">
        {prop.nameCard.technology.map((tech, index) => (
          <p  className="single-tech" key={index}>{tech}</p>
        ))}
      </div>
    </div>
  );
}
