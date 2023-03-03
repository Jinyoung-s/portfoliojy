import { content } from "@/components/Content";
import Image from "next/image";

const History = () => {
  const { history } = content;
  return (
    <section id="history">
      <div className="md:container px-5 py-14">
        <h4 className="subtitle" data-aos="fade-down">
          {history.subtitle}
        </h4>
        <br />
        {history.service_content.map((content, i) => (
          <div key={i} className="flex gap-5 justify-between flex-wrap group">
            <div
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] duration-300 border-2 border-slate-200 rounded-xl text-left bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none mt-5"
            >
              <h6 className="my-3">{content.title}</h6>
              <p className="leading-7">&bull; {content.para1}</p>
              <p className="leading-7">&bull; {content.para2}</p>
              <p className="leading-7">&bull; {content.para3}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default History;
