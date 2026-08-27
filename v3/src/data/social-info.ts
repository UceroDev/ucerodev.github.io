import githubIcon from "../assets/svg/github-logo.svg";
import linkedinIcon from "../assets/svg/linkedin-logo.svg";
import cvIcon from "../assets/images/file-icon.png";

export const socials = [
  {
    tipo: "link",
    icono: githubIcon.src,
    titulo: "GitHub",
    url: "https://github.com/UceroDev",
    posicion: "left-[76%] top-[40%]",
  },
  {
    tipo: "link",
    icono: linkedinIcon.src,
    titulo: "LinkedIn",
    url: "https://www.linkedin.com/in/anna-ucero-ferre-7a87a4266/",
    posicion: "left-[76%] top-[18%]",
  },
  {
    tipo: "link",
    icono: cvIcon.src,
    titulo: "Currículum",
    url: "https://drive.google.com/file/d/1CEUuMvGEK8xv3HtxtTRGS9maFcqqKPOz/view?usp=sharing",
    posicion: "left-[76%] top-[66%]",
  },
];
