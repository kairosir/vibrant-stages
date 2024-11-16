import { motion } from "framer-motion";
import { BookOpen, Clock, Award, Star, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Tutoring = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Индивидуальные занятия
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Развивайте творческий потенциал вашего ребенка с профессиональным
                педагогом
              </p>
              <Button size="lg" className="group">
                Записаться на занятие
                <Calendar className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 animate-pulse" />
                <img
                  src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
                  alt="Преподаватель"
                  className="absolute inset-4 rounded-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Программа обучения
          </h2>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 pb-8 border-l-2 border-primary/20 last:pb-0"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {item.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {item.level}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    title: "Индивидуальный подход",
    description: "Программа обучения адаптируется под каждого ученика",
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: "Гибкий график",
    description: "Занятия в удобное для вас время",
  },
  {
    icon: <Award className="w-6 h-6 text-primary" />,
    title: "Опытные педагоги",
    description: "Профессионалы с многолетним стажем",
  },
  {
    icon: <Star className="w-6 h-6 text-primary" />,
    title: "Результативность",
    description: "Заметный прогресс после каждого занятия",
  },
];

const timeline = [
  {
    title: "Знакомство с театром",
    description: "Основы актерского мастерства, развитие творческого мышления",
    duration: "4 недели",
    level: "Начальный",
  },
  {
    title: "Работа над речью",
    description: "Техника речи, дикция, выразительность",
    duration: "6 недель",
    level: "Базовый",
  },
  {
    title: "Сценическое движение",
    description: "Пластика, координация, работа с пространством",
    duration: "8 недель",
    level: "Продвинутый",
  },
];

export default Tutoring;