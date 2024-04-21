"use client";
import { CustomButton } from "@/components";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Client = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  return (
    <section
      ref={ref}
      className="padding flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container"
    >
      <div
        className={`flex-1 overflow-hidden rounded-xl ${
          inView
            ? "opacity-1 duration-500 translate-x-0"
            : "opacity-0 transform translate-x-10"
        }`}
      >
        <Image
          src="/images/virtfac.jpeg"
          alt="virtfac"
          width={557}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div
        className={`flex flex-1 flex-col ml-10 ${
          inView
            ? "opacity-1 duration-500 translate-x-0"
            : "opacity-0 transform -translate-x-10"
        }`}
      >
        <h2 className="text-4xl capitalize mg:max-w-lg font-bold">
          Our<span className="text-primary-blue"> Clients</span>
          <br />
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          V.I.R.T.Fac (Virtual Innovative Real Time Factory) represents a major
          advancement in optimizing the transition to Industry 4.0. VIRTFac is
          developing a virtual factory platform that provides personalized
          support to businesses, from SMEs to large industries, in their
          transition to more efficient and digitally tailored production
          systems. With innovative tools such as Ergonom.io, VIRTFac is
          redefining the way we design and optimize industrial processes.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Discover how this project is shaping the future of the industry and
          opening up exciting new perspectives in research and innovation.
        </p>
        <div className="mt-11 flex flex-col flex-wrap gap-4">
          <a
            href="https://igg.icube.unistra.fr/index.php/VIRTFac"
            target="_blank"
            rel="noreferrer"
          >
            <CustomButton
              title="Learn more"
              containerStyles="bg-primary-blue
            text-white rounded-full mt-2"
              rightIcon="/icons/arrow-right.svg"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Client;
