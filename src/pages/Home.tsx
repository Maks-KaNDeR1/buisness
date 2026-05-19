import { Link } from '@tanstack/react-router';
import { Button } from '@blinkdotnew/ui';
import { 
  Rocket, 
  Target, 
  Zap, 
  Trophy, 
  ArrowRight, 
  CheckCircle2,
  ChevronRight,
  Code2,
  ShieldCheck,
  Palette,
  Dumbbell
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50">
          <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary rounded-full text-secondary-foreground text-sm font-bold mb-6">
                  <Zap size={14} className="fill-current" />
                  <span>Открой новые возможности</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-primary mb-8 leading-[1.1]">
                  Твоё будущее начинается <span className="text-accent underline decoration-accent/30 decoration-8 underline-offset-8">здесь</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg">
                  Информационный портал технических кружков техникума. Найди единомышленников, освой востребованные навыки и начни свой путь в ИТ уже сегодня.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" size="lg" asChild className="h-14 px-8 text-lg font-bold bg-white text-slate-900">
                    <Link to="/clubs" className="flex items-center gap-2">
                      Выбрать кружок <ArrowRight size={20} />
                    </Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative z-10 bg-white p-4 rounded-2xl shadow-2xl border border-border overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000" 
                    alt="Students working" 
                    className="rounded-xl object-cover aspect-video transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <p className="text-white text-xl font-bold">Реальные проекты и практика</p>
                    <p className="text-white/80">Обучение через создание продуктов</p>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4">Направления подготовки</h2>
              <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Code2 size={32} />, title: 'Программирование', color: 'bg-blue-50 text-blue-600' },
                { icon: <ShieldCheck size={32} />, title: 'Кибербезопасность', color: 'bg-green-50 text-green-600' },
                { icon: <Palette size={32} />, title: 'Дизайн', color: 'bg-purple-50 text-purple-600' },
                { icon: <Dumbbell size={32} />, title: 'Спорт', color: 'bg-orange-50 text-orange-600' },
              ].map((cat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="p-8 bg-slate-50 rounded-2xl border border-border flex flex-col items-center text-center transition-shadow hover:shadow-xl hover:bg-white"
                >
                  <div className={`w-16 h-16 rounded-xl ${cat.color} flex items-center justify-center mb-6`}>
                    {cat.icon}
                  </div>
                  <h3 className="font-bold text-primary text-lg">{cat.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-primary text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 skew-x-12 transform origin-right" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">Почему стоит вступить в кружок?</h2>
                <div className="space-y-8">
                  {[
                    { 
                      icon: <Target className="text-accent" />, 
                      title: 'Практический опыт', 
                      desc: 'Мы не просто учим теорию, а создаем работающие прототипы и приложения, которые можно положить в портфолио.' 
                    },
                    { 
                      icon: <Rocket className="text-accent" />, 
                      title: 'Ускоренный рост', 
                      desc: 'В кружках ты осваиваешь программу 2-3 курсов уже на первом году обучения за счет интенсивной практики.' 
                    },
                    { 
                      icon: <Trophy className="text-accent" />, 
                      title: 'Победы в конкурсах', 
                      desc: 'Наши участники регулярно занимают призовые места на хакатонах и профессиональных олимпиадах.' 
                    }
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex gap-6 items-start group">
                      <div className="shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                        <p className="text-white/70 leading-relaxed">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl relative z-10">
                  <h3 className="text-2xl font-bold mb-8 text-center underline decoration-accent decoration-4">Статистика достижений</h3>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <p className="text-5xl font-black text-accent mb-2">50+</p>
                      <p className="text-white/60 font-medium">Реальных проектов</p>
                    </div>
                    <div className="text-center">
                      <p className="text-5xl font-black text-accent mb-2">12</p>
                      <p className="text-white/60 font-medium">Золотых наград</p>
                    </div>
                    <div className="text-center">
                      <p className="text-5xl font-black text-accent mb-2">300+</p>
                      <p className="text-white/60 font-medium">Активных студентов</p>
                    </div>
                    <div className="text-center">
                      <p className="text-5xl font-black text-accent mb-2">100%</p>
                      <p className="text-white/60 font-medium">Трудоустройство</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent rounded-full opacity-20 blur-3xl animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-secondary rounded-[2rem] p-12 lg:p-20 text-center relative overflow-hidden border border-border shadow-inner">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
              <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-8 relative z-10">Готов стать частью <br /> технологического будущего?</h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed">
                Запишись в кружок уже сегодня и начни работать над проектами своей мечты вместе с нами.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                <Button variant="outline" size="lg" asChild className="h-16 px-10 text-xl font-bold bg-white text-slate-900">
                  <Link to="/clubs">Смотреть все кружки</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
