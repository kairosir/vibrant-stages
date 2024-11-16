import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
              Добро пожаловать в мир
              <span className="text-primary"> театрального искусства</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Развивайте творческий потенциал вашего ребенка через театр,
              индивидуальные занятия и образовательные материалы
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Link
                to="/shows"
                className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                Наши спектакли
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="bg-secondary text-white px-8 py-3 rounded-full font-medium hover:bg-secondary/90 transition-colors"
              >
                Связаться с нами
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Наши услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="text-primary font-medium hover:text-primary/80 transition-colors flex items-center gap-2"
                >
                  Подробнее
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-padding bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "Театральные постановки",
    description: "Уникальные спектакли, которые развивают воображение и творческие способности детей",
    link: "/shows",
    icon: <TheaterIcon className="w-8 h-8" />,
  },
  {
    title: "Репетиторство",
    description: "Индивидуальные занятия для развития талантов и способностей вашего ребенка",
    link: "/tutoring",
    icon: <BookOpenIcon className="w-8 h-8" />,
  },
  {
    title: "Игрушки и пособия",
    description: "Развивающие материалы для творческого и интеллектуального развития",
    link: "/toys",
    icon: <ToyIcon className="w-8 h-8" />,
  },
];

const stats = [
  {
    value: "500+",
    label: "Счастливых детей",
  },
  {
    value: "50+",
    label: "Спектаклей",
  },
  {
    value: "100+",
    label: "Мероприятий",
  },
  {
    value: "5",
    label: "Лет опыта",
  },
];

export default Home;