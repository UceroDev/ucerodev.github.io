import folderIcon from "../assets/images/folder.png";
import fileIcon from "../assets/svg/notes-icon.svg";

export const buttons = [
  {
    tipo: "modal",
    icono: folderIcon.src,
    titulo: "Proyectos",
    posicion: "left-[40%] top-[22%]",
    modalId: "proyectos-window",
  },
  {
    tipo: "modal",
    icono: folderIcon.src,
    titulo: "Formación",
    posicion: "left-[47%] top-[53%]",
    modalId: "formacion-window",
  },
  {
    tipo: "modal",
    icono: folderIcon.src,
    titulo: "Diseño",
    posicion: "left-[18%] top-[34%]",
    modalId: "diseno-window",
  },
  {
    tipo: "modal",
    icono: fileIcon.src,
    titulo: "Sobre mí",
    posicion: "left-[25%] top-[65%]",
    modalId: "sobre-mi-window",
  },
];
