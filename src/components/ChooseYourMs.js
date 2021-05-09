import React, { useState } from "react";
import data from "../data/section1";

const ChooseYourMs = () => {
  const [cards, setCards] = useState(data);

  return (
    <secton className="md:grid grid-cols-2 xl:grid-cols-6 my-8 xl:mx-20">
      {cards.map((card) => {
        const { id, text, image } = card;
        return (
          <article key={id} className="flex items-center px-6 py-2">
            <img src={image} alt="card" />
            <p className="mx-3 cursor-pointer font-semibold hover:underline">
              {text}
            </p>
          </article>
        );
      })}
    </secton>
  );
};

export default ChooseYourMs;
