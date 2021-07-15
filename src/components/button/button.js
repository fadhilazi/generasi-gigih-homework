import React from "react";
import "./button.css"

export default function Button({name}) {
    return (
      <div className="button">
          <button>{name}</button>
      </div>
    );
  }