"use client";

import Image from "next/image";
import { MdOutlineSwipeLeft } from "react-icons/md";
import { products } from "@/constants";
import { useInView } from "react-intersection-observer";

const Product = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  return (
    <section
      id="product"
      ref={ref}
      className="padding flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container"
    >
      <div
        className={`flex flex-1 flex-col ml-10 ${
          inView
            ? "opacity-1 duration-500 translate-x-0"
            : "opacity-0 transform -translate-x-10"
        }`}
      >
        <h2 className="text-4xl capitalize mg:max-w-lg font-bold">
          Our<span className="text-primary-blue"> Product</span>
          <br />
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Our motion capture system is made of 3 types of modules that you can
          equip on your body to capture motion data. The system is designed to
          be user-friendly and easy to setup. The inertial module is designed to
          capture motion data with high precision, the load module to measure
          the load carried by the user and the control module monitors the data
          and sends it to your computer.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          For the duration of the recording, the system will capture the data,
          parse it to be easy to exploit and save it to an SD card. The system
          can be setupped to send the data to a router to be processed in
          real-time.
        </p>
      </div>
      <div
        className={`"flex-1" ${
          inView
            ? "opacity-1 duration-500 translate-x-0"
            : "opacity-0 transform translate-x-10"
        }`}
      >
        <div className="carousel carousel-center max-w-xl xl:h-[50vh] h-[50vh] rounded-xl p-5 border-4 border-primary-blue">
          {
            // Carousel
            products.map((product, index) => (
              <div key={index} className="carousel-item relative">
                {/* Legend */}
                {product.title && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 p-3 bg-primary-blue text-white rounded-lg">
                    <p className="text-sm font-montserrat italic text-nowrap">
                      <span className="font-bold">{product.title} : </span>
                      {product.description}
                    </p>
                  </div>
                )}
                <Image
                  src={product.imgURL}
                  alt={product.title}
                  width={500}
                  height={500}
                  className="object-contain"
                />
              </div>
            ))
          }
        </div>
        <div className="flex gap-2 justify-center items-center mt-2">
          <MdOutlineSwipeLeft className="text-2xl text-primary-blue" />
          <p className="text-sm">Swipe to see more</p>
        </div>
      </div>
    </section>
  );
};

export default Product;
