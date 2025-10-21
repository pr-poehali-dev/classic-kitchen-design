import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-black text-white py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Markino Modern Kitchen</h1>
          <p className="text-gray-300 mt-2 text-lg">Классический европейский стиль с современными акцентами</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <Card className="overflow-hidden shadow-2xl animate-fade-in">
          <div className="relative h-[500px] md:h-[600px] overflow-hidden">
            <img 
              src="https://cdn.poehali.dev/projects/9b2eb966-3bce-4e24-957b-fff2071ffc36/files/6919664f-f1bc-4588-ba7e-0cbdf0e0ae43.jpg"
              alt="Классическая кухня Маркино Модерн"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Элегантное очарование Европы</h2>
              <p className="text-lg md:text-xl mb-6 max-w-2xl">
                Откройте для себя вневременную красоту наших кухонь ручной работы, 
                сочетающих традиционный дизайн с современной функциональностью
              </p>
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold">
                Консультация
              </Button>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card className="p-8 hover-scale animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="bg-black text-white p-3 rounded-lg">
                <Icon name="Lightbulb" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Освещение</h3>
                <p className="text-gray-600 mb-4">
                  Элегантные люстры и лампы дневного света создают идеальную атмосферу для готовки и общения
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Люстра классическая</Badge>
                  <Badge variant="secondary">Лампы дневного света</Badge>
                  <Badge variant="secondary">Многоуровневое освещение</Badge>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover-scale animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="bg-black text-white p-3 rounded-lg">
                <Icon name="Flame" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Бытовая техника</h3>
                <p className="text-gray-600 mb-4">
                  Современная техника в серебристом цвете идеально сочетается с чёрным гарнитуром
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Газовая плита</Badge>
                  <Badge variant="secondary">Микроволновка</Badge>
                  <Badge variant="secondary">Стиральная машина</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="mt-12 p-8 bg-black text-white animate-fade-in">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                <Icon name="Box" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Чёрный гарнитур Маркино</h3>
              <p className="text-gray-300">Премиальные шкафы с классическими линиями и современной функциональностью</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                <Icon name="Sparkles" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Мраморные столешницы</h3>
              <p className="text-gray-300">Белый мрамор с натуральными прожилками для элегантного вида</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                <Icon name="Leaf" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Живые акценты</h3>
              <p className="text-gray-300">Цветы в изысканных кашпо создают уют и свежесть</p>
            </div>
          </div>
        </Card>

        <div className="mt-12 grid md:grid-cols-4 gap-6">
          <Card className="p-6 text-center hover-scale animate-fade-in bg-gradient-to-br from-gray-900 to-black text-white">
            <Icon name="Refrigerator" size={40} className="mx-auto mb-3" />
            <h4 className="font-bold text-lg">Холодильник</h4>
            <p className="text-sm text-gray-300 mt-2">Встроенный серебристый</p>
          </Card>
          <Card className="p-6 text-center hover-scale animate-fade-in bg-gradient-to-br from-gray-900 to-black text-white">
            <Icon name="Waves" size={40} className="mx-auto mb-3" />
            <h4 className="font-bold text-lg">Микроволновка</h4>
            <p className="text-sm text-gray-300 mt-2">Встроенная в колонну</p>
          </Card>
          <Card className="p-6 text-center hover-scale animate-fade-in bg-gradient-to-br from-gray-900 to-black text-white">
            <Icon name="Flame" size={40} className="mx-auto mb-3" />
            <h4 className="font-bold text-lg">Газовая плита</h4>
            <p className="text-sm text-gray-300 mt-2">4 конфорки, духовка</p>
          </Card>
          <Card className="p-6 text-center hover-scale animate-fade-in bg-gradient-to-br from-gray-900 to-black text-white">
            <Icon name="Wind" size={40} className="mx-auto mb-3" />
            <h4 className="font-bold text-lg">Стиралка</h4>
            <p className="text-sm text-gray-300 mt-2">Встроенная модель</p>
          </Card>
        </div>

        <Card className="mt-12 p-10 text-center bg-gradient-to-r from-gray-100 to-white animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы создать кухню мечты?</h2>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
            Свяжитесь с нами для консультации по дизайну и индивидуальной разработке вашей идеальной кухни
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              <Icon name="Phone" size={20} className="mr-2" />
              Консультация
            </Button>
            <Button size="lg" variant="outline" className="border-black text-black hover:bg-gray-100">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Узнать больше
            </Button>
          </div>
        </Card>
      </main>

      <footer className="bg-black text-white py-8 px-4 md:px-8 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2024 Markino Modern Kitchen. Классический европейский стиль.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
