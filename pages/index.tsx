import Head from "../components/Head";
import Skills from "../components/Skills";
import History from "../components/History";
import Educations from "../components/Educations";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

import { useEffect } from "react";

// Animation package
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Home = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="sm:cursor-pointer fixed top-1 left-1 z-[999] rounded-lg bg-white/40 p-2">
          <Link href="/ask">
            <button className="btn">Ask AI</button>
          </Link>
        </div>
      </div>
      <Head />
      <Skills />
      <History />
      <Educations />
      <Projects />
      <Contact />
      <footer className="p-3 text-center">
        <p>JINYOUNG SO© All CopyRights Reserved 2023</p>
      </footer>
    </div>
  );
};

export default Home;
