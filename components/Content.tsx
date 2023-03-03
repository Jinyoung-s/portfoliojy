import vue from "@/assets/images/Skills/vue.png";
import reactjs from "@/assets/images/Skills/react.png";
import nodejs from "@/assets/images/Skills/node.png";
import python from "@/assets/images/Skills/python.png";
import java from "@/assets/images/Skills/java.png";
import spring from "@/assets/images/Skills/spring.png";
import csharp from "@/assets/images/Skills/csharp.png";

import project1 from "@/assets/images/projects/project1.png";
import project2 from "@/assets/images/projects/project2.png";
import project3 from "@/assets/images/projects/project3.png";
import person_project from "@/assets/images/projects/person.png";

import edu1 from "@/assets/images/educations/conestoga.png";
import edu2 from "@/assets/images/educations/konkuk.png";

import { GrMail } from "react-icons/gr";
import {
  MdArrowForward,
  MdCall,
  MdOutlineVolunteerActivism,
} from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

export const content = {
  head: {
    title: "Full-Stack Developer",
    firstName: "JINYOUNG",
    LastName: "SO",
    btnText: "Hire Me",
    hero_content: [
      {
        count: "8+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Java",
        para: "7+ years of experience in use",
        logo: java,
      },
      {
        name: "C#",
        para: "3+ years of experience in use",
        logo: csharp,
      },
      {
        name: "Spring",
        para: "7+ years of experience in use",
        logo: spring,
      },
      {
        name: "Vue.js",
        para: "5+ years of experience in use",
        logo: vue,
      },
      {
        name: "React js",
        para: "1+ years of experience in use",
        logo: reactjs,
      },
      {
        name: "Python",
        para: "1+ years of experience in use",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  history: {
    title: "History",
    subtitle: "work History",
    service_content: [
      {
        title: "NPLUS - Full-stack developer (05/2016 ~ 08/2021)",
        para1:
          "Developed and maintained various software applications using Java, Spring-boot, and Vue.js",
        para2:
          "Designed and implemented REST APIs to establish smooth and efficient communication with multiple systems, including banks and tax offices.",
        para3:
          "Implemented automated testing and continuous integration to improve software quality and reliability",
      },
      {
        title: "Open SNS - Full-stack developer (04/2014 ~ 04/2016)",
        para1:
          "Designed and implemented various software solutions using Java, C#, and JavaScript",
        para2:
          "Worked in an agile software development team to complete various project features throw sprints, working in conjunction with other developers from external companies.",
        para3:
          "Built APIs, including conversion of HTML documents to PDF and generation and merging of documents, extensively utilized in the Korean court system",
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Debate Social Website",
        skills: "Java, Spring-boot, Vue.js, MySQL",
        link: "https://debthat.site",
        image: project1,
      },
      {
        title: "Daily Quite App",
        skills: "Flutter, Dart, Firebase",
        link: "https://play.google.com/store/apps/details?id=so.jin.fortune",
        image: project2,
      },
      {
        title: "Hair Salon Website",
        skills: "PHP, Bootstrap",
        link: "",
        image: project3,
      },
    ],
  },
  educations: {
    title: "Educations",
    education_content: [
      {
        title: "Computer Programming Diploma",
        img: edu1,
        dsc: [
          { desc: "Conestoga College , Wateroo, Ontario" },
          { desc: "(Expected date of graduation: April 2023)" },
        ],
      },
      {
        title: "Bio Engineering Bachelor’s degree",
        img: edu2,
        dsc: [{ desc: "Konkuk University , Seoul, South Korea (2007)" }],
      },
    ],
  },
  Contact: {
    title: "Contect Me",
    subtitle: "Contect Me",
    social_media: [
      {
        text: "soginyoung23@gmail.com",
        icon: GrMail,
        link: "soginyoung23@gmail.com",
      },
      {
        text: "+1 519 572 3760",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "Linkedin",
        icon: BsLinkedin,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
