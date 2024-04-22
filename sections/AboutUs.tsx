"use client";

import Image from "next/image";
import { CustomButton } from "@/components";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="padding flex items-center max-lg:flex-col justify-between gap-10 max-container"
    >
      <div
        className={`flex flex-1 flex-col ${
          inView
            ? "opacity-1 duration-500 translate-x-0"
            : "opacity-0 transform -translate-x-10"
        }`}
      >
        <h2 className="text-4xl capitalize mg:max-w-lg font-bold">
          Here we are !
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Based in Strasbourg, we are a team of engineering students dedicated
          to providing you with the best VR motion tracking experience. Our
          product has been mandated by VIRTfac managing director, Mr. Blandet
          Thierry, to provide a solution to the lack of ergonomics for workers
          in the industry.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to providing the best solution to our clients has
          driven us to create a product that is not only ergonomic but also
          cost-effective.
        </p>
        <div className="mt-11">
          <CustomButton
            title="Get in touch"
            containerStyles="bg-primary-blue
            text-white rounded-full mt-10"
            rightIcon="/icons/arrow-right.svg"
            handleClick={(e) => {
              // move to product section
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          />
        </div>
      </div>
      <div
        className={`flex-1 flex justify-center items-center ${
          inView
            ? "opacity-1 duration-500 translate-x-0"
            : "opacity-0 transform translate-x-10"
        }`}
      >
        <Image
          src="/images/team.png"
          alt="team"
          width={700}
          height={500}
          className="object-contain rounded-xl"
        />
      </div>
    </section>
  );
};

export default AboutUs;
