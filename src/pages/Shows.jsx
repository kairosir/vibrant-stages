import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Shows = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl px-4"
          >
            <h1 className="text-5xl font-bold mb-4 text-foreground">Наши спектакли</h1>
            <p className="text-xl text-foreground/80">
              Погрузитесь в мир театрального искусства вместе с нами
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Shows */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Текущий репертуар</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shows.map((show, index) => (
              <motion.div
                key={show.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
                onMouseEnter={() => setHoveredCard(show.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                  <div className="relative h-48">
                    <img
                      src={show.image}
                      alt={show.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{show.title}</h3>
                      <p className="text-sm">{show.ageRestriction}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {show.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {show.capacity}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {show.rating}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{show.description}</p>
                    <Button className="w-full group">
                      Подробнее
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Отзывы</h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-6">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <p className="text-gray-600 mb-4">{testimonial.text}</p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </div>
  );
};

const shows = [
  {
    id: 1,
    title: "Волшебник Изумрудного города",
    description: "Увлекательное путешествие в мир чудес и волшебства",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    ageRestriction: "6+",
    duration: "1.5 часа",
    capacity: "50 мест",
    rating: "4.9",
  },
  {
    id: 2,
    title: "Приключения Буратино",
    description: "Классическая история о деревянном мальчике и его друзьях",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
    ageRestriction: "4+",
    duration: "1 час",
    capacity: "40 мест",
    rating: "4.8",
  },
  {
    id: 3,
    title: "Снежная королева",
    description: "Волшебная сказка о силе любви и дружбы",
    image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
    ageRestriction: "5+",
    duration: "1.2 часа",
    capacity: "45 мест",
    rating: "4.7",
  },
];

const testimonials = [
  {
    name: "Анна Петрова",
    role: "Мама юного зрителя",
    text: "Замечательный спектакль! Мой ребенок был в восторге от представления. Актеры играли превосходно, декорации очень красивые.",
    avatar: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
  },
  {
    name: "Михаил Иванов",
    role: "Папа двоих детей",
    text: "Прекрасная постановка! Дети были полностью вовлечены в происходящее на сцене. Обязательно придем еще раз.",
    avatar: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
  },
];

export default Shows;