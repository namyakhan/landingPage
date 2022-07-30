import { useState } from "react";
import { testimonials } from "../data/testimonals";

const Testimonials = () => {
  const [clients, setClients] = useState(testimonials);

  return (
    <div>
      <section className="container mx-auto px-20 py-20 mb-10">
        <h2 className="text-greyish font-fraunces text-2xl text-center tracking-widest py-10">
          CLIENT TESTIMONIALS
        </h2>
        <div className="grid grid-cols-3 gap-10  text-center items-center justify-between">
          {clients.map(({ id, image, name, desc, title }) => (
            <article key={id}>
              <img
                className="w-24 mx-auto rounded-full mt-5 mb-10"
                src={image}
                alt={name}
              />
              <p className="font-barlow text-medium text-gray-600 leading-6 font-medium">{desc}</p>
              <h4 className="font-fraunces mt-14" >{name}</h4>
              <h6 className="font-barlow text-greyish text-xs font-medium">{title}</h6>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
