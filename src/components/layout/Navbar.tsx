import { Link } from '@tanstack/react-router';
import { Button } from '@blinkdotnew/ui';
import { LayoutGrid, Info, Users, ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-primary/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold leading-none">Tech Clubs</span>
              <span className="text-white/60 text-xs font-medium">Инфо-портал техникума</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="text-white/80 hover:text-white font-medium transition-colors"
              activeProps={{ className: 'text-white' }}
            >
              Главная
            </Link>
            <Link 
              to="/clubs" 
              className="text-white/80 hover:text-white font-medium transition-colors"
              activeProps={{ className: 'text-white' }}
            >
              Все кружки
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="secondary" asChild>
              <Link to="/clubs" className="flex text-white items-center gap-2">
                Выбрать кружок <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
