import folderIcon from "../assets/images/folder.png";
import fileIcon from "../assets/svg/notes-icon.svg";

export const buttons = [
  {
    icono: folderIcon.src,
    titulo: "Proyectos",
    url: "",
    posicion: "left-[40%] top-[22%]",
    modalId: "proyectos-window",
  },
  {
    icono: folderIcon.src,
    titulo: "Formación",
    url: "",
    posicion: "left-[47%] top-[53%]",
    modalId: "formacion-window",
  },
  {
    icono: folderIcon.src,
    titulo: "Diseño",
    url: "",
    posicion: "left-[18%] top-[34%]",
    modalId: "diseno-window",
  },
  {
    icono: fileIcon.src,
    titulo: "Sobre mí",
    url: "",
    posicion: "left-[25%] top-[65%]",
    modalId: "sobre-mi-window",
  },
];
