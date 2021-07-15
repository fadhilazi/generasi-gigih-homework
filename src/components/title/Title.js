import React from "react";

export default function Title({name}) {
    return (
      <div className="title">
        <div className="title-detail">
          <div className="details">
            <p>{name}</p>
          </div>
        </div>
      </div>
    );
  }
