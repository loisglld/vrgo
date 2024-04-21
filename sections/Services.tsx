"use client";

import { services } from "@/constants";
import { ServiceCard } from "@/components";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="padding max-container">
      <h3
        className={`font-palaquin text-center text-4xl font-bold ${
          inView
            ? "opacity-1 duration-500 scale-100"
            : "opacity-0 transform scale-50"
        }`}
      >
        Discover what <span className="text-primary-blue">VR</span>GOCAPT brings
        to your business
      </h3>
      <div
        className={`flex justify-center flex-wrap gap-9 mt-5 ${
          inView
            ? "opacity-1 duration-500 translate-y-0"
            : "opacity-0 transform -translate-y-20"
        }`}
      >
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
