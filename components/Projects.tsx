import { content } from "@/components/Content";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

import { Pagination } from "swiper";

const Projects = () => {
  const { projects } = content;
  return (
    <section className="bg-white" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h4 className="subtitle" data-aos="fade-down">
            Personal Projects
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
          >
            {projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <Image src={content.image} alt="..." className="h-40" />
                <div className="flex flex-col gap-1 mt-2">
                  <h6 className="font-bold font-Poppins">{content.title}</h6>
                  <h5>{content.skills}</h5>
                  <Link href={content.link} className="self-end">
                    <button
                      className={`font-bold self-end ${
                        content.link ? "text-black" : "text-gray"
                      }`}
                    >
                      Link
                    </button>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Image
            src={projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
