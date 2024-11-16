import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Bell, Globe, ChevronDown } from "lucide-react";
import { navItems } from "../nav-items";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would implement the actual form submission logic
    toast.success("Заявка успешно отправлена!");
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className={`text-2xl font-heading font-bold text-primary transition-all duration-300 ${
              scrolled ? "scale-90" : ""
            }`}
          >
            Театр
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`nav-link group relative px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.to
                    ? "text-primary"
                    : "hover:text-primary"
                }`}
              >
                <span className="relative z-10">{item.title}</span>
                <span
                  className={`absolute inset-0 bg-primary/5 rounded-lg scale-0 transition-transform duration-200 group-hover:scale-100 ${
                    location.pathname === item.to ? "scale-100" : ""
                  }`}
                />
              </Link>
            ))}

            {/* Notifications */}
            <button className="relative p-2 hover:bg-primary/5 rounded-full transition-colors">
              <Bell className="w-5 h-5" />
              {notifications > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-accent text-xs flex items-center justify-center rounded-full animate-bounce">
                  {notifications}
                </span>
              )}
            </button>

            {/* Language Switcher */}
            <button className="flex items-center space-x-1 hover:text-primary transition-colors">
              <Globe className="w-4 h-4" />
              <span className="text-sm">RU</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            {/* Sign Up Button */}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 hover:scale-105 animate-pulse"
                  size="lg"
                >
                  Записаться
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Записаться на занятие</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">ФИО</Label>
                    <Input id="name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea id="message" />
                  </div>
                  <Button type="submit" className="w-full">
                    Отправить
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2 hover:bg-primary/5 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm shadow-lg animate-fade-in">
            <div className="flex flex-col py-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-4 py-3 hover:bg-primary/5 transition-colors ${
                    location.pathname === item.to ? "text-primary" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="flex items-center space-x-2">
                    {item.icon}
                    <span>{item.title}</span>
                  </span>
                </Link>
              ))}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className="mx-4 mt-4 bg-gradient-to-r from-primary to-accent"
                    size="lg"
                  >
                    Записаться
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Записаться на занятие</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name-mobile">ФИО</Label>
                      <Input id="name-mobile" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone-mobile">Телефон</Label>
                      <Input id="phone-mobile" type="tel" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message-mobile">Комментарий</Label>
                      <Textarea id="message-mobile" />
                    </div>
                    <Button type="submit" className="w-full">
                      Отправить
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;