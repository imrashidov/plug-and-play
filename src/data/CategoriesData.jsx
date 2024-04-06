// Categories
import { GiComputerFan } from "react-icons/gi";
import { CiMobile3 } from "react-icons/ci";
import { FaLaptop } from "react-icons/fa";
import { IoHeadset } from "react-icons/io5";
import { GiConsoleController } from "react-icons/gi";
import { FaFloppyDisk } from "react-icons/fa6";
// Components
import { GoCpu } from "react-icons/go";
import { BsGpuCard } from "react-icons/bs";
import { FaMemory } from "react-icons/fa";
import { BsFillMotherboardFill } from "react-icons/bs";
import { ImPower } from "react-icons/im";
import { LuPcCase } from "react-icons/lu";
// Mobile
import { FaApple } from "react-icons/fa";
import { SiSamsung } from "react-icons/si";
import { SiXiaomi } from "react-icons/si";
import { SiHuawei } from "react-icons/si";
// Laptop
import { SiAsus } from "react-icons/si";
import { SiMsi } from "react-icons/si";
import { SiDell } from "react-icons/si";
import { SiHp } from "react-icons/si";
import { SiLenovo } from "react-icons/si";
import { SiAcer } from "react-icons/si";
// Accessories
import { ImHeadphones } from "react-icons/im";
import { FaKeyboard } from "react-icons/fa";
import { FaMouse } from "react-icons/fa";
import { MdMonitor } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
// Console
import { SiPlaystation } from "react-icons/si";
import { SiXbox } from "react-icons/si";
import { BsNintendoSwitch } from "react-icons/bs";
// Storage
import { CiHardDrive } from "react-icons/ci";
import { LiaMemorySolid } from "react-icons/lia";

const CategoriesData = [
  {
    id: 1,
    name: "Components",
    icon: GiComputerFan,
    items: [
      {
        id: 1,
        name: "CPU",
        icon: GoCpu,
      },
      {
        id: 2,
        name: "GPU",
        icon: BsGpuCard,
      },
      {
        id: 3,
        name: "RAM",
        icon: FaMemory,
      },
      {
        id: 4,
        name: "Motherboard",
        icon: BsFillMotherboardFill,
      },
      {
        id: 5,
        name: "PSU",
        icon: ImPower,
      },
      {
        id: 6,
        name: "Case",
        icon: LuPcCase,
      },
    ],
  },
  {
    id: 2,
    name: "Mobile",
    icon: CiMobile3,
    items: [
      {
        id: 1,
        name: "Apple",
        icon: FaApple,
      },
      {
        id: 2,
        name: "Samsung",
        icon: SiSamsung,
      },
      {
        id: 3,
        name: "Xiaomi",
        icon: SiXiaomi,
      },
      {
        id: 4,
        name: "Huawei",
        icon: SiHuawei,
      },
    ],
  },
  {
    id: 3,
    name: "Laptop",
    icon: FaLaptop,
    items: [
      {
        id: 1,
        name: "ASUS",
        icon: SiAsus,
      },
      {
        id: 2,
        name: "MSI",
        icon: SiMsi,
      },
      { id: 3, name: "Dell", icon: SiDell },
      { id: 4, name: "HP", icon: SiHp },
      { id: 5, name: "Lenovo", icon: SiLenovo },
      { id: 6, name: "Acer", icon: SiAcer },
    ],
  },
  {
    id: 4,
    name: "Accessories",
    icon: IoHeadset,
    items: [
      {
        id: 1,
        name: "Headset",
        icon: ImHeadphones,
      },
      {
        id: 2,
        name: "Keyboard",
        icon: FaKeyboard,
      },
      {
        id: 3,
        name: "Mouse",
        icon: FaMouse,
      },
      {
        id: 4,
        name: "Monitor",
        icon: MdMonitor,
      },
      {
        id: 5,
        name: "Microphone",
        icon: FaMicrophone,
      },
    ],
  },
  {
    id: 5,
    name: "Console",
    icon: GiConsoleController,
    items: [
      {
        id: 1,
        name: "PlayStation",
        icon: SiPlaystation,
      },
      {
        id: 2,
        name: "Xbox",
        icon: SiXbox,
      },
      {
        id: 3,
        name: "Nintendo",
        icon: BsNintendoSwitch,
      },
    ],
  },
  {
    id: 6,
    name: "Storage",
    icon: FaFloppyDisk,
    items: [
      {
        id: 1,
        name: "HDD",
        icon: CiHardDrive,
      },
      {
        id: 2,
        name: "SSD",
        icon: LiaMemorySolid,
      },
    ],
  },
];

export default CategoriesData;
