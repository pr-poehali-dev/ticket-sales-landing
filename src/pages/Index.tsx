import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const popularRoutes = [
    { from: 'Москва', to: 'Санкт-Петербург', price: '2500₽', time: '4ч', color: 'bg-primary' },
    { from: 'Москва', to: 'Казань', price: '3200₽', time: '11ч', color: 'bg-secondary' },
    { from: 'Санкт-Петербург', to: 'Москва', price: '2500₽', time: '4ч', color: 'bg-primary' },
    { from: 'Москва', to: 'Нижний Новгород', price: '1800₽', time: '4ч', color: 'bg-accent' },
    { from: 'Москва', to: 'Сочи', price: '5500₽', time: '24ч', color: 'bg-secondary' },
    { from: 'Екатеринбург', to: 'Москва', price: '4200₽', time: '26ч', color: 'bg-accent' },
  ];

  const benefits = [
    { icon: 'Zap', title: 'Быстрое бронирование', description: 'Покупка билета за 2 минуты без очередей' },
    { icon: 'Shield', title: 'Безопасные платежи', description: 'Защищенные транзакции и возврат средств' },
    { icon: 'Clock', title: 'Онлайн-регистрация', description: 'Электронный билет на почту и в приложение' },
    { icon: 'Percent', title: 'Выгодные цены', description: 'Скидки и бонусы постоянным клиентам' },
  ];

  const tariffs = [
    { name: 'Плацкарт', price: 'от 1500₽', features: ['Открытый вагон', 'Постельное белье', 'Розетки'], popular: false },
    { name: 'Купе', price: 'от 2500₽', features: ['Закрытое купе', 'Кондиционер', 'Постельное белье', 'Wi-Fi'], popular: true },
    { name: 'СВ', price: 'от 5000₽', features: ['Люкс класс', 'Душ в вагоне', 'Питание', 'Премиум-сервис'], popular: false },
  ];

  const reviews = [
    { name: 'Анна Петрова', text: 'Очень удобный сервис! Купила билеты за пару минут, все интуитивно понятно.', rating: 5 },
    { name: 'Дмитрий Иванов', text: 'Отличные цены и быстрая доставка электронных билетов. Рекомендую!', rating: 5 },
    { name: 'Елена Смирнова', text: 'Пользуюсь постоянно для поездок по работе. Никаких проблем не возникало.', rating: 5 },
  ];

  const faq = [
    { question: 'Как купить билет?', answer: 'Выберите маршрут, дату и время поездки, затем оформите заказ и оплатите онлайн. Электронный билет придет на email.' },
    { question: 'Можно ли вернуть билет?', answer: 'Да, билет можно вернуть не позднее чем за 1 час до отправления поезда. Возврат производится за вычетом комиссии.' },
    { question: 'Какие способы оплаты доступны?', answer: 'Принимаем карты Visa, MasterCard, МИР, а также оплату через СБП и электронные кошельки.' },
    { question: 'Нужно ли распечатывать билет?', answer: 'Нет, электронный билет можно показать с экрана телефона. При посадке понадобится паспорт.' },
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Train" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">РЖД Билеты</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#search" className="hover:text-primary transition-colors">Поиск</a>
            <a href="#routes" className="hover:text-primary transition-colors">Маршруты</a>
            <a href="#benefits" className="hover:text-primary transition-colors">Преимущества</a>
            <a href="#tariffs" className="hover:text-primary transition-colors">Тарифы</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <div className="hidden md:block">
            <Button>Войти</Button>
          </div>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" size={28} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                <a 
                  href="#search" 
                  className="text-lg hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Поиск
                </a>
                <a 
                  href="#routes" 
                  className="text-lg hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Маршруты
                </a>
                <a 
                  href="#benefits" 
                  className="text-lg hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Преимущества
                </a>
                <a 
                  href="#tariffs" 
                  className="text-lg hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Тарифы
                </a>
                <a 
                  href="#reviews" 
                  className="text-lg hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Отзывы
                </a>
                <a 
                  href="#faq" 
                  className="text-lg hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </a>
                <a 
                  href="#contacts" 
                  className="text-lg hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Контакты
                </a>
                <Button className="mt-4" onClick={() => setMobileMenuOpen(false)}>Войти</Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </header>

      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Путешествуйте по России с комфортом
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Быстрое бронирование железнодорожных билетов онлайн. Более 1000 направлений по всей стране.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg px-8">
                  Найти билеты
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/9a2623c2-9264-46a1-bf86-0082787ec3ac/files/121578ea-425e-4a8e-af24-56df022722b3.jpg" 
                alt="Современный поезд" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="search" className="py-16 -mt-12">
        <div className="container mx-auto px-4">
          <Card className="shadow-2xl animate-fade-in">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Откуда</label>
                  <Input placeholder="Москва" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Куда</label>
                  <Input placeholder="Санкт-Петербург" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Дата</label>
                  <Input type="date" className="h-12" />
                </div>
                <div className="flex items-end">
                  <Button className="w-full h-12 text-lg">
                    <Icon name="Search" className="mr-2" size={20} />
                    Найти
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="routes" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 scroll-animate opacity-0">
            <h2 className="text-4xl font-bold mb-4">Популярные маршруты</h2>
            <p className="text-xl text-muted-foreground">Интерактивная карта направлений</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {popularRoutes.map((route, index) => (
              <Card 
                key={index}
                className={`cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1 animate-fade-in ${
                  selectedRoute === `${route.from}-${route.to}` ? 'ring-2 ring-primary' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedRoute(`${route.from}-${route.to}`)}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-3 h-3 rounded-full ${route.color}`}></div>
                    <CardTitle className="text-lg">{route.from} → {route.to}</CardTitle>
                  </div>
                  <CardDescription>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" size={16} />
                        <span>{route.time}</span>
                      </div>
                      <div className="text-xl font-bold text-primary">{route.price}</div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    Выбрать
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <svg viewBox="0 0 800 400" className="w-full">
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#0EA5E9" />
                    </marker>
                  </defs>
                  
                  <circle cx="200" cy="200" r="8" fill="#0EA5E9" />
                  <text x="200" y="230" textAnchor="middle" className="text-sm font-medium">Москва</text>
                  
                  <circle cx="400" cy="150" r="8" fill="#0EA5E9" />
                  <text x="400" y="140" textAnchor="middle" className="text-sm font-medium">Санкт-Петербург</text>
                  
                  <circle cx="500" cy="250" r="8" fill="#F97316" />
                  <text x="500" y="240" textAnchor="middle" className="text-sm font-medium">Казань</text>
                  
                  <circle cx="350" cy="300" r="8" fill="#8B5CF6" />
                  <text x="350" y="330" textAnchor="middle" className="text-sm font-medium">Н.Новгород</text>
                  
                  <circle cx="200" cy="350" r="8" fill="#F97316" />
                  <text x="200" y="380" textAnchor="middle" className="text-sm font-medium">Сочи</text>
                  
                  <circle cx="600" cy="200" r="8" fill="#8B5CF6" />
                  <text x="600" y="230" textAnchor="middle" className="text-sm font-medium">Екатеринбург</text>
                  
                  <line x1="200" y1="200" x2="395" y2="155" stroke="#0EA5E9" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <line x1="200" y1="200" x2="495" y2="245" stroke="#F97316" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <line x1="200" y1="200" x2="345" y2="295" stroke="#8B5CF6" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <line x1="200" y1="200" x2="200" y2="345" stroke="#F97316" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <line x1="200" y1="200" x2="595" y2="200" stroke="#8B5CF6" strokeWidth="2" markerEnd="url(#arrowhead)" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">География маршрутов</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="text-sm">Скоростные поезда (до 4 часов)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    <span className="text-sm">Междугородние (4-12 часов)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                    <span className="text-sm">Дальные маршруты (12+ часов)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 scroll-animate opacity-0">
            <h2 className="text-4xl font-bold mb-4">Наши преимущества</h2>
            <p className="text-xl text-muted-foreground">Почему выбирают нас</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={benefit.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tariffs" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 scroll-animate opacity-0">
            <h2 className="text-4xl font-bold mb-4">Тарифы и классы обслуживания</h2>
            <p className="text-xl text-muted-foreground">Выберите подходящий уровень комфорта</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tariffs.map((tariff, index) => (
              <Card key={index} className={`relative hover:shadow-2xl transition-all hover:-translate-y-2 animate-fade-in ${tariff.popular ? 'ring-2 ring-secondary' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                {tariff.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-medium">Популярный</span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tariff.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-primary mt-2">{tariff.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tariff.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon name="Check" className="text-green-500" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={tariff.popular ? 'default' : 'outline'}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 scroll-animate opacity-0">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12 scroll-animate opacity-0">
            <h2 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-muted-foreground">Ответы на популярные вопросы</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6 border-none animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <AccordionTrigger className="text-lg font-medium hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 scroll-animate opacity-0">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center animate-fade-in">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Phone" className="text-primary" size={32} />
                </div>
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">8 (800) 555-35-35</p>
                <p className="text-sm text-muted-foreground">Круглосуточно</p>
              </CardContent>
            </Card>
            <Card className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Mail" className="text-primary" size={32} />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">info@rzd-tickets.ru</p>
                <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
              </CardContent>
            </Card>
            <Card className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="MessageCircle" className="text-primary" size={32} />
                </div>
                <CardTitle>Онлайн-чат</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">Чат поддержки</p>
                <p className="text-sm text-muted-foreground">Онлайн 24/7</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Train" size={28} />
                <span className="text-xl font-bold">РЖД Билеты</span>
              </div>
              <p className="text-sm opacity-80">Удобный сервис покупки железнодорожных билетов онлайн</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#search" className="hover:opacity-100 transition-opacity">Поиск билетов</a></li>
                <li><a href="#routes" className="hover:opacity-100 transition-opacity">Маршруты</a></li>
                <li><a href="#benefits" className="hover:opacity-100 transition-opacity">Преимущества</a></li>
                <li><a href="#tariffs" className="hover:opacity-100 transition-opacity">Тарифы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">О компании</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Правила возврата</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Политика конфиденциальности</a></li>
                <li><a href="#faq" className="hover:opacity-100 transition-opacity">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:opacity-100 transition-opacity opacity-80">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="hover:opacity-100 transition-opacity opacity-80">
                  <Icon name="Twitter" size={24} />
                </a>
                <a href="#" className="hover:opacity-100 transition-opacity opacity-80">
                  <Icon name="Instagram" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
            <p>© 2024 РЖД Билеты. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;