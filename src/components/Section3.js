import React, { useState } from "react";
import data from "../data/section3";

const Section3 = () => {
  const [cards, setCards] = useState(data);
  return (
    <div className="xl:mx-20">
      <h2 className="font-semibold text-2xl px-8 mt-5">For business</h2>
      <section className="section-2 md:grid grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => {
          const { id, image, title, desc, link } = card;
          return (
            <article key={id} className="p-8">
              <div>
                <img src={image} alt="cards" />
                <h2 className="font-semibold text-xl mt-1 mb-1">{title}</h2>
                <p>{desc}</p>
                <button className="cursor-pointer text-red-600 font-semibold">
                  {link}
                </button>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Section3;
