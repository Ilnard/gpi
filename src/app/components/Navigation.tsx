import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('RU');
  const location = useLocation();

  const menuItems = [
    { id: 'home', label: 'Главная', path: '/' },
    { id: 'about', label: 'О компании', path: '/about' },
    { id: 'equipment', label: 'Оборудование', path: '/equipment' },
    { id: 'production', label: 'Производство', path: '/production' },
    { id: 'contacts', label: 'Контакты', path: '/contacts' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/' || location.pathname === '/home';
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-[#A7A9AC]/20">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="text-[#50626C] tracking-[0.02em]" style={{ fontWeight: 700, fontSize: '20px' }}>
            ЛОГОТИП
          </div>

          <div className="hidden md:flex items-center gap-10">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`relative transition-colors ${
                  isActive(item.path) ? 'text-[#50626C]' : 'text-[#595B5C] hover:text-[#50626C]'
                }`}
                style={{ fontSize: '16px', fontWeight: isActive(item.path) ? 600 : 400 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute bottom-[-8px] left-0 right-0 h-[2px] bg-[#50626C]" />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {['RU', 'EN', 'CN'].map((lang) => (
              <button
                key={lang}
                disabled={lang !== 'RU'}
                onClick={() => setLanguage(lang)}
                className={`px-3 py-1 transition-colors ${
                  language === lang
                    ? 'bg-[#50626C] text-white'
                    : 'text-[#595B5C] hover:text-[#50626C]'
                } ${lang !== 'RU' ? 'opacity-50 cursor-not-allowed' : ''}`}
                style={{ fontSize: '14px', fontWeight: 500 }}
              >
                {lang}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#50626C] p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#A7A9AC]/20">
          <div className="px-6 py-4 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`block w-full text-left py-2 ${
                  isActive(item.path) ? 'text-[#50626C]' : 'text-[#595B5C]'
                }`}
                style={{ fontSize: '16px', fontWeight: isActive(item.path) ? 600 : 400 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-4">
              {['RU', 'EN', 'CN'].map((lang) => (
                <button
                  key={lang}
                  disabled={lang !== 'RU'}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 transition-colors ${
                    language === lang
                      ? 'bg-[#50626C] text-white'
                      : 'text-[#595B5C]'
                  } ${lang !== 'RU' ? 'opacity-50 cursor-not-allowed' : ''}`}
                  style={{ fontSize: '14px', fontWeight: 500 }}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}