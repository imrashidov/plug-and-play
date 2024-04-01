import { GiComputerFan } from "react-icons/gi";
import { CiMobile3 } from "react-icons/ci";
import { FaLaptop } from "react-icons/fa";
import { IoHeadset } from "react-icons/io5";
import { GiConsoleController } from "react-icons/gi";
import { FaFloppyDisk } from "react-icons/fa6";

const CategoriesData = [
  {
    id: 1,
    name: "Components",
    icon: GiComputerFan,
    items: [
      {
        id: 1,
        name: "CPU",
      },
      {
        id: 2,
        name: "GPU",
      },
      {
        id: 3,
        name: "RAM",
      },
      {
        id: 4,
        name: "Motherboard",
      },
      {
        id: 5,
        name: "PSU",
      },
      {
        id: 6,
        name: "Case",
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
      },
      {
        id: 2,
        name: "Samsung",
      },
      {
        id: 3,
        name: "Xiaomi",
      },
      {
        id: 4,
        name: "Huawei",
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
      },
      {
        id: 2,
        name: "MSI",
      },
      { id: 3, name: "Dell" },
      { id: 4, name: "HP" },
      { id: 5, name: "Lenovo" },
      { id: 6, name: "Acer" },
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
      },
      {
        id: 2,
        name: "Keyboard",
      },
      {
        id: 3,
        name: "Mouse",
      },
      {
        id: 4,
        name: "Monitor",
      },
      {
        id: 5,
        name: "Microphone",
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
      },
      {
        id: 2,
        name: "Xbox",
      },
      {
        id: 3,
        name: "Nintendo",
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
      },
      {
        id: 2,
        name: "SSD",
      },
    ],
  },
];

export default CategoriesData;
