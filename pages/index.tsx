import Head from "../components/Head";
import { useEffect } from "react";

// Animation package
import AOS from "aos";
import "aos/dist/aos.css";

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
      <Head />
    </div>
  );
};

export default Home;
