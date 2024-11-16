import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ToyDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Find the product based on the ID
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Товар не найден</div>;
  }

  const handleContact = () => {
    toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Images Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-4">
              <img
                src={product.images[selectedImage]}
                alt={product.title}
                className="w-full h-96 object-cover rounded-lg mb-4"
              />
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Product Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-lg font-semibold">{product.rating}</span>
              </div>
              
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Характеристики:</h2>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center justify-between mb-8">
                <span className="text-3xl font-bold text-primary">
                  {product.price} ₽
                </span>
                <Button onClick={handleContact} size="lg" className="group">
                  Связаться для покупки
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+79281124828" className="hover:text-primary">
                    +7 (928) 112-48-28
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:irina.mezhinskay@mail.ru" className="hover:text-primary">
                    irina.mezhinskay@mail.ru
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const products = [
  {
    id: 1,
    title: "Кукольный театр",
    description: "Профессиональный набор кукол для домашних представлений. Идеально подходит для развития творческих способностей и воображения у детей.",
    price: 2500,
    rating: "4.9",
    images: [
      "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
      "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
      "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
      "https://images.unsplash.com/photo-1501286353178-1ec881214838",
    ],
    features: [
      "10 персонажей в наборе",
      "Экологичные материалы",
      "Подходит для детей от 3 лет",
      "Методическое пособие в комплекте",
    ],
  },
  {
    id: 2,
    title: "Развивающая книга",
    description: "Интерактивное пособие для детей",
    price: 1200,
    rating: "4.8",
    images: [
      "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
      "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
      "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
    ],
    features: [
      "Разнообразные задания",
      "Поддержка родителей",
      "Развивает логику и креативность",
    ],
  },
  {
    id: 3,
    title: "Театральные маски",
    description: "Набор масок для перевоплощений",
    price: 1800,
    rating: "4.7",
    images: [
      "https://images.unsplash.com/photo-1487252665478-49b61b47f302",
      "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
    ],
    features: [
      "10 разнообразных масок",
      "Подходит для театров и домашних игр",
      "Развивает воображение",
    ],
  },
  {
    id: 4,
    title: "Пальчиковый театр",
    description: "Мягкие игрушки на пальцы",
    price: 990,
    rating: "4.9",
    images: [
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    ],
    features: [
      "Подходит для детей от 2 лет",
      "Компактный и удобный",
      "Развивает мелкую моторику",
    ],
  },
];

export default ToyDetail;
