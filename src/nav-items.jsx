import { HomeIcon, TheaterIcon, BookOpenIcon, ToyIcon, PhoneIcon } from "lucide-react";
import Home from "./pages/Home";
import Shows from "./pages/Shows";
import Tutoring from "./pages/Tutoring";
import Toys from "./pages/Toys";
import Contact from "./pages/Contact";

export const navItems = [
  {
    title: "Главная",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Home />,
  },
  {
    title: "Спектакли",
    to: "/shows",
    icon: <TheaterIcon className="h-4 w-4" />,
    page: <Shows />,
  },
  {
    title: "Репетитор",
    to: "/tutoring",
    icon: <BookOpenIcon className="h-4 w-4" />,
    page: <Tutoring />,
  },
  {
    title: "Игрушки и пособия",
    to: "/toys",
    icon: <ToyIcon className="h-4 w-4" />,
    page: <Toys />,
  },
  {
    title: "Контакты",
    to: "/contact",
    icon: <PhoneIcon className="h-4 w-4" />,
    page: <Contact />,
  },
];