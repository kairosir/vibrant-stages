import { Link } from "react-router-dom";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">О нас</h3>
            <p className="text-gray-300">
              Мы создаем уникальные театральные постановки и предоставляем
              образовательные услуги для развития творческого потенциала детей.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Контакты</h3>
            <div className="space-y-3">
              <a
                href="tel:+79281124828"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span>+7 (928) 112-48-28</span>
              </a>
              <a
                href="mailto:irina.mezhinskay@mail.ru"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={18} />
                <span>irina.mezhinskay@mail.ru</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin size={18} />
                <span>Ростов-на-Дону</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-heading font-bold mb-4">
              Социальные сети
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/irina.mezhinskaya75"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://vk.com/irina.mezhinskaya75"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.713-1.033-1.01-1.49-1.146-1.745-1.146-.356 0-.458.102-.458.597v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.339-3.202-2.17-3.055-2.76-5.34-2.76-5.813 0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.864 2.5 2.303 4.692 2.896 4.692.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.76c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.27-1.423 2.18-3.624 2.18-3.624.119-.254.322-.491.762-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.474-.085.716-.576.716z"/>
                </svg>
              </a>
              <a
                href="https://t.me/mezhinka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.623 4.823-4.351c.192-.18-.045-.277-.297-.097l-5.965 3.759-2.564-.801c-.657-.206-.671-.657.136-.974l10.018-3.864c.54-.198 1.016.126.83.974z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; 2024 Театр. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;