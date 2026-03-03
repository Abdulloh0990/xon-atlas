import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

// ==================== TRANSLATIONS ====================
const translations = {
  ru: {
    nav: {
      home: 'Главная',
      about: 'О нас',
      menu: 'Меню',
      gallery: 'Галерея',
      contact: 'Контакты'
    },
    hero: {
      title: 'Хон Атлас',
      subtitle: 'Искусство кулинарного совершенства',
      cta: 'Посмотреть меню'
    },
    about: {
      title: 'Наша История',
      text: 'Xon Atlas — это симфония вкусов, где каждое блюдо рассказывает историю. Мы объединяем традиционные узбекские рецепты с современными кулинарными техниками, создавая незабываемые гастрономические впечатления.',
      experience: 'Лет опыта',
      chefs: 'Шеф-повара',
      dishes: 'Блюд'
    },
    menu: {
      title: 'Наше Меню',
      subtitle: 'Изысканные блюда от наших мастеров',
      appetizers: 'Закуски',
      mains: 'Основные блюда',
      desserts: 'Десерты',
      drinks: 'Напитки',
      viewVariants: 'Смотреть варианты',
      variants: 'Варианты',
      close: 'Закрыть',
      description: 'Описание'
    },
    gallery: {
      title: 'Галерея',
      subtitle: 'Атмосфера и кулинарные шедевры'
    },
    contact: {
      title: 'Контакты',
      address: 'Адрес',
      addressText: 'г. Ташкент, ул. Амира Темура, 15',
      phone: 'Телефон',
      email: 'Email',
      hours: 'Часы работы',
      hoursText: 'Пн-Вс: 11:00 - 23:00'
    },
    footer: {
      rights: 'Все права защищены',
      social: 'Социальные сети'
    }
  },
  uz: {
    nav: {
      home: 'Bosh sahifa',
      about: 'Biz haqimizda',
      menu: 'Menyu',
      gallery: 'Galereya',
      contact: 'Aloqa'
    },
    hero: {
      title: 'Xon Atlas',
      subtitle: 'Kulinariya san\'ati kamoloti',
      cta: 'Menyuni ko\'rish'
    },
    about: {
      title: 'Bizning Tarix',
      text: 'Xon Atlas - bu har bir taom hikoya bo\'lib beruvchi ta\'mlar simfoniyasi. Biz an\'anaviy o\'zbek retseptlarini zamonaviy kulinariya texnikalari bilan birlashtirib, unutilmas gastonomik taassurotlar yaratamiz.',
      experience: 'Yillik tajriba',
      chefs: 'Oshpazlar',
      dishes: 'Taomlar'
    },
    menu: {
      title: 'Bizning Menyu',
      subtitle: 'Ustalarimizning nafis taomlar',
      appetizers: 'Gazaklar',
      mains: 'Asosiy taomlar',
      desserts: 'Shirinliklar',
      drinks: 'Ichimliklar',
      viewVariants: 'Turlarini ko\'rish',
      variants: 'Turlar',
      close: 'Yopish',
      description: 'Tavsif'
    },
    gallery: {
      title: 'Galereya',
      subtitle: 'Muhit va kulinariya asarlari'
    },
    contact: {
      title: 'Aloqa',
      address: 'Manzil',
      addressText: 'Toshkent sh., Amir Temur ko\'chasi, 15',
      phone: 'Telefon',
      email: 'Email',
      hours: 'Ish vaqti',
      hoursText: 'Du-Ya: 11:00 - 23:00'
    },
    footer: {
      rights: 'Barcha huquqlar himoyalangan',
      social: 'Ijtimoiy tarmoqlar'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      menu: 'Menu',
      gallery: 'Gallery',
      contact: 'Contact'
    },
    hero: {
      title: 'Xon Atlas',
      subtitle: 'The Art of Culinary Excellence',
      cta: 'View Menu'
    },
    about: {
      title: 'Our Story',
      text: 'Xon Atlas is a symphony of flavors where every dish tells a story. We unite traditional Uzbek recipes with modern culinary techniques, creating unforgettable gastronomic experiences.',
      experience: 'Years of Experience',
      chefs: 'Master Chefs',
      dishes: 'Signature Dishes'
    },
    menu: {
      title: 'Our Menu',
      subtitle: 'Exquisite dishes from our masters',
      appetizers: 'Appetizers',
      mains: 'Main Courses',
      desserts: 'Desserts',
      drinks: 'Beverages',
      viewVariants: 'View Variants',
      variants: 'Variants',
      close: 'Close',
      description: 'Description'
    },
    gallery: {
      title: 'Gallery',
      subtitle: 'Atmosphere and culinary masterpieces'
    },
    contact: {
      title: 'Contact',
      address: 'Address',
      addressText: 'Tashkent, Amir Temur Street, 15',
      phone: 'Phone',
      email: 'Email',
      hours: 'Working Hours',
      hoursText: 'Mon-Sun: 11:00 AM - 11:00 PM'
    },
    footer: {
      rights: 'All rights reserved',
      social: 'Social Media'
    }
  }
};

// ==================== MENU DATA WITH VARIANTS ====================
const menuData = {
  appetizers: [
    {
      name_ru: 'Самса',
      name_uz: 'Somsa',
      name_en: 'Samsa',
      description_ru: 'Традиционная выпечка с различными начинками',
      description_uz: 'Turli xil ichliklardan tayyorlangan an\'anaviy pishiriq',
      description_en: 'Traditional pastry with various fillings',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80',
      hasVariants: true,
      variants: [
        { name_ru: 'С говядиной', name_uz: 'Mol go\'shtli', name_en: 'Beef', price: '12,000' },
        { name_ru: 'С курицей', name_uz: 'Tovuq go\'shtli', name_en: 'Chicken', price: '10,000' },
        { name_ru: 'С тыквой', name_uz: 'Qovoqli', name_en: 'Pumpkin', price: '8,000' },
        { name_ru: 'С картофелем', name_uz: 'Kartoshkali', name_en: 'Potato', price: '7,000' }
      ]
    },
    {
      name_ru: 'Долма',
      name_uz: 'Do\'lma',
      name_en: 'Dolma',
      description_ru: 'Виноградные листья с начинкой',
      description_uz: 'Tok barglari ichlikli',
      description_en: 'Stuffed grape leaves',
      image: 'https://images.unsplash.com/photo-1598511726623-d2e9996892f0?w=800&q=80',
      hasVariants: true,
      variants: [
        { name_ru: 'Классическая', name_uz: 'Klassik', name_en: 'Classic', price: '25,000' },
        { name_ru: 'С бараниной', name_uz: 'Qo\'y go\'shtli', name_en: 'Lamb', price: '30,000' },
        { name_ru: 'Вегетарианская', name_uz: 'Vegetarian', name_en: 'Vegetarian', price: '20,000' }
      ]
    },
    {
      name_ru: 'Салаты',
      name_uz: 'Salatlar',
      name_en: 'Salads',
      description_ru: 'Свежие салаты из сезонных овощей',
      description_uz: 'Mavsumiy sabzavotlardan yangi salatlar',
      description_en: 'Fresh seasonal salads',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
      hasVariants: true,
      variants: [
        { name_ru: 'Ачичук', name_uz: 'Achichuk', name_en: 'Achichuk', price: '15,000' },
        { name_ru: 'Цезарь', name_uz: 'Sezar', name_en: 'Caesar', price: '22,000' },
        { name_ru: 'Греческий', name_uz: 'Grek salati', name_en: 'Greek', price: '20,000' }
      ]
    },
    {
      name_ru: 'Хумус',
      name_uz: 'Xumus',
      name_en: 'Hummus',
      description_ru: 'Нежная паста из нута',
      description_uz: 'No\'xatdan tayyorlangan pasta',
      description_en: 'Smooth chickpea paste',
      image: 'https://images.unsplash.com/photo-1571696952801-b7d93e769fd8?w=800&q=80',
      price: '18,000',
      hasVariants: false
    }
  ],
  mains: [
    {
      name_ru: 'Плов',
      name_uz: 'Osh',
      name_en: 'Plov',
      description_ru: 'Жемчужина узбекской кухни',
      description_uz: 'O\'zbek oshxonasining gauhari',
      description_en: 'The pearl of Uzbek cuisine',
      image: 'https://images.unsplash.com/photo-1637806930600-37fa8892069d?w=800&q=80',
      hasVariants: true,
      variants: [
        { name_ru: 'Ташкентский', name_uz: 'Toshkent oshi', name_en: 'Tashkent Style', price: '40,000' },
        { name_ru: 'Самаркандский', name_uz: 'Samarqand oshi', name_en: 'Samarkand Style', price: '45,000' },
        { name_ru: 'Ферганский', name_uz: 'Farg\'ona oshi', name_en: 'Fergana Style', price: '42,000' },
        { name_ru: 'С бараниной', name_uz: 'Qo\'y go\'shtli', name_en: 'Lamb', price: '50,000' },
        { name_ru: 'Диетический', name_uz: 'Parhez oshi', name_en: 'Diet', price: '35,000' }
      ]
    },
    {
      name_ru: 'Шашлык',
      name_uz: 'Kabob',
      name_en: 'Kebab',
      description_ru: 'Сочное мясо на мангале',
      description_uz: 'Suvli go\'sht cho\'g\'da',
      description_en: 'Juicy grilled meat',
      image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&q=80',
      hasVariants: true,
      variants: [
        { name_ru: 'Из баранины', name_uz: 'Qo\'y go\'shtidan', name_en: 'Lamb', price: '55,000' },
        { name_ru: 'Из говядины', name_uz: 'Mol go\'shtidan', name_en: 'Beef', price: '50,000' },
        { name_ru: 'Из курицы', name_uz: 'Tovuq go\'shtidan', name_en: 'Chicken', price: '40,000' },
        { name_ru: 'Люля-кебаб', name_uz: 'Lula kabob', name_en: 'Lula Kebab', price: '45,000' },
        { name_ru: 'Ассорти', name_uz: 'Aralash', name_en: 'Mixed', price: '65,000' }
      ]
    },
    {
      name_ru: 'Лагман',
      name_uz: 'Lag\'mon',
      name_en: 'Lagman',
      description_ru: 'Домашняя лапша с мясом и овощами',
      description_uz: 'Uy lag\'moni go\'sht va sabzavotlar bilan',
      description_en: 'Handmade noodles with meat and vegetables',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80',
      hasVariants: true,
      variants: [
        { name_ru: 'Классический', name_uz: 'Klassik', name_en: 'Classic', price: '35,000' },
        { name_ru: 'Императорский', name_uz: 'Imperator', name_en: 'Imperial', price: '45,000' },
        { name_ru: 'Острый', name_uz: 'Achchiq', name_en: 'Spicy', price: '38,000' }
      ]
    },
    {
      name_ru: 'Манты',
      name_uz: 'Manti',
      name_en: 'Manti',
      description_ru: 'Паровые пельмени по-узбекски',
      description_uz: 'Bug\'da pishirilgan chuchvara',
      description_en: 'Uzbek steamed dumplings',
      image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80',
      hasVariants: true,
      variants: [
        { name_ru: 'С говядиной', name_uz: 'Mol go\'shtli', name_en: 'Beef', price: '35,000' },
        { name_ru: 'С бараниной', name_uz: 'Qo\'y go\'shtli', name_en: 'Lamb', price: '40,000' },
        { name_ru: 'С тыквой', name_uz: 'Qovoqli', name_en: 'Pumpkin', price: '28,000' },
        { name_ru: 'Ассорти', name_uz: 'Aralash', name_en: 'Mixed', price: '45,000' }
      ]
    }
  ],
  desserts: [
    {
      name_ru: 'Халва',
      name_uz: 'Halva',
      name_en: 'Halva',
      description_ru: 'Восточная сладость',
      description_uz: 'Sharq shirinligi',
      description_en: 'Oriental sweetness',
      image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&q=80',
      hasVariants: true,
      variants: [
        { name_ru: 'Подсолнечная', name_uz: 'Kungaboqar', name_en: 'Sunflower', price: '18,000' },
        { name_ru: 'Кунжутная', name_uz: 'Kunjutli', name_en: 'Sesame', price: '20,000' },
        { name_ru: 'Ореховая', name_uz: 'Yong\'oqli', name_en: 'Nut', price: '22,000' },
        { name_ru: 'Ассорти', name_uz: 'Aralash', name_en: 'Assorted', price: '25,000' }
      ]
    },
    {
      name_ru: 'Пахлава',
      name_uz: 'Pahlava',
      name_en: 'Baklava',
      description_ru: 'Слоеное тесто с орехами и медом',
      description_uz: 'Yong\'oq va asal bilan qatlama xamir',
      description_en: 'Layered pastry with nuts and honey',
      image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&q=80',
      hasVariants: true,
      variants: [
        { name_ru: 'Медовая', name_uz: 'Asalli', name_en: 'Honey', price: '22,000' },
        { name_ru: 'Ореховая', name_uz: 'Yong\'oqli', name_en: 'Walnut', price: '25,000' },
        { name_ru: 'Фисташковая', name_uz: 'Pista', name_en: 'Pistachio', price: '30,000' }
      ]
    },
    {
      name_ru: 'Чак-чак',
      name_uz: 'Chak-chak',
      name_en: 'Chak-chak',
      description_ru: 'Хрустящее медовое лакомство',
      description_uz: 'Shitirlagan asalli shirinlik',
      description_en: 'Crispy honey treat',
      image: 'https://images.unsplash.com/photo-1587241321921-91aaab5ec277?w=800&q=80',
      price: '18,000',
      hasVariants: false
    }
  ],
  drinks: [
    {
      name_ru: 'Чай',
      name_uz: 'Choy',
      name_en: 'Tea',
      description_ru: 'Традиционный узбекский чай',
      description_uz: 'An\'anaviy o\'zbek choyi',
      description_en: 'Traditional Uzbek tea',
      image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80',
      hasVariants: true,
      variants: [
        { name_ru: 'Зеленый', name_uz: 'Ko\'k choy', name_en: 'Green', price: '8,000' },
        { name_ru: 'Черный', name_uz: 'Qora choy', name_en: 'Black', price: '7,000' },
        { name_ru: 'Травяной', name_uz: 'O\'t choyi', name_en: 'Herbal', price: '10,000' }
      ]
    },
    {
      name_ru: 'Свежевыжатые соки',
      name_uz: 'Yangi sharbatlar',
      name_en: 'Fresh Juices',
      description_ru: 'Натуральные фруктовые соки',
      description_uz: 'Tabiiy mevali sharbatlar',
      description_en: 'Natural fruit juices',
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&q=80',
      hasVariants: true,
      variants: [
        { name_ru: 'Апельсиновый', name_uz: 'Apelsin', name_en: 'Orange', price: '15,000' },
        { name_ru: 'Гранатовый', name_uz: 'Anor', name_en: 'Pomegranate', price: '18,000' },
        { name_ru: 'Морковный', name_uz: 'Sabzi', name_en: 'Carrot', price: '12,000' },
        { name_ru: 'Микс', name_uz: 'Aralash', name_en: 'Mix', price: '20,000' }
      ]
    },
    {
      name_ru: 'Лимонады',
      name_uz: 'Limonadlar',
      name_en: 'Lemonades',
      description_ru: 'Авторские освежающие лимонады',
      description_uz: 'Muallif tetiklantiruvchi limonadlar',
      description_en: 'Signature refreshing lemonades',
      image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f7b?w=800&q=80',
      hasVariants: true,
      variants: [
        { name_ru: 'Классический', name_uz: 'Klassik', name_en: 'Classic', price: '12,000' },
        { name_ru: 'Мятный', name_uz: 'Yalpizli', name_en: 'Mint', price: '14,000' },
        { name_ru: 'Ягодный', name_uz: 'Rezavorli', name_en: 'Berry', price: '16,000' }
      ]
    }
  ]
};

// ==================== CONTEXTS ====================
const ThemeContext = createContext();
const LanguageContext = createContext();

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

// ==================== CUSTOM HOOKS ====================
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isIntersecting];
};

// ==================== LOADER COMPONENT ====================
const Loader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="loader">
      <div className="loader__content">
        <svg className="loader__logo" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle className="loader__circle" cx="100" cy="100" r="80" />
          <path className="loader__path" d="M 100 40 L 120 80 L 160 80 L 130 105 L 145 145 L 100 120 L 55 145 L 70 105 L 40 80 L 80 80 Z" />
        </svg>
        <h2 className="loader__text">Xon Atlas</h2>
        <div className="loader__bar">
          <div className="loader__progress"></div>
        </div>
      </div>
    </div>
  );
};

// ==================== MODAL COMPONENT ====================
const MenuModal = ({ item, onClose }) => {
  const { language, t } = useLanguage();

  if (!item) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>×</button>
        
        <div className="modal__image">
          <img src={item.image} alt={item[`name_${language}`]} />
        </div>

        <div className="modal__info">
          <h2 className="modal__title">{item[`name_${language}`]}</h2>
          <p className="modal__description">{item[`description_${language}`]}</p>

          {item.hasVariants ? (
            <>
              <h3 className="modal__variants-title">{t.menu.variants}:</h3>
              <div className="modal__variants">
                {item.variants.map((variant, index) => (
                  <div key={index} className="modal__variant">
                    <span className="modal__variant-name">{variant[`name_${language}`]}</span>
                    <span className="modal__variant-dots"></span>
                    <span className="modal__variant-price">{variant.price} сум</span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="modal__price-single">{item.price} сум</div>
          )}
        </div>
      </div>
    </div>
  );
};

// ==================== HEADER COMPONENT ====================
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        <div className="header__logo" onClick={() => scrollToSection('hero')}>
          <svg className="header__logo-icon" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
            <circle className="header__logo-circle" cx="25" cy="25" r="20" />
            <path className="header__logo-star" d="M 25 10 L 28 19 L 37 19 L 30 24 L 33 33 L 25 28 L 17 33 L 20 24 L 13 19 L 22 19 Z" />
          </svg>
          <span className="header__logo-text">Xon Atlas</span>
        </div>

        <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
          <a onClick={() => scrollToSection('hero')} className="header__nav-link">{t.nav.home}</a>
          <a onClick={() => scrollToSection('about')} className="header__nav-link">{t.nav.about}</a>
          <a onClick={() => scrollToSection('menu')} className="header__nav-link">{t.nav.menu}</a>
          <a onClick={() => scrollToSection('gallery')} className="header__nav-link">{t.nav.gallery}</a>
          <a onClick={() => scrollToSection('contact')} className="header__nav-link">{t.nav.contact}</a>
        </nav>

        <div className="header__controls">
          <div className="header__lang">
            <button 
              className={`header__lang-btn ${language === 'ru' ? 'header__lang-btn--active' : ''}`}
              onClick={() => setLanguage('ru')}
            >
              RU
            </button>
            <button 
              className={`header__lang-btn ${language === 'uz' ? 'header__lang-btn--active' : ''}`}
              onClick={() => setLanguage('uz')}
            >
              UZ
            </button>
            <button 
              className={`header__lang-btn ${language === 'en' ? 'header__lang-btn--active' : ''}`}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
          </div>

          <button className="header__theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <button 
            className={`header__burger ${isMobileMenuOpen ? 'header__burger--open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

// ==================== HERO COMPONENT ====================
const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero__bg" style={{ transform: `translateY(${scrollY * 0.5}px)` }}></div>
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <h1 className="hero__title">{t.hero.title}</h1>
        <p className="hero__subtitle">{t.hero.subtitle}</p>
        <button className="hero__cta" onClick={scrollToMenu}>
          {t.hero.cta}
          <span className="hero__cta-arrow">→</span>
        </button>
      </div>
      <div className="hero__scroll">
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  );
};

// ==================== ABOUT COMPONENT ====================
const About = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const { t } = useLanguage();

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about__container">
        <div className={`about__content ${isVisible ? 'about__content--visible' : ''}`}>
          <h2 className="about__title">{t.about.title}</h2>
          <p className="about__text">{t.about.text}</p>
          
          <div className="about__stats">
            <div className="about__stat">
              <div className="about__stat-number">25+</div>
              <div className="about__stat-label">{t.about.experience}</div>
            </div>
            <div className="about__stat">
              <div className="about__stat-number">8</div>
              <div className="about__stat-label">{t.about.chefs}</div>
            </div>
            <div className="about__stat">
              <div className="about__stat-number">120+</div>
              <div className="about__stat-label">{t.about.dishes}</div>
            </div>
          </div>
        </div>

        <div className={`about__image ${isVisible ? 'about__image--visible' : ''}`}>
          <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80" alt="Restaurant" />
          <div className="about__image-frame"></div>
        </div>
      </div>
    </section>
  );
};

// ==================== MENU COMPONENT ====================
const Menu = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [activeCategory, setActiveCategory] = useState('appetizers');
  const [selectedItem, setSelectedItem] = useState(null);
  const { t, language } = useLanguage();

  const categories = ['appetizers', 'mains', 'desserts', 'drinks'];

  return (
    <section className="menu" id="menu" ref={ref}>
      <div className="menu__container">
        <div className={`menu__header ${isVisible ? 'menu__header--visible' : ''}`}>
          <h2 className="menu__title">{t.menu.title}</h2>
          <p className="menu__subtitle">{t.menu.subtitle}</p>
        </div>

        <div className={`menu__categories ${isVisible ? 'menu__categories--visible' : ''}`}>
          {categories.map((category) => (
            <button
              key={category}
              className={`menu__category ${activeCategory === category ? 'menu__category--active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {t.menu[category]}
            </button>
          ))}
        </div>

        <div className={`menu__grid ${isVisible ? 'menu__grid--visible' : ''}`}>
          {menuData[activeCategory].map((item, index) => (
            <div 
              key={index} 
              className="menu__card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedItem(item)}
            >
              <div className="menu__card-image">
                <img src={item.image} alt={item[`name_${language}`]} />
                <div className="menu__card-overlay">
                  <span className="menu__card-view">
                    {item.hasVariants ? t.menu.viewVariants : t.menu.description}
                  </span>
                </div>
              </div>
              <div className="menu__card-content">
                <h3 className="menu__card-title">{item[`name_${language}`]}</h3>
                <p className="menu__card-description">{item[`description_${language}`]}</p>
                {!item.hasVariants && (
                  <div className="menu__card-price">{item.price} сум</div>
                )}
                {item.hasVariants && (
                  <div className="menu__card-variants-count">
                    {item.variants.length} {language === 'ru' ? 'варианта' : language === 'uz' ? 'tur' : 'variants'}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <MenuModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  );
};

// ==================== GALLERY COMPONENT ====================
const Gallery = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const { t } = useLanguage();

  const galleryImages = [
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
    'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80',
    'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80'
  ];

  return (
    <section className="gallery" id="gallery" ref={ref}>
      <div className="gallery__container">
        <div className={`gallery__header ${isVisible ? 'gallery__header--visible' : ''}`}>
          <h2 className="gallery__title">{t.gallery.title}</h2>
          <p className="gallery__subtitle">{t.gallery.subtitle}</p>
        </div>

        <div className={`gallery__grid ${isVisible ? 'gallery__grid--visible' : ''}`}>
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="gallery__item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={image} alt={`Gallery ${index + 1}`} />
              <div className="gallery__item-overlay">
                <svg className="gallery__item-icon" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M 25 10 L 28 19 L 37 19 L 30 24 L 33 33 L 25 28 L 17 33 L 20 24 L 13 19 L 22 19 Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== CONTACT COMPONENT ====================
const Contact = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const { t } = useLanguage();

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="contact__container">
        <div className={`contact__header ${isVisible ? 'contact__header--visible' : ''}`}>
          <h2 className="contact__title">{t.contact.title}</h2>
        </div>

        <div className={`contact__grid ${isVisible ? 'contact__grid--visible' : ''}`}>
          <div className="contact__item">
            <div className="contact__icon">📍</div>
            <h3 className="contact__item-title">{t.contact.address}</h3>
            <p className="contact__item-text">{t.contact.addressText}</p>
          </div>

          <div className="contact__item">
            <div className="contact__icon">📞</div>
            <h3 className="contact__item-title">{t.contact.phone}</h3>
            <p className="contact__item-text">+998 90 123 45 67</p>
          </div>

          <div className="contact__item">
            <div className="contact__icon">✉️</div>
            <h3 className="contact__item-title">{t.contact.email}</h3>
            <p className="contact__item-text">info@xonatlas.uz</p>
          </div>

          <div className="contact__item">
            <div className="contact__icon">🕒</div>
            <h3 className="contact__item-title">{t.contact.hours}</h3>
            <p className="contact__item-text">{t.contact.hoursText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== FOOTER COMPONENT ====================
const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <svg className="footer__logo" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M 25 10 L 28 19 L 37 19 L 30 24 L 33 33 L 25 28 L 17 33 L 20 24 L 13 19 L 22 19 Z" fill="currentColor" />
            </svg>
            <span className="footer__brand-text">Xon Atlas</span>
          </div>

          <div className="footer__social">
            <span className="footer__social-label">{t.footer.social}:</span>
            <a href="#" className="footer__social-link" aria-label="Instagram">📷</a>
            <a href="#" className="footer__social-link" aria-label="Facebook">👍</a>
            <a href="#" className="footer__social-link" aria-label="Telegram">✈️</a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">© 2024 Xon Atlas. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

// ==================== APP COMPONENT ====================
export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('language') || 'ru';
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const setLanguage = (lang) => {
    setLanguageState(lang);
  };

  const t = translations[language];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage, t }}>
        <div className="app">
          <Loader isLoading={isLoading} />
          {!isLoading && (
            <>
              <Header />
              <main>
                <Hero />
                <About />
                <Menu />
                <Gallery />
                <Contact />
              </main>
              <Footer />
            </>
          )}
        </div>

        <style>{`
/* ==================== CSS VARIABLES ==================== */
:root {
  --primary-gold: #D4AF37;
  --primary-dark: #0A0A0A;
  --secondary-gold: #C9A961;
  --accent-gold: #E8C47C;
  --bg-dark: #0F0F0F;
  --bg-secondary: #1A1A1A;
  --text-light: #FFFFFF;
  --text-muted: #CCCCCC;
  --border-color: rgba(212, 175, 55, 0.3);
  --transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  --font-display: 'Playfair Display', serif;
  --font-body: 'Montserrat', sans-serif;
}

[data-theme="light"] {
  --primary-gold: #B8860B;
  --primary-dark: #FFFFFF;
  --secondary-gold: #8B6914;
  --accent-gold: #DAA520;
  --bg-dark: #FAFAFA;
  --bg-secondary: #F5F5F5;
  --text-light: #1A1A1A;
  --text-muted: #666666;
  --border-color: rgba(184, 134, 11, 0.3);
}

/* ==================== RESET & BASE ==================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  font-family: var(--font-body);
  background: var(--bg-dark);
  color: var(--text-light);
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Montserrat:wght@300;400;500;600;700&display=swap');

/* ==================== LOADER ==================== */
.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--bg-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: loaderFadeOut 0.5s ease 2.3s forwards;
}

@keyframes loaderFadeOut {
  to {
    opacity: 0;
    visibility: hidden;
  }
}

.loader__content {
  text-align: center;
}

.loader__logo {
  width: 120px;
  height: 120px;
  margin: 0 auto 2rem;
  animation: logoFloat 2s ease-in-out infinite;
}

@keyframes logoFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.loader__circle {
  fill: none;
  stroke: var(--primary-gold);
  stroke-width: 2;
  stroke-dasharray: 502;
  stroke-dashoffset: 502;
  animation: drawCircle 2s ease-out forwards;
}

@keyframes drawCircle {
  to {
    stroke-dashoffset: 0;
  }
}

.loader__path {
  fill: var(--primary-gold);
  opacity: 0;
  animation: fadeInStar 1s ease 0.5s forwards;
}

@keyframes fadeInStar {
  to {
    opacity: 1;
  }
}

.loader__text {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-gold);
  letter-spacing: 4px;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: fadeInText 1s ease 1s forwards;
}

@keyframes fadeInText {
  to {
    opacity: 1;
  }
}

.loader__bar {
  width: 200px;
  height: 2px;
  background: var(--bg-secondary);
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.loader__progress {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, transparent, var(--primary-gold), transparent);
  animation: loadProgress 1.5s ease-in-out infinite;
}

@keyframes loadProgress {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* ==================== MODAL ==================== */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 2rem;
  animation: modalFadeIn 0.3s ease;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal__content {
  background: var(--bg-secondary);
  border: 2px solid var(--primary-gold);
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  animation: modalSlideUp 0.4s ease;
}

@keyframes modalSlideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.modal__close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  background: var(--primary-gold);
  color: var(--primary-dark);
  border: none;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.modal__close:hover {
  transform: rotate(90deg);
  background: var(--accent-gold);
}

.modal__image {
  width: 100%;
  height: 100%;
  min-height: 400px;
}

.modal__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal__info {
  padding: 3rem 2.5rem;
}

.modal__title {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-gold);
  margin-bottom: 1rem;
  letter-spacing: 2px;
}

.modal__description {
  font-size: 1.1rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
  line-height: 1.8;
}

.modal__variants-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary-gold);
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
}

.modal__variants {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.modal__variant {
  display: flex;
  align-items: center;
  padding: 1rem;
  background: var(--bg-dark);
  border: 1px solid var(--border-color);
  transition: var(--transition);
}

.modal__variant:hover {
  border-color: var(--primary-gold);
  transform: translateX(10px);
}

.modal__variant-name {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-light);
}

.modal__variant-dots {
  flex: 1;
  height: 1px;
  background-image: linear-gradient(to right, var(--border-color) 50%, transparent 50%);
  background-size: 8px 1px;
  background-repeat: repeat-x;
  margin: 0 1rem;
}

.modal__variant-price {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--primary-gold);
}

.modal__price-single {
  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary-gold);
  text-align: center;
  margin-top: 2rem;
}

/* ==================== HEADER ==================== */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1.5rem 0;
  transition: var(--transition);
  background: transparent;
}

.header--scrolled {
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  box-shadow: 0 2px 20px rgba(212, 175, 55, 0.1);
}

[data-theme="light"] .header--scrolled {
  background: rgba(255, 255, 255, 0.95);
}

.header__container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: var(--transition);
}

.header__logo:hover {
  transform: translateY(-2px);
}

.header__logo-icon {
  width: 40px;
  height: 40px;
}

.header__logo-circle {
  fill: none;
  stroke: var(--primary-gold);
  stroke-width: 2;
  transition: var(--transition);
}

.header__logo-star {
  fill: var(--primary-gold);
  transition: var(--transition);
}

.header__logo:hover .header__logo-circle {
  stroke: var(--accent-gold);
  transform: rotate(360deg);
  transform-origin: center;
}

.header__logo:hover .header__logo-star {
  fill: var(--accent-gold);
}

.header__logo-text {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-gold);
  letter-spacing: 2px;
}

.header__nav {
  display: flex;
  gap: 2.5rem;
}

.header__nav-link {
  position: relative;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-light);
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition);
  letter-spacing: 1px;
}

.header__nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-gold);
  transition: var(--transition);
}

.header__nav-link:hover {
  color: var(--primary-gold);
}

.header__nav-link:hover::after {
  width: 100%;
}

.header__controls {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.header__lang {
  display: flex;
  gap: 0.5rem;
}

.header__lang-btn {
  padding: 0.4rem 0.8rem;
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-muted);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  border-radius: 4px;
}

.header__lang-btn:hover {
  border-color: var(--primary-gold);
  color: var(--primary-gold);
  transform: translateY(-2px);
}

.header__lang-btn--active {
  background: var(--primary-gold);
  color: var(--primary-dark);
  border-color: var(--primary-gold);
}

.header__theme-btn {
  width: 40px;
  height: 40px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
}

.header__theme-btn:hover {
  background: var(--primary-gold);
  border-color: var(--primary-gold);
  transform: rotate(180deg) scale(1.1);
}

.header__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.header__burger span {
  width: 100%;
  height: 2px;
  background: var(--primary-gold);
  transition: var(--transition);
}

.header__burger--open span:nth-child(1) {
  transform: rotate(45deg) translateY(10px);
}

.header__burger--open span:nth-child(2) {
  opacity: 0;
}

.header__burger--open span:nth-child(3) {
  transform: rotate(-45deg) translateY(-10px);
}

/* ==================== HERO ==================== */
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background: linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0F0F0F 100%);
  z-index: 1;
}

[data-theme="light"] .hero__bg {
  background: linear-gradient(135deg, #FAFAFA 0%, #F5F5F5 50%, #FFFFFF 100%);
}

.hero__bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(201, 169, 97, 0.1) 0%, transparent 50%);
  animation: bgMove 20s ease-in-out infinite;
}

@keyframes bgMove {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-20px, 20px); }
}

.hero__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, transparent 0%, rgba(10, 10, 10, 0.5) 100%);
  z-index: 2;
}

.hero__content {
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 900px;
  padding: 0 2rem;
  animation: heroFadeIn 1.5s ease-out;
}

@keyframes heroFadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero__title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 900;
  color: var(--primary-gold);
  letter-spacing: 8px;
  margin-bottom: 1rem;
  text-transform: uppercase;
  animation: titleGlow 3s ease-in-out infinite;
}

@keyframes titleGlow {
  0%, 100% {
    text-shadow: 0 0 20px rgba(212, 175, 55, 0.3),
                 0 0 40px rgba(212, 175, 55, 0.2),
                 0 0 60px rgba(212, 175, 55, 0.1);
  }
  50% {
    text-shadow: 0 0 30px rgba(212, 175, 55, 0.4),
                 0 0 60px rgba(212, 175, 55, 0.3),
                 0 0 90px rgba(212, 175, 55, 0.2);
  }
}

.hero__subtitle {
  font-size: clamp(1.2rem, 3vw, 2rem);
  font-weight: 300;
  color: var(--text-muted);
  letter-spacing: 3px;
  margin-bottom: 3rem;
  animation: subtitleFadeIn 1.5s ease-out 0.3s backwards;
}

@keyframes subtitleFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero__cta {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 3rem;
  background: var(--primary-gold);
  color: var(--primary-dark);
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 2px;
  border: 2px solid var(--primary-gold);
  cursor: pointer;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  animation: ctaFadeIn 1.5s ease-out 0.6s backwards;
}

@keyframes ctaFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero__cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: var(--transition);
}

.hero__cta:hover::before {
  left: 100%;
}

.hero__cta:hover {
  background: transparent;
  color: var(--primary-gold);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
}

.hero__cta-arrow {
  font-size: 1.5rem;
  transition: var(--transition);
}

.hero__cta:hover .hero__cta-arrow {
  transform: translateX(10px);
}

.hero__scroll {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  animation: scrollBounce 2s ease-in-out infinite;
}

@keyframes scrollBounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(15px);
  }
}

.hero__scroll-line {
  width: 2px;
  height: 60px;
  background: linear-gradient(180deg, var(--primary-gold), transparent);
}

/* ==================== ABOUT ==================== */
.about {
  padding: 8rem 0;
  background: var(--bg-dark);
  position: relative;
}

.about__container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
}

.about__content {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 1s ease-out;
}

.about__content--visible {
  opacity: 1;
  transform: translateX(0);
}

.about__title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: var(--primary-gold);
  margin-bottom: 2rem;
  letter-spacing: 3px;
}

.about__text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-muted);
  margin-bottom: 3rem;
}

.about__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.about__stat {
  text-align: center;
  padding: 2rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.about__stat::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: var(--primary-gold);
  transition: var(--transition);
}

.about__stat:hover::before {
  left: 0;
}

.about__stat:hover {
  transform: translateY(-10px);
  border-color: var(--primary-gold);
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
}

.about__stat-number {
  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary-gold);
  margin-bottom: 0.5rem;
}

.about__stat-label {
  font-size: 0.9rem;
  color: var(--text-muted);
  letter-spacing: 1px;
}

.about__image {
  opacity: 0;
  transform: translateX(50px);
  transition: all 1s ease-out 0.3s;
  position: relative;
  height: 500px;
}

.about__image--visible {
  opacity: 1;
  transform: translateX(0);
}

.about__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 2px solid var(--primary-gold);
}

.about__image-frame {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 100%;
  height: 100%;
  border: 2px solid var(--border-color);
  z-index: -1;
  transition: var(--transition);
}

.about__image:hover .about__image-frame {
  top: 30px;
  right: 30px;
  border-color: var(--primary-gold);
}

/* ==================== MENU ==================== */
.menu {
  padding: 8rem 0;
  background: var(--bg-secondary);
}

.menu__container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.menu__header {
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s ease-out;
}

.menu__header--visible {
  opacity: 1;
  transform: translateY(0);
}

.menu__title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: var(--primary-gold);
  margin-bottom: 1rem;
  letter-spacing: 3px;
}

.menu__subtitle {
  font-size: 1.2rem;
  color: var(--text-muted);
  letter-spacing: 2px;
}

.menu__categories {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s ease-out 0.2s;
}

.menu__categories--visible {
  opacity: 1;
  transform: translateY(0);
}

.menu__category {
  padding: 1rem 2.5rem;
  background: transparent;
  border: 2px solid var(--border-color);
  color: var(--text-muted);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.menu__category::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--primary-gold);
  transition: var(--transition);
  z-index: -1;
}

.menu__category:hover::before,
.menu__category--active::before {
  left: 0;
}

.menu__category:hover,
.menu__category--active {
  color: var(--primary-dark);
  border-color: var(--primary-gold);
  transform: translateY(-3px);
}

.menu__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
  opacity: 0;
  transition: all 0.5s ease-out 0.3s;
}

.menu__grid--visible {
  opacity: 1;
}

.menu__card {
  background: var(--bg-dark);
  border: 2px solid var(--border-color);
  overflow: hidden;
  cursor: pointer;
  transition: var(--transition);
  opacity: 0;
  transform: translateY(30px);
  animation: menuCardFadeIn 0.6s ease-out forwards;
}

@keyframes menuCardFadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.menu__card:hover {
  border-color: var(--primary-gold);
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(212, 175, 55, 0.2);
}

.menu__card-image {
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
}

.menu__card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.menu__card:hover img {
  transform: scale(1.1);
}

.menu__card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: var(--transition);
}

.menu__card:hover .menu__card-overlay {
  opacity: 1;
}

.menu__card-view {
  color: var(--primary-gold);
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 1rem 2rem;
  border: 2px solid var(--primary-gold);
  background: transparent;
  transition: var(--transition);
}

.menu__card:hover .menu__card-view {
  background: var(--primary-gold);
  color: var(--primary-dark);
}

.menu__card-content {
  padding: 2rem;
}

.menu__card-title {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-gold);
  margin-bottom: 0.75rem;
  letter-spacing: 1px;
}

.menu__card-description {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.menu__card-price {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--primary-gold);
}

.menu__card-variants-count {
  font-size: 0.9rem;
  color: var(--text-muted);
  padding: 0.5rem 1rem;
  background: var(--bg-secondary);
  border-left: 3px solid var(--primary-gold);
  display: inline-block;
}

/* ==================== GALLERY ==================== */
.gallery {
  padding: 8rem 0;
  background: var(--bg-dark);
}

.gallery__container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.gallery__header {
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s ease-out;
}

.gallery__header--visible {
  opacity: 1;
  transform: translateY(0);
}

.gallery__title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: var(--primary-gold);
  margin-bottom: 1rem;
  letter-spacing: 3px;
}

.gallery__subtitle {
  font-size: 1.2rem;
  color: var(--text-muted);
  letter-spacing: 2px;
}

.gallery__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  opacity: 0;
  transition: all 1s ease-out 0.3s;
}

.gallery__grid--visible {
  opacity: 1;
}

.gallery__item {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid var(--border-color);
  opacity: 0;
  transform: scale(0.9);
  animation: galleryItemFadeIn 0.8s ease-out forwards;
}

@keyframes galleryItemFadeIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.gallery__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.gallery__item:hover img {
  transform: scale(1.15);
}

.gallery__item-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: var(--transition);
}

.gallery__item:hover .gallery__item-overlay {
  opacity: 1;
}

.gallery__item-icon {
  width: 80px;
  height: 80px;
  color: var(--primary-gold);
  transform: scale(0.5) rotate(-180deg);
  transition: var(--transition);
}

.gallery__item:hover .gallery__item-icon {
  transform: scale(1) rotate(0deg);
}

/* ==================== CONTACT ==================== */
.contact {
  padding: 8rem 0;
  background: var(--bg-secondary);
}

.contact__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.contact__header {
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s ease-out;
}

.contact__header--visible {
  opacity: 1;
  transform: translateY(0);
}

.contact__title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: var(--primary-gold);
  letter-spacing: 3px;
}

.contact__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  opacity: 0;
  transition: all 1s ease-out 0.3s;
}

.contact__grid--visible {
  opacity: 1;
}

.contact__item {
  text-align: center;
  padding: 3rem 2rem;
  background: var(--bg-dark);
  border: 2px solid var(--border-color);
  transition: var(--transition);
}

.contact__item:hover {
  border-color: var(--primary-gold);
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(212, 175, 55, 0.2);
}

.contact__icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.contact__item-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--primary-gold);
  margin-bottom: 1rem;
  letter-spacing: 1px;
}

.contact__item-text {
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.6;
}

/* ==================== FOOTER ==================== */
.footer {
  padding: 3rem 0;
  background: var(--bg-dark);
  border-top: 1px solid var(--border-color);
}

.footer__container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 2rem;
}

.footer__brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.footer__logo {
  width: 40px;
  height: 40px;
  color: var(--primary-gold);
}

.footer__brand-text {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-gold);
  letter-spacing: 2px;
}

.footer__social {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.footer__social-label {
  color: var(--text-muted);
  font-size: 0.9rem;
  letter-spacing: 1px;
}

.footer__social-link {
  font-size: 1.5rem;
  text-decoration: none;
  transition: var(--transition);
}

.footer__social-link:hover {
  transform: translateY(-5px) scale(1.2);
}

.footer__bottom {
  text-align: center;
}

.footer__copyright {
  color: var(--text-muted);
  font-size: 0.9rem;
  letter-spacing: 1px;
}

/* ==================== RESPONSIVE ==================== */
@media (max-width: 1024px) {
  .about__container {
    grid-template-columns: 1fr;
    gap: 4rem;
  }

  .about__image {
    height: 400px;
  }

  .menu__categories {
    gap: 1rem;
  }

  .menu__category {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }

  .modal__content {
    grid-template-columns: 1fr;
  }

  .modal__image {
    min-height: 300px;
  }
}

@media (max-width: 768px) {
  .header__nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background: var(--bg-dark);
    flex-direction: column;
    align-items: flex-start;
    padding: 6rem 2rem 2rem;
    gap: 2rem;
    transition: var(--transition);
    border-left: 1px solid var(--border-color);
  }

  .header__nav--open {
    right: 0;
  }

  .header__burger {
    display: flex;
  }

  .hero__title {
    font-size: 3rem;
    letter-spacing: 4px;
  }

  .hero__subtitle {
    font-size: 1.2rem;
  }

  .about__stats {
    grid-template-columns: 1fr;
  }

  .menu__grid {
    grid-template-columns: 1fr;
  }

  .contact__grid {
    grid-template-columns: 1fr;
  }

  .footer__top {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  .gallery__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .header__container {
    padding: 0 1rem;
  }

  .header__logo-text {
    font-size: 1.2rem;
  }

  .header__lang {
    display: none;
  }

  .hero__content {
    padding: 0 1rem;
  }

  .hero__title {
    font-size: 2.5rem;
    letter-spacing: 3px;
  }

  .hero__subtitle {
    font-size: 1rem;
    letter-spacing: 2px;
  }

  .hero__cta {
    padding: 1rem 2rem;
    font-size: 0.95rem;
  }

  .about__title,
  .menu__title,
  .gallery__title,
  .contact__title {
    font-size: 2rem;
  }

  .modal__content {
    padding: 0;
  }

  .modal__info {
    padding: 2rem 1.5rem;
  }

  .modal__title {
    font-size: 1.8rem;
  }
}

@media (min-width: 1920px) {
  .header__container,
  .about__container,
  .menu__container,
  .gallery__container,
  .contact__container,
  .footer__container {
    max-width: 1600px;
  }
}

/* ==================== ACCESSIBILITY ==================== */
:focus-visible {
  outline: 2px solid var(--primary-gold);
  outline-offset: 4px;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* ==================== SCROLLBAR ==================== */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--bg-dark);
}

::-webkit-scrollbar-thumb {
  background: var(--primary-gold);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--accent-gold);
}

/* ==================== PRINT ==================== */
@media print {
  .header,
  .hero__cta,
  .footer__social {
    display: none;
  }
}
        `}</style>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}