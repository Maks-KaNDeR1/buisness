import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@blinkdotnew/ui';
import { 
  User, 
  Users, 
  Mail, 
  GraduationCap, 
  Info, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Send
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';

const formSchema = z.object({
  fullName: z.string().min(5, 'Минимум 5 символов'),
  group: z.string().min(2, 'Укажите группу'),
  course: z.string().min(1, 'Укажите курс'),
  participationType: z.enum(['individual', 'team']),
  teamMembers: z.string().optional(),
  selectedClub: z.string().min(1, 'Выберите кружок'),
});

type FormData = z.infer<typeof formSchema>;

export default function Registration() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      participationType: 'individual'
    }
  });

  const participationType = watch('participationType');

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form data:', data);
    setIsSubmitted(true);
    toast.success('Заявка успешно отправлена!');
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Регистрация на кружок</h1>
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-xl border border-border"
              >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  {/* Basic Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary flex items-center gap-2">
                        <User size={16} className="text-accent" /> ФИО участника
                      </label>
                      <input
                        {...register('fullName')}
                      style={{color: "#111"}}
                        className={`w-full px-5 py-4 bg-slate-50 rounded-2xl border ${errors.fullName ? 'border-destructive' : 'border-transparent focus:border-primary'} outline-none transition-all font-medium`}
                        placeholder="Иванов Иван Иванович"
                      />
                      {errors.fullName && <p className="text-xs text-destructive font-bold">{errors.fullName.message}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-primary flex items-center gap-2">
                          <Users size={16} className="text-accent" /> Группа
                        </label>
                        <input
                          {...register('group')}
                      style={{color: "#111"}}
                          className={`w-full px-5 py-4 bg-slate-50 rounded-2xl border ${errors.group ? 'border-destructive' : 'border-transparent focus:border-primary'} outline-none transition-all font-medium`}
                          placeholder="ИС-21"
                        />
                        {errors.group && <p className="text-xs text-destructive font-bold">{errors.group.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-primary flex items-center gap-2">
                          <GraduationCap size={16} className="text-accent" /> Курс
                        </label>
                        <select
                          {...register('course')}
                      style={{color: "#111"}}
                          className="w-full px-5 py-4 bg-slate-50 rounded-2xl border border-transparent focus:border-primary outline-none transition-all font-medium appearance-none"
                        >
                          <option value="1">1 курс</option>
                          <option value="2">2 курс</option>
                          <option value="3">3 курс</option>
                          <option value="4">4 курс</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {participationType === 'team' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-2"
                    >
                      <label className="text-sm font-bold text-primary flex items-center gap-2">
                        <Users size={16} className="text-accent" /> Состав команды
                      </label>
                      <textarea
                        {...register('teamMembers')}
                        className="w-full px-5 py-4 bg-slate-50 rounded-2xl border border-transparent focus:border-primary outline-none transition-all font-medium h-32 resize-none"
                        placeholder="Укажите ФИО и группу остальных участников..."
                      />
                    </motion.div>
                  )}

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary flex items-center gap-2">
                      <Info size={16} className="text-accent" /> Выбранный кружок
                    </label>
                    <select
                      {...register('selectedClub')}
                      style={{color: "#111"}}
                      className={`w-full px-5 py-4 bg-slate-50 rounded-2xl border ${errors.selectedClub ? 'border-destructive' : 'border-transparent focus:border-primary'} outline-none transition-all font-medium appearance-none`}
                    >
                      <option value="">Выберите кружок...</option>
                      <option value="all">Общий портал кружков (все направления)</option>
                      <option value="dev-force">DevForce: Веб-разработка</option>
                      <option value="cyber-shield">CyberShield: Кибербезопасность</option>
                      <option value="tennis">Секция настольного тенниса</option>
                      <option value="arm">Секция армрестлинга</option>
                      <option value="pixel-art">PixelArt: Дизайн</option>
                    </select>
                    {errors.selectedClub && <p className="text-xs text-destructive font-bold">{errors.selectedClub.message}</p>}
                  </div>

                  <div className="pt-6">
                    <Button 
                      type="submit" 
                      variant="secondary" 
                      className="w-full h-16 text-xl font-bold rounded-2xl shadow-lg shadow-primary/20 flex items-center justify-center gap-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>Отправить заявку <Send size={20} /></>
                      )}
                    </Button>
                  </div>

                  <p className="text-center text-xs text-muted-foreground font-medium flex items-center justify-center gap-2">
                    <ShieldCheck size={14} className="text-green-500" /> Ваши данные защищены и будут использованы только для организации конкурса.
                  </p>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-16 rounded-[2.5rem] shadow-xl border border-border text-center"
              >
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">Заявка принята!</h2>
                <p className="text-xl text-muted-foreground mb-12 max-w-lg mx-auto leading-relaxed">
                  Спасибо за регистрацию. Информация передана в оргкомитет. Готовьте проект к защите до 14 мая 2026 года.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="secondary" size="lg" asChild className="h-14 px-10 font-bold">
                    <a href="/">На главную</a>
                  </Button>
                  <Button variant="outline" size="lg" className="h-14 px-10 font-bold" onClick={() => setIsSubmitted(false)}>
                    Подать еще одну
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </>
  );
}
