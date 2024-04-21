"use client";
import Link from "next/link";
import Image from "next/image";

import { CustomButton } from ".";

const Nabar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex justify-center items-center">
            <Image
              src="/icons/logo.png"
              alt="logo"
              width={70}
              height={90}
              className="object-contain"
            />
          </Link>

          <h1 className="font-bebas text-4xl ml-4">
            <span className="text-primary-blue font-bebas">VR</span>GOCAPT
          </h1>
        </div>

        <div className="hidden sm:block">
          <CustomButton
            title="Contact us"
            btnType="button"
            containerStyles="text-primary-blue
          rounded-full bg-white min-w-[130px]"
            handleClick={(e) => {
              e.preventDefault();
              // go to contact section
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nabar;
