import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const FooterData = [
  {
    id: 1,
    title: "Pages",
    links: [
      {
        id: 1,
        name: "Home",
        path: "/",
      },
      {
        id: 2,
        name: "About",
        path: "/",
      },
      {
        id: 3,
        name: "Contact",
        path: "/",
      },
    ],
  },
  {
    id: 2,
    title: "Account",
    links: [
      { id: 1, name: "Sign in", path: "/" },
      { id: 2, name: "Cart", path: "/" },
      { id: 3, name: "Wishlist", path: "/" },
    ],
  },
];

export const SocialData = [
  {
    id: 1,
    name: <FaXTwitter />,
    path: "/",
  },
  {
    id: 2,
    name: <FaFacebook />,
    path: "/",
  },
  {
    id: 3,
    name: <FaInstagram />,
    path: "/",
  },
  {
    id: 4,
    name: <FaLinkedin />,
    path: "/",
  },
];
