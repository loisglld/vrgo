import { contact } from "@/constants";
import { ContactCard } from "@/components";

const Contact = () => {
  return (
    <section id="contact" className="padding max-container">
      <h3 className="font-palaquin text-center text-4xl font-bold">
        What do the <span className="text-primary-blue">Contributors</span>{" "}
        think?
      </h3>
      <p className="info-text m-auto mt-4 max-lg text-center">
        Here are some of the feedbacks from our journey with VRGOCAPT.
      </p>
      <div
        className="mt-14 gap-14
        flex 
        justify-evenly 
        items-start
        max-lg:items-center 
        max-lg:flex-col"
      >
        {contact.map((contributor, index) => (
          <ContactCard
            key={index}
            imgURL={contributor.imgURL}
            name={contributor.name}
            linkedinURL={contributor.linkedinURL}
            feedback={contributor.feedback}
            role={contributor.role}
          />
        ))}
      </div>
    </section>
  );
};

export default Contact;
