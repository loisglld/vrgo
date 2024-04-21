import { ServiceCardProps } from "@/types";

const ServiceCard = ({ IconComponent, label, subtext }: ServiceCardProps) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-xl px-10 py-16">
      <div className="w-11 h-11 justify-center flex items-center bg-primary-blue rounded-full">
        <IconComponent className="text-white" size={25} />
      </div>
      <h3 className="mt-5 text-3xl leading-normal font-bold">{label}</h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
