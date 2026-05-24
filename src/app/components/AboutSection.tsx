import { Users, Shield, MapPin, Award } from 'lucide-react';

export function AboutSection() {
  const timeline = [
    { year: '2005', event: 'Основание предприятия' },
    { year: '2010', event: 'Расширение производства' },
    { year: '2015', event: 'Получение лицензий Ростехнадзора' },
    { year: '2018', event: 'Запуск нового сварочного цеха' },
    { year: '2022', event: 'Сертификация по ASME' },
    { year: '2026', event: 'Внедрение системы контроля качества' },
  ];

  const certificates = [
    'Лицензия Ростехнадзора',
    'Аттестация НАКС',
    'Свидетельство СРО',
    'Сертификат ГОСТ',
    'Сертификат ТР ТС',
    'Сертификат ASME',
  ];

  const regions = [
    'Москва и МО',
    'Санкт-Петербург',
    'Сибирь',
    'Урал',
    'Дальний Восток',
    'Казахстан',
  ];

  return (
    <div className="pt-20">
      <section className="py-24 px-6 bg-gradient-to-b from-[#50626C] to-[#595B5C]">
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className="text-white mb-6 tracking-wide"
            style={{ fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 700, letterSpacing: '0.05em' }}
          >
            О КОМПАНИИ
          </h1>
          <p
            className="text-white/80 max-w-3xl mx-auto"
            style={{ fontSize: '18px', fontWeight: 300, lineHeight: 1.6 }}
          >
            ООО «Газ-Проект Инжиниринг» — российское машиностроительное предприятие полного цикла.
            Проектируем, производим и поставляем промышленное оборудование для нефтегазовой, химической,
            атомной и энергетической отраслей.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-[#50626C] mb-16 text-center tracking-wide"
            style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700, letterSpacing: '0.05em' }}
          >
            ИСТОРИЯ ПРЕДПРИЯТИЯ
          </h2>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#8D9DA6] via-[#A7A9AC] to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <div
                      className="text-[#50626C] mb-2"
                      style={{ fontSize: '28px', fontWeight: 700 }}
                    >
                      {item.year}
                    </div>
                    <div
                      className="text-[#595B5C]"
                      style={{ fontSize: '16px', fontWeight: 400 }}
                    >
                      {item.event}
                    </div>
                  </div>

                  <div className="hidden md:block w-4 h-4 rounded-full bg-[#50626C] border-4 border-white shadow-lg relative z-10" />

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-[#F5F5F5] to-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-[#50626C] mb-4 text-center tracking-wide"
            style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700, letterSpacing: '0.05em' }}
          >
            КОМАНДА И СПЕЦИАЛИСТЫ
          </h2>

          <p className="text-center text-[#595B5C] mb-16" style={{ fontSize: '16px', fontWeight: 400 }}>
            Структура коллектива
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { count: '50+', label: 'Инженеры и конструкторы', icon: Users },
              { count: '80+', label: 'Рабочие производства', icon: Award },
              { count: '20+', label: 'Административный персонал', icon: Shield },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-gradient-to-br from-white to-[#F5F5F5] border border-[#A7A9AC]/20 hover:border-[#8D9DA6]/40 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#8D9DA6] to-[#A7A9AC] flex items-center justify-center">
                    <Icon className="text-white" size={32} strokeWidth={1.5} />
                  </div>
                  <div
                    className="text-[#50626C] mb-2"
                    style={{ fontSize: '32px', fontWeight: 700 }}
                  >
                    {item.count}
                  </div>
                  <div
                    className="text-[#595B5C]"
                    style={{ fontSize: '14px', fontWeight: 400 }}
                  >
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-[#50626C] mb-16 text-center tracking-wide"
            style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700, letterSpacing: '0.05em' }}
          >
            СЕРТИФИКАТЫ И ЛИЦЕНЗИИ
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="aspect-[3/4] bg-gradient-to-br from-[#F5F5F5] to-white border-2 border-[#A7A9AC]/30 hover:border-[#50626C]/60 transition-all duration-300 hover:shadow-xl cursor-pointer flex items-center justify-center p-4"
              >
                <div className="text-center">
                  <Shield className="text-[#8D9DA6] mx-auto mb-3" size={40} strokeWidth={1.5} />
                  <div
                    className="text-[#595B5C]"
                    style={{ fontSize: '12px', fontWeight: 500, lineHeight: 1.3 }}
                  >
                    {cert}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[#A7A9AC] mt-8 italic" style={{ fontSize: '14px' }}>
            Нажмите на сертификат для просмотра скана документа
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-[#F5F5F5] to-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-[#50626C] mb-16 text-center tracking-wide"
            style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700, letterSpacing: '0.05em' }}
          >
            ГЕОГРАФИЯ ДЕЯТЕЛЬНОСТИ
          </h2>

          <div className="aspect-video bg-gradient-to-br from-[#50626C] to-[#8D9DA6] relative rounded-sm overflow-hidden mb-12 shadow-2xl">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-white mx-auto mb-4" size={64} strokeWidth={1.5} />
                <div
                  className="text-white"
                  style={{ fontSize: '24px', fontWeight: 600 }}
                >
                  Интерактивная карта с точками поставок
                </div>
              </div>
            </div>

            {[
              { top: '30%', left: '40%' },
              { top: '45%', left: '60%' },
              { top: '50%', left: '75%' },
              { top: '60%', left: '50%' },
              { top: '35%', left: '70%' },
            ].map((pos, index) => (
              <div
                key={index}
                className="absolute w-3 h-3 rounded-full bg-white animate-pulse"
                style={{ top: pos.top, left: pos.left }}
              >
                <div className="absolute inset-0 rounded-full bg-white/40 animate-ping" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {regions.map((region, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white border border-[#A7A9AC]/20 hover:border-[#8D9DA6]/60 transition-all duration-300"
              >
                <div
                  className="text-[#595B5C]"
                  style={{ fontSize: '14px', fontWeight: 600 }}
                >
                  {region}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
