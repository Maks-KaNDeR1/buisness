import { Link } from '@tanstack/react-router';
import { Mail, MessageCircle, GitBranch as GitHubIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-white font-bold text-2xl tracking-tight">Tech Clubs Portal</span>
            </div>
            <p className="text-white/70 max-w-sm mb-6 leading-relaxed">
              Единая платформа для студентов техникума, помогающая найти свое направление в мире технологий и программирования.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <GitHubIcon size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Навигация</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Главная</Link></li>
              <li><Link to="/clubs" className="text-white/70 hover:text-white transition-colors">Список кружков</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Поддержка</h4>
            <ul className="space-y-4">
              <li className="text-white/70">Администрация техникума</li>
              <li className="text-white/70">Кафедра информационных систем</li>
              <li className="text-white/70 text-sm italic opacity-80">ул. Чапаева, 48</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          <p>© 2026 Информационный портал кружков техникума. Все права защищены.</p>
          <p className="mt-2">Разработано в рамках конкурса студенческих проектов.</p>
        </div>
      </div>
    </footer>
  );
}
