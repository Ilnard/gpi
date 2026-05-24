export function AdvantagesSection() {
  const stats = [
    { value: '12 000 м²', label: 'Площадь производства' },
    { value: '200+', label: 'Реализованных проектов' },
    { value: 'с 2005', label: 'Год основания' },
    { value: '150+', label: 'Сотрудников' },
    { value: 'Собственное', label: 'Конструкторское бюро' },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-3 bg-gradient-to-br from-[#A7A9AC]/10 to-white rounded-sm border border-[#A7A9AC]/20 hover:border-[#8D9DA6]/40 transition-all duration-300 hover:shadow-lg"
            >
              <div
                className="text-[#50626C] mb-3"
                style={{ fontSize: 'clamp(14px, 4vw, 26px)', fontWeight: 700, letterSpacing: '-0.02em' }}
              >
                {stat.value}
              </div>
              <div
                className="text-[#595B5C]"
                style={{ fontSize: 'clamp(10px, 4vw, 14px)', fontWeight: 400, lineHeight: 1.4 }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
