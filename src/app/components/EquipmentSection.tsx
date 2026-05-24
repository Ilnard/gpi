import { RotateCw, Workflow, Wrench, Package, Settings, Cog, ArrowRight, ArrowLeft } from 'lucide-react';

import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function EquipmentSection() {
  const projects = [
    {
      customer: 'Заказчик 1',
      industry: 'Нефтегазовая',
      task: 'Изготовление и поставка теплообменников для установки первичной перегонки нефти',
      solution: 'Разработка и производство теплообменников типа ТН по ГОСТ Р 52857.1-2007, с применением стали 12Х18Н10Т',
      equipment: 'Теплообменники ТН-1500, ТН-2000, ТН-2500',
      year: 2023,
      images: ['rosneft1.jpg', 'rosneft2.jpg']
    },
    {
      customer: 'Заказчик 2',
      industry: 'Химическая',
      task: 'Проектирование и изготовление реакторов для производства синтетического каучука',
      solution: 'Проектирование, расчет на прочность по ASME VIII Div.1, изготовление из стали 09Г2С с многослойной изоляцией',
      equipment: 'Реакторы полимеризации РП-50, РП-100',
      year: 2022,
      images: ['sibur1.jpg', 'sibur2.jpg']
    },
    {
      customer: 'Заказчик 3',
      industry: 'Энергетика',
      task: 'Поставка сепараторов высокого давления для ГРЭС',
      solution: 'Изготовление сепараторов по ТР ТС 032/2013, с полным циклом НДК, включая РК и УЗК',
      equipment: 'Сепараторы СВД-80, СВД-120',
      year: 2024,
      images: ['rushydro1.jpg', 'rushydro2.jpg']
    },
    {
      customer: 'Заказчик 4',
      industry: 'Атомная',
      task: 'Разработка и производство абсорберов для установок изотопного обогащения',
      solution: 'Создание оборудования по спецификациям заказчика с применением инертной сварки и строгим контролем качества',
      equipment: 'Абсорберы АИО-10, АИО-15',
      year: 2021,
      images: ['atomenergoprom1.jpg', 'atomenergoprom2.jpg']
    },
    {
      customer: 'Заказчик 5',
      industry: 'Нефтегазовая',
      task: 'Изготовление колонн ректификации для модернизации НПЗ',
      solution: 'Производство высокотехнологичных колонн с использованием роботизированной сварки и комплексного контроля',
      equipment: 'Колонны КР-30, КР-45',
      year: 2023,
      images: ['lukoil1.jpg', 'lukoil2.jpg']
    }
  ];

  const equipment = [
    {
      name: 'Теплообменники',
      params: 'P: 40 МПа, T: 450°C, Q: 50 м³/ч',
      industries: 'Нефтегазовая, Химическая',
    },
    {
      name: 'Сепараторы',
      params: 'P: 25 МПа, T: 350°C, V: 100 м³',
      industries: 'Нефтегазовая, Энергетика',
    },
    {
      name: 'Реакторы',
      params: 'P: 50 МПа, T: 600°C, V: 200 м³',
      industries: 'Химическая, Атомная',
    },
    {
      name: 'Емкостное оборудование',
      params: 'P: 10 МПа, T: 200°C, V: 500 м³',
      industries: 'Все отрасли',
    },
    {
      name: 'Колонны ректификации',
      params: 'P: 15 МПа, T: 300°C, H: 25 м',
      industries: 'Нефтегазовая, Химическая',
    },
    {
      name: 'Абсорберы',
      params: 'P: 20 МПа, T: 250°C, V: 80 м³',
      industries: 'Химическая, Энергетика',
    },
    {
      name: 'Фильтры',
      params: 'P: 30 МПа, Q: 100 м³/ч',
      industries: 'Все отрасли',
    },
    {
      name: 'Насосное оборудование',
      params: 'P: 35 МПа, Q: 200 м³/ч',
      industries: 'Нефтегазовая, Энергетика',
    },
    {
      name: 'Скрубберы',
      params: 'P: 12 МПа, T: 280°C, V: 60 м³',
      industries: 'Химическая',
    },
    {
      name: 'Трубопроводная арматура',
      params: 'P: 45 МПа, T: 500°C, DN: 1200',
      industries: 'Все отрасли',
    },
  ];

  const competencies = [
    { name: 'Собственный инжиниринг', icon: Workflow, description: 'Разработка конструкторской документации, инженерные расчеты, 3D-моделирование' },
    { name: 'Проектирование', icon: Settings, description: 'Предпроектные работы, подбор оборудования, разработка КД' },
    { name: 'Производство', icon: Cog, description: 'Изготовление на собственных мощностях' },
    { name: 'Поставка', icon: Package, description: 'Логистика, упаковка, доставка на объект' },
    { name: 'Монтаж', icon: Wrench, description: 'Шефмонтаж и монтажные работы на объекте заказчика' },
    { name: 'Сервис', icon: RotateCw, description: 'Гарантийное и постгарантийное обслуживание' },
  ];

  const standards = [
    { name: 'ГОСТ', fullName: 'Российские стандарты' },
    { name: 'ТР ТС', fullName: 'Технический регламент ТС' },
    { name: 'Ростехнадзор', fullName: 'Требования Ростехнадзора' },
    { name: 'ASME', fullName: 'American Society of Mechanical Engineers' },
    { name: 'EN', fullName: 'European Norms' },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 px-6 bg-gradient-to-b from-[#50626C] to-[#595B5C]">
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className="text-white mb-6 tracking-wide"
            style={{ fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 700, letterSpacing: '0.05em' }}
          >
            ОБОРУДОВАНИЕ И КОМПЕТЕНЦИИ
          </h1>
          <p
            className="text-white/80 max-w-3xl mx-auto"
            style={{ fontSize: '18px', fontWeight: 300, lineHeight: 1.6 }}
          >
            Полная номенклатура промышленного оборудования.
            Все изображения основаны на реальных фотографиях производимого оборудования.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-[#50626C] mb-16 text-center tracking-wide"
            style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700, letterSpacing: '0.05em' }}
          >
            КАТАЛОГ ОБОРУДОВАНИЯ
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-[#F5F5F5] border border-[#A7A9AC]/20 hover:border-[#8D9DA6]/60 transition-all duration-300 hover:shadow-xl overflow-hidden group"
              >
                <div className="aspect-square bg-gradient-to-br from-[#8D9DA6] to-[#A7A9AC] relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.8'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <img/>
                  </div>

                </div>

                <div className="p-6">
                  <h3
                    className="text-[#50626C] mb-3"
                    style={{ fontSize: '18px', fontWeight: 600 }}
                  >
                    {item.name}
                  </h3>
                  <div
                    className="text-[#595B5C] mb-3"
                    style={{ fontSize: '13px', fontWeight: 400, lineHeight: 1.5 }}
                  >
                    {item.params}
                  </div>
                  <div
                    className="text-[#8D9DA6]"
                    style={{ fontSize: '12px', fontWeight: 500 }}
                  >
                    {item.industries}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-[#F5F5F5] to-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-[#50626C] mb-16 text-center tracking-wide"
            style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700, letterSpacing: '0.05em' }}
          >
            ПОЛНЫЙ ЦИКЛ КОМПЕТЕНЦИЙ
          </h2>

          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={true}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              className="mySwiper"
              style={{
                '--swiper-navigation-color': '#50626C',
                '--swiper-pagination-color': '#50626C',
              }}
            >
              {competencies.map((comp, index) => {
                const Icon = comp.icon;
                return (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col items-center p-6 bg-gradient-to-br from-white to-[#F5F5F5] border border-[#A7A9AC]/20 hover:border-[#50626C]/40 transition-all duration-300 hover:shadow-lg group min-h-[240px]">
                      <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-[#8D9DA6] to-[#A7A9AC] flex items-center justify-center group-hover:from-[#50626C] group-hover:to-[#595B5C] transition-all duration-300">
                        <Icon className="text-white" size={28} strokeWidth={1.5} />
                      </div>
                      <div
                        className="text-[#50626C] mb-2 text-center"
                        style={{ fontSize: '14px', fontWeight: 600 }}
                      >
                        {comp.name}
                      </div>
                      <div
                        className="text-[#595B5C] text-center"
                        style={{ fontSize: '11px', fontWeight: 400, lineHeight: 1.3 }}
                      >
                        {comp.description}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-[#F5F5F5] to-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-[#50626C] mb-16 text-center tracking-wide"
            style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700, letterSpacing: '0.05em' }}
          >
            РЕАЛИЗОВАННЫЕ ПРОЕКТЫ
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-[#A7A9AC]/20 hover:border-[#50626C]/40 transition-all duration-300 hover:shadow-xl overflow-hidden group"
              >
                <div className="aspect-video bg-gradient-to-br from-[#8D9DA6] to-[#A7A9AC] relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.8'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* <img src={project.images[0]} alt={project.customer} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /> */}
                  </div>

                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span
                      className="px-3 py-1 text-xs font-medium bg-[#50626C] text-white rounded-full"
                    >
                      {project.industry}
                    </span>
                    <span
                      className="px-3 py-1 text-xs font-medium bg-[#8D9DA6] text-white rounded-full"
                    >
                      {project.year}
                    </span>
                  </div>

                  <h3
                    className="text-[#50626C] mb-3"
                    style={{ fontSize: '16px', fontWeight: 600 }}
                  >
                    {project.customer}
                  </h3>

                  <div
                    className="text-[#595B5C] text-sm mb-4"
                    style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.5 }}
                  >
                    <strong>Задача:</strong> {project.task}
                  </div>

                  <div
                    className="text-[#595B5C] text-sm mb-4"
                    style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.5 }}
                  >
                    <strong>Решение:</strong> {project.solution}
                  </div>

                  <div
                    className="text-[#595B5C] text-sm"
                    style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.5 }}
                  >
                    <strong>Оборудование:</strong> {project.equipment}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}