import { content } from "@/components/Content";
import Image from "next/image";

const Educations = () => {
  const { educations } = content;
  return (
    <section id="educations" className="min-h-fit bg-bg_light_primary">
      <div className="md:container px-5 py-14">
        <h4 className="subtitle" data-aos="fade-down">
          Educations
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {educations.education_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-white p-6 flex-1 group-hover:blur-sm 
            hover:!blur-none"
            >
              <Image src={content.img} alt="..." className="w-40 mx-auto" />
              <h6 className="my-3">{content.title}</h6>{" "}
              {content.dsc.map((des, j) => (
                <p key={j} className="leading-7">
                  {des.desc}
                </p>
              ))}
            </div>
          ))}
        </div>
        <br />
      </div>
    </section>
  );
};

export default Educations;
