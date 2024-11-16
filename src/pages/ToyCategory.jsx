import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const ToyCategory = () => {
  const { id } = useParams();
  
  // Find the category based on the ID
  const category = categories.find(c => c.id === parseInt(id));

  if (!category) {
    return <div>Категория не найдена</div>;
  }

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">{category.title}</h1>
          <p className="text-gray-600">Найдено {category.products.length} товаров</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.products.map((product, index) => (
            <motion.div
              key={product.id}
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
    </div>
  );
};

const categories = [
  {
    id: 1,
    title: "Развивающие игрушки",
    products: [
      {
        id: 101,
        title: "Логический куб",
        description: "Развивающая игрушка для детей от 2 лет",
        price: 1200,
        rating: "4.8",
        image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
      },
      {
        id: 102,
        title: "Пирамидка",
        description: "Классическая развивающая игрушка",
        price: 800,
        rating: "4.9",
        image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
      },
      {
        id: 103,
        title: "Сортер",
        description: "Игрушка для развития логического мышления",
        price: 1500,
        rating: "4.7",
        image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
      }
    ],
  },
  {
    id: 2,
    title: "Книги и пособия",
    products: [
      {
        id: 201,
        title: "Азбука театра",
        description: "Иллюстрированное пособие для детей",
        price: 900,
        rating: "4.9",
        image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
      },
      {
        id: 202,
        title: "Сказки для театра",
        description: "Сборник адаптированных сказок",
        price: 750,
        rating: "4.8",
        image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
      }
    ],
  },
  {
    id: 3,
    title: "Театральный реквизит",
    products: [
      {
        id: 301,
        title: "Набор масок",
        description: "Театральные маски для представлений",
        price: 1800,
        rating: "4.7",
        image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302",
      },
      {
        id: 302,
        title: "Ширма театральная",
        description: "Складная ширма для кукольного театра",
        price: 3500,
        rating: "4.9",
        image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
      }
    ],
  },
  {
    id: 4,
    title: "Творческие наборы",
    products: [
      {
        id: 401,
        title: "Набор для творчества",
        description: "Материалы для создания кукол",
        price: 2200,
        rating: "4.8",
        image: "https://images.unsplash.com/photo-1501286353178-1ec881214838",
      },
      {
        id: 402,
        title: "Пальчиковый театр",
        description: "Набор для создания пальчиковых кукол",
        price: 990,
        rating: "4.9",
        image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      }
    ],
  }
];

export default ToyCategory;
