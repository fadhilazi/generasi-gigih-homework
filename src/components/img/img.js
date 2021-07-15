import React from "react";
import "./img.css"

export default function Image(props) {
    return (
      <div className="image">
          <img src={props.src} alt={props.alt}/>
      </div>
    );
  }