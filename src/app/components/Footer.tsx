import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-[#50626C]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div
              className="text-white mb-4 tracking-[0.02em]"
              style={{ fontSize: '20px', fontWeight: 700 }}
            >
              ГАЗПРОЕКТИНЖИНИРИНГ
            </div>
            <div
              className="text-white/70"
              style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.6 }}
            >
              Проектирование и производство промышленного оборудования с 2005 года
            </div>
          </div>

          <div>
            <div
              className="text-white/90 mb-3"
              style={{ fontSize: '14px', fontWeight: 600 }}
            >
              Разделы
            </div>
            <div className="space-y-2">
              {[
                { name: 'Главная', path: '/' },
                { name: 'О компании', path: '/about' },
                { name: 'Оборудование', path: '/equipment' },
                { name: 'Производство', path: '/production' },
                { name: 'Контакты', path: '/contacts' }
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-white/60 hover:text-white transition-colors block"
                  style={{ fontSize: '13px', fontWeight: 400 }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div
              className="text-white/90 mb-3"
              style={{ fontSize: '14px', fontWeight: 600 }}
            >
              Контакты
            </div>
            <div className="space-y-2">
              <div
                className="text-white/70 flex items-center gap-2"
                style={{ fontSize: '13px', fontWeight: 400 }}
              >
                <Phone size={14} className="text-white/70" />
                +7 (495) 123-45-67
              </div>
              <div
                className="text-white/70 flex items-center gap-2"
                style={{ fontSize: '13px', fontWeight: 400 }}
              >
                <Mail size={14} className="text-white/70" />
                info@gazproektengineering.ru
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <div
            className="text-white/50"
            style={{ fontSize: '12px', fontWeight: 400 }}
          >
            © 2005–2026 ООО «Газ-Проект Инжиниринг». Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
}