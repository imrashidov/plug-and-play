import { GiComputerFan } from "react-icons/gi";
import { FaComputer } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";
import { IoHeadset } from "react-icons/io5";
import { GiConsoleController } from "react-icons/gi";
import { FaFloppyDisk } from "react-icons/fa6";

const CategoriesData = [
  {
    id: 1,
    name: "Components",
    icon: GiComputerFan,
  },
  {
    id: 2,
    name: "PC",
    icon: FaComputer,
  },
  {
    id: 3,
    name: "Laptop",
    icon: FaLaptop,
  },
  {
    id: 4,
    name: "Accessories",
    icon: IoHeadset,
  },
  {
    id: 5,
    name: "Console",
    icon: GiConsoleController,
  },
  {
    id: 6,
    name: "Storage",
    icon: FaFloppyDisk,
  },
];

export default CategoriesData;
