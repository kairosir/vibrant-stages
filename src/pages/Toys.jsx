import { motion } from "framer-motion";
import { Search, Filter, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Toys = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-accent/20 to-primary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Игрушки и пособия
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Развивающие материалы для творческого и интеллектуального развития
            </p>
            <div className="flex items-center gap-4 max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Поиск игрушек..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Популярные товары
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover-card"
              >
                <Link to={`/toys/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">
                        {product.price} ₽
                      </span>
                      <Button variant="outline" size="sm" className="group">
                        Подробнее
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Категории</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Link key={index} to={`/toys/category/${category.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group cursor-pointer hover-card"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                    <p className="text-sm opacity-80">{category.count} товаров</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const products = [
  {
    id: 1,
    title: "Кукольный театр",
    description: "Набор кукол для домашних представлений",
    price: 2500,
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
  },
  {
    id: 2,
    title: "Развивающая книга",
    description: "Интерактивное пособие для детей",
    price: 1200,
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
  },
  {
    id: 3,
    title: "Театральные маски",
    description: "Набор масок для перевоплощений",
    price: 1800,
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302",
  },
  {
    id: 4,
    title: "Пальчиковый театр",
    description: "Мягкие игрушки на пальцы",
    price: 990,
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
  },
];

const categories = [
  {
    id: 1,
    title: "Развивающие игрушки",
    count: 24,
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
  },
  {
    id: 2,
    title: "Книги и пособия",
    count: 18,
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
  },
  {
    id: 3,
    title: "Театральный реквизит",
    count: 12,
    image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
  },
  {
    id: 4,
    title: "Творческие наборы",
    count: 16,
    image: "https://images.unsplash.com/photo-1501286353178-1ec881214838",
  },
];

export default Toys;