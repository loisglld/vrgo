import { ContactCardProps } from "@/types";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const ContactCard = ({
  imgURL,
  name,
  linkedinURL,
  feedback,
  role,
}: ContactCardProps) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-[120px] h-[120px] rounded-full overflow-hidden">
        <Image
          src={imgURL}
          alt="contributor image"
          width={120}
          height={120}
          className="rounded-full object-cover"
        />
      </div>

      <h4 className="text-3xl font-bold mt-1 font-palanquin text-center">
        {name}
      </h4>

      <p className="text-center italic info-text">{role}</p>

      <p className="mt-10 max-w-sm text-center info-text">"{feedback}"</p>

      <div className="mt-3 flex justify-cent items-cent gap-2.5">
        <a href={linkedinURL} target="_blank" rel="noreferrer">
          <FaLinkedin size={40} className="text-primary-blue" />
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
