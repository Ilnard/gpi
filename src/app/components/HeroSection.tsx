export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#50626C] to-[#8D9DA6] opacity-90"
        style={{
          backgroundImage: 'linear-gradient(135deg, #50626C 0%, #595B5C 50%, #8D9DA6 100%)',
        }}
      />

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h1
          className="text-white mb-6 tracking-[0.02em] leading-tight"
          style={{ fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: 700 }}
        >
          ГАЗ-ПРОЕКТ
          <br />
          ИНЖИНИРИНГ
        </h1>

        <p
          className="text-white/90 mb-12 max-w-2xl mx-auto"
          style={{ fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: 300, lineHeight: 1.6 }}
        >
          Проектирование и производство
          <br />
          промышленного оборудования
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-white/80">
          {['Проектирование', 'Производство', 'Поставка', 'Монтаж', 'Сервис'].map((item, index, arr) => (
            <div key={item} className="flex items-center gap-4 md:gap-8">
              <span style={{ fontSize: '15px', fontWeight: 500, letterSpacing: '0.05em' }}>
                {item}
              </span>
              {index < arr.length - 1 && (
                <div className="hidden md:block w-[1px] h-4 bg-white/40" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
