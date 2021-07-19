import React from "react";
import Image from "../img/img";
import Title from "../title/Title";

export default function Track({ image, title }) {
  return (
    <div>
      <Image src={image} alt={title} />
      <Title name={title}/>
    </div>
  );
}
