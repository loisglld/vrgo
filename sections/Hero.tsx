"use client";

import Image from "next/image";
import { CustomButton } from "@/components";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <section ref={ref} className="hero">
      <div
        className={`flex-1 pt-28 padding-x ${
          inView
            ? "opacity-1 duration-500 translate-y-0"
            : "opacity-0 transform translate-y-10"
        }`}
      >
        <h1 className="hero__title">Achieve effortless movement analysis</h1>
        <p className="hero__subtitle">
          Simplify your VR motion tracking with our seamless sensor system,
          designed for effortless integration.
        </p>

        <CustomButton
          title="See product"
          containerStyles="bg-primary-blue
            text-white rounded-full mt-10"
          handleClick={(e) => {
            // move to product section
            e.preventDefault();
            document.getElementById("product")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        />
        {/* grey separator */}
        <div className="bg-black h-[1px] mt-10" />

        <div className="mt-5">
          <p className="font-montserrat font-bold">
            A project guided and supported by
          </p>
          <div className="flex items-center mt-2">
            <Image
              src="/icons/virtfac.jpg"
              alt="logo"
              width={120}
              height={120}
              className="object-contain"
            />
            <p className="ml-4 font-montserrat text-sm">
              <span className="font-bold">VIRTfac</span> is a virtual factory
              platform that aids businesses in transitioning to more efficient
              and digitally tailored production systems for Industry 4.0.
            </p>
          </div>
          <div className="flex items-center mt-2">
            <Image
              src="/icons/tps.png"
              alt="logo"
              width={120}
              height={120}
              className="object-contain"
            />
            <p className="ml-4 font-montserrat text-sm">
              <span className="font-bold">Télécom Physique Strasbourg</span> is
              a French engineering school based in Strasbourg, France. This
              project has been made in the context of engineering projects,
              directed by Ms. Jelila Labed.
            </p>
          </div>
        </div>
      </div>

      {/* hero image */}
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/images/hero.png"
            alt="hero"
            fill
            priority
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </section>
  );
};

export default Hero;
