import { Cog, Flame, Shield, FlaskConical, Gauge } from 'lucide-react';

export function ProductionSection() {
  const facilities = [
    {
      title: 'ИЗГОТОВИТЕЛЬНЫЕ УЧАСТКИ',
      icon: Cog,
      description: 'Фотографии и видео цехов, описание станочного парка, максимальные габариты и массы заготовок, площадь помещений.',
      details: [
        'Токарные станки с ЧПУ',
        'Фрезерные центры',
        'Расточные станки',
        'Площадь: 4 000 м²',
        'Макс. масса: 50 тонн',
        'Макс. длина: 12 метров',
      ],
    },
    {
      title: 'СВАРОЧНЫЕ ЦЕХА',
      icon: Flame,
      description: 'Фотографии сварочных постов, виды сварки (TIG, MIG/MAG, SAW), аттестации НАКС, типы свариваемых материалов.',
      details: [
        'TIG (аргонодуговая)',
        'MIG/MAG (полуавтомат)',
        'SAW (автоматическая)',
        'Аттестация НАКС',
        'Площадь: 3 000 м²',
        'Сварка нержавеющих сталей',
      ],
    },
    {
      title: 'СЛУЖБА КОНТРОЛЯ КАЧЕСТВА',
      icon: Shield,
      description: 'Входной контроль, неразрушающий контроль (УЗК, РК, ВИК, МК), гидравлические и пневматические испытания, метрология.',
      details: [
        'УЗК (ультразвуковой)',
        'РК (рентгеноконтроль)',
        'ВИК (визуальный)',
        'МК (магнитный)',
        'Гидроиспытания до 50 МПа',
        'Пневмоиспытания',
      ],
    },
    {
      title: 'АСУТП ЦЕХА',
      icon: Gauge,
      description: 'Системы мониторинга, автоматизация контроля параметров, электронный документооборот.',
      details: [
        'Системы мониторинга',
        'Контроль параметров 24/7',
        'Электронный документооборот',
        'Цифровизация процессов',
        'Отслеживание партий',
        'Архив данных',
      ],
    },
    {
      title: 'ИСПЫТАТЕЛЬНЫЕ ЗОНЫ',
      icon: FlaskConical,
      description: 'Испытательные стенды, параметры испытаний (давление, температура), фото гидроиспытаний.',
      details: [
        'Гидравлические стенды',
        'Пневматические стенды',
        'Давление до 60 МПа',
        'Температура до 500°C',
        'Площадь: 2 000 м²',
        'Фото- и видеофиксация',
      ],
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 px-6 bg-gradient-to-b from-[#50626C] to-[#595B5C]">
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className="text-white mb-6 tracking-wide"
            style={{ fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 700, letterSpacing: '0.05em' }}
          >
            ПРОИЗВОДСТВО
          </h1>
          <p
            className="text-white/80 max-w-3xl mx-auto"
            style={{ fontSize: '18px', fontWeight: 300, lineHeight: 1.6 }}
          >
            Визуальное и описательное подтверждение наличия собственного производства.
            12 000 м² современных производственных площадей с полным циклом изготовления.
          </p>
        </div>
      </section>

      {facilities.map((facility, index) => {
        const Icon = facility.icon;
        return (
          <section
            key={index}
            className={`py-24 px-6 ${
              index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-b from-[#F5F5F5] to-white'
            }`}
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#50626C] to-[#8D9DA6] flex items-center justify-center">
                      <Icon className="text-white" size={32} strokeWidth={1.5} />
                    </div>
                    <h2
                      className="text-[#50626C] tracking-wide"
                      style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700, letterSpacing: '0.05em' }}
                    >
                      {facility.title}
                    </h2>
                  </div>

                  <p
                    className="text-[#595B5C] mb-8"
                    style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}
                  >
                    {facility.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {facility.details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2"
                      >
                        <div className="w-2 h-2 mt-2 rounded-full bg-[#8D9DA6] flex-shrink-0" />
                        <div
                          className="text-[#595B5C]"
                          style={{ fontSize: '14px', fontWeight: 400 }}
                        >
                          {detail}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#50626C] to-[#595B5C] relative overflow-hidden shadow-2xl group">
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.6'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      }}
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Icon className="text-white/40 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={80} strokeWidth={1} />
                        <div
                          className="text-white/60"
                          style={{ fontSize: '14px', fontWeight: 600 }}
                        >
                          Фото/видео цеха
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#50626C] via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
