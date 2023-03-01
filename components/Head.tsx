import { useEffect, createElement } from "react";
import { content } from "@/components/Content";
import { GrMail } from "react-icons/gr";

const Head = () => {
  const { head } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {head.firstName}{" "}
            <span className="text-dark_primary">{head.LastName}</span>
          </h1>
        </div>
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <div className="flex-1 flex flex-col gap5">
            <div
              data-aos="fade-down"
              data-aos-delay={100}
              className="flex items-center gap-2"
            ></div>
          </div>
          <h2>{head.title}</h2>
          <br />
          <div className="flex justify-end">
            <button className="btn">{head.btnText}</button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {head.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:h-[37rem] h-96">
          <img
            src="/person.png"
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Head;
