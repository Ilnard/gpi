export function ProductionPreview() {
  const workshops = [
    { name: 'Механообработка', description: 'Токарные и фрезерные операции' },
    { name: 'Сварочный цех', description: 'TIG, MIG/MAG, SAW сварка' },
    { name: 'Контроль качества', description: 'УЗК, РК, ВИК, МК испытания' },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-[#50626C] mb-4 text-center tracking-wide"
          style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700, letterSpacing: '0.05em' }}
        >
          ПРОИЗВОДСТВЕННЫЕ МОЩНОСТИ
        </h2>

        <p className="text-center text-[#595B5C] mb-16" style={{ fontSize: '16px', fontWeight: 400 }}>
          Полный цикл производства на собственных мощностях
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#50626C] to-[#595B5C] aspect-[4/3] relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.6'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#50626C] via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="h-1 w-16 bg-[#8D9DA6] mb-4 group-hover:w-24 transition-all duration-300" />
                <h3
                  className="text-white mb-2"
                  style={{ fontSize: '20px', fontWeight: 600 }}
                >
                  {workshop.name}
                </h3>
                <p
                  className="text-white/80"
                  style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.5 }}
                >
                  {workshop.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
