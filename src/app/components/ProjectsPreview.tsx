export function ProjectsPreview() {
  const clients = [
    'Заказчик 1',
    'Заказчик 2',
    'Заказчик 3',
    'Заказчик 4',
    'Заказчик 5',
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#F5F5F5] to-white">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-[#50626C] mb-4 text-center tracking-wide"
          style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700, letterSpacing: '0.05em' }}
        >
          РЕАЛИЗОВАННЫЕ ПРОЕКТЫ
        </h2>

        <p className="text-center text-[#595B5C] mb-16" style={{ fontSize: '16px', fontWeight: 400 }}>
          Ключевые заказчики и партнеры
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {clients.map((client) => (
            <div
              key={client}
              className="aspect-video bg-gradient-to-br from-white to-[#F5F5F5] border border-[#A7A9AC]/20 flex items-center justify-center hover:border-[#8D9DA6]/60 transition-all duration-300 hover:shadow-lg group"
            >
              <div
                className="text-[#595B5C] group-hover:text-[#50626C] transition-colors"
                style={{ fontSize: '18px', fontWeight: 600, letterSpacing: '0.02em' }}
              >
                {client}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gradient-to-br from-[#8D9DA6] to-[#A7A9AC] aspect-[4/3] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#50626C]/90 to-transparent flex items-end p-6">
                <div>
                  <h3
                    className="text-white mb-2"
                    style={{ fontSize: '18px', fontWeight: 600 }}
                  >
                    Проект {i}
                  </h3>
                  <p
                    className="text-white/80"
                    style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.5 }}
                  >
                    Поставка промышленного оборудования
                  </p>
                </div>
              </div>
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
