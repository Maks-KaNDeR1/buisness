import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Button } from '@blinkdotnew/ui';
import { 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  ArrowRight,
  Code2,
  ShieldCheck,
  Palette,
  Layers,
  Trophy
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { CLUBS, Club } from '../data/clubs';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = [
  { id: 'all', name: 'Все', icon: <Layers size={18} /> },
  { id: 'programming', name: 'Программирование', icon: <Code2 size={18} /> },
  { id: 'security', name: 'ИБ', icon: <ShieldCheck size={18} /> },
  { id: 'design', name: 'Дизайн', icon: <Palette size={18} /> },
  { id: 'sports', name: 'Спорт', icon: <Trophy size={18} /> },
];

export default function Clubs() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredClubs = CLUBS.filter(club => {
    const matchesCategory = activeCategory === 'all' || club.category === activeCategory;
    const matchesSearch = club.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         club.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-slate-50">
        <section className="bg-white border-b border-border py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-primary mb-6">Все технические кружки</h1>
            <p className="text-muted-foreground max-w-2xl text-lg mb-10">
              Выбери направление, которое тебе по душе. Каждый кружок — это возможность развить навыки и создать крутой проект.
            </p>

            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold transition-all ${
                      activeCategory === cat.id 
                        ? 'bg-primary text-white shadow-md' 
                        : 'bg-slate-100 text-muted-foreground hover:bg-slate-200'
                    }`}
                  >
                    {cat.icon}
                    {cat.name}
                  </button>
                ))}
              </div>

              <div className="relative w-full lg:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type="text"
                  placeholder="Поиск по названию..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-100 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none font-medium"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="popLayout">
              {filteredClubs.length > 0 ? (
                <motion.div 
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredClubs.map((club) => (
                    <motion.div
                      key={club.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={club.image} 
                          alt={club.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-primary shadow-sm uppercase tracking-wider">
                          {CATEGORIES.find(c => c.id === club.category)?.name}
                        </div>
                      </div>
                      <div className="p-8">
                        <h3 className="text-xl font-bold text-primary mb-4 leading-tight group-hover:text-accent transition-colors">
                          {club.name}
                        </h3>
                        <p className="text-muted-foreground mb-6 line-clamp-2 text-sm leading-relaxed">
                          {club.description}
                        </p>
                        
                        <div className="space-y-3 mb-8">
                          <div className="flex items-center gap-3 text-sm text-foreground/80 font-medium">
                            <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-primary">
                              <MapPin size={16} />
                            </div>
                            <span>{club.schedule[0].room}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-foreground/80 font-medium">
                            <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-primary">
                              <Clock size={16} />
                            </div>
                            <span>{club.schedule[0].day}, {club.schedule[0].time}</span>
                          </div>
                        </div>

                        <Button variant="link" className="w-full group/btn font-bold py-6 rounded-2xl text-pink-400" asChild>
                          {/* @ts-ignore */}
                          <Link to="/clubs/$clubId" params={{ clubId: club.id }} className="flex items-center justify-center gap-2">
                            Подробнее <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-20 text-center"
                >
                  <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="text-slate-400" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Ничего не найдено</h3>
                  <p className="text-muted-foreground">Попробуйте изменить параметры поиска или категорию</p>
                  <Button variant="outline" className="mt-8 bg-white" onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}>
                    Сбросить фильтры
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
