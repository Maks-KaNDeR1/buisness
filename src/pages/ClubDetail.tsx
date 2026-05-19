import { useParams, Link } from '@tanstack/react-router';
import { Button } from '@blinkdotnew/ui';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Users, 
  CheckCircle2, 
  Mail, 
  MessageCircle,
  Share2,
  Calendar,
  User,
  ExternalLink
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { CLUBS } from '../data/clubs';
import { motion } from 'framer-motion';

export default function ClubDetail() {
  const { clubId } = useParams({ from: '/clubs/$clubId' });
  const club = CLUBS.find(c => c.id === clubId);

  if (!club) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Кружок не найден</h1>
          <Button asChild>
            <Link to="/clubs">Вернуться к списку</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-slate-50">
        <section className="bg-primary text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link to="/clubs" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors group">
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
              <span>Назад к списку</span>
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 bg-accent rounded-full text-white text-xs font-bold uppercase tracking-widest mb-6">
                  {club.category}
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">{club.name}</h1>
                <p className="text-xl text-white/80 leading-relaxed max-w-xl">
                  {club.description}
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="hidden lg:block"
              >
                <div className="aspect-video rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
                  <img src={club.image} alt={club.name} className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-accent rounded-full" />
                    О кружке
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {club.longDescription}
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
                    <span className="w-2 h-8 bg-accent rounded-full" />
                    Преимущества участия
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {club.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex gap-4 p-6 bg-white rounded-2xl border border-border hover:border-accent/30 transition-colors group">
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                          <CheckCircle2 size={20} />
                        </div>
                        <span className="font-bold text-foreground/80 leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
                    <span className="w-2 h-8 bg-accent rounded-full" />
                    Расписание занятий
                  </h2>
                  <div className="bg-white rounded-3xl border border-border overflow-hidden shadow-sm">
                    <table className="w-full">
                      <thead className="bg-slate-50 border-b border-border">
                        <tr>
                          <th className="px-8 py-5 text-left text-sm font-bold text-primary uppercase tracking-wider">День</th>
                          <th className="px-8 py-5 text-left text-sm font-bold text-primary uppercase tracking-wider">Время</th>
                          <th className="px-8 py-5 text-left text-sm font-bold text-primary uppercase tracking-wider">Аудитория</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {club.schedule.map((item, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-8 py-6 font-bold text-foreground">{item.day}</td>
                            <td className="px-8 py-6 font-medium text-muted-foreground">{item.time}</td>
                            <td className="px-8 py-6">
                              <span className="inline-flex items-center gap-2 px-3 py-1 bg-secondary rounded-lg text-primary text-sm font-bold">
                                <MapPin size={14} /> {item.room}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-3xl border-2 border-primary shadow-xl sticky top-24">
                  <h3 className="text-2xl font-bold text-primary mb-6">Записаться в кружок</h3>
                  <p className="text-muted-foreground mb-8 text-sm font-medium">
                    Заполни форму, и куратор свяжется с тобой для подтверждения участия.
                  </p>
                  <Button variant="secondary" className="w-full h-14 text-white text-lg font-bold mb-4" asChild>
                    <Link to="/register">Подать заявку</Link>
                  </Button>
                  <p className="text-center text-xs text-muted-foreground font-medium">
                    Бесплатно для всех студентов техникума
                  </p>
                  
                  <div className="mt-10 pt-8 border-t border-border">
                    <h4 className="font-bold text-primary mb-6 flex items-center gap-2">
                      <User size={18} className="text-accent" /> Куратор
                    </h4>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center font-bold text-primary text-xl">
                        {club.leader.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-bold text-primary leading-tight">{club.leader.name}</p>
                        <p className="text-xs text-muted-foreground font-medium">{club.leader.role}</p>
                      </div>
                    </div>

                    <h4 className="font-bold text-primary mb-6 flex items-center gap-2">
                      <ExternalLink size={18} className="text-accent" /> Контакты
                    </h4>
                    <div className="space-y-4">
                      {club.contacts.email && (
                        <a href={`mailto:${club.contacts.email}`} className="flex items-center gap-3 text-sm font-bold text-foreground/80 hover:text-primary transition-colors">
                          <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                            <Mail size={16} />
                          </div>
                          {club.contacts.email}
                        </a>
                      )}
                      {club.contacts.telegram && (
                        <a href="#" className="flex items-center gap-3 text-sm font-bold text-foreground/80 hover:text-primary transition-colors">
                          <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                            <MessageCircle size={16} />
                          </div>
                          {club.contacts.telegram}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
