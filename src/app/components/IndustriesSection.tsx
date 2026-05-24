import { Droplet, Atom, FlaskConical, Zap, Factory } from 'lucide-react';
import { useState } from 'react';

// Типы для отраслей
interface Industry {
  name: string;
  icon: React.ComponentType<{ className?: string; size?: number; strokeWidth?: number }>;
  description: string;
}

export function IndustriesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);
  
  const industries: Industry[] = [
    { 
      name: 'Нефтегазовая', 
      icon: Droplet,
      description: 'Наши решения применяются в нефтегазовой отрасли для обеспечения надежной и безопасной работы оборудования в условиях высоких давлений и агрессивных сред. Мы предоставляем комплексные решения для добычи, транспортировки и переработки углеводородов.'
    },
    { 
      name: 'Атомная', 
      icon: Atom,
      description: 'В атомной энергетике мы предлагаем высокотехнологичные решения, соответствующие самым строгим требованиям безопасности и надежности. Наши продукты используются в системах контроля, управления и обеспечения безопасности АЭС.'
    },
    { 
      name: 'Химическая', 
      icon: FlaskConical,
      description: 'Для химической промышленности мы разрабатываем решения, устойчивые к агрессивным химическим средам и обеспечивающие точный контроль технологических процессов. Наши системы применяются в производстве удобрений, полимеров и других химических продуктов.'
    },
    { 
      name: 'Энергетика', 
      icon: Zap,
      description: 'В энергетике мы предлагаем решения для традиционной и возобновляемой энергетики. Наши технологии обеспечивают эффективное управление энергосистемами, повышение надежности оборудования и оптимизацию производственных процессов.'
    },
    { 
      name: 'Металлургия', 
      icon: Factory,
      description: 'В металлургии наши решения применяются для автоматизации и контроля технологических процессов выплавки, обработки и разливки металлов. Мы обеспечиваем стабильную работу оборудования в экстремальных температурных условиях.'
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-[#50626C] mb-16 text-center tracking-wide"
          style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700, letterSpacing: '0.05em' }}
        >
          ОТРАСЛИ ПРИМЕНЕНИЯ
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon;
            const isSelected = selectedIndustry?.name === industry.name;
            
            return (
              <div
                key={industry.name}
                className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#F5F5F5] to-white border border-[#A7A9AC]/20 hover:border-[#50626C]/40 transition-all duration-300 hover:shadow-xl group cursor-pointer"
                onClick={() => setSelectedIndustry(isSelected ? null : industry)}
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-[#8D9DA6] to-[#A7A9AC] flex items-center justify-center group-hover:from-[#50626C] group-hover:to-[#595B5C] transition-all duration-300">
                  <Icon className="text-white" size={32} strokeWidth={1.5} />
                </div>
                <div
                  className="text-[#595B5C] text-center group-hover:text-[#50626C] transition-colors"
                  style={{ fontSize: '14px', fontWeight: 600 }}
                >
                  {industry.name}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Блок с описанием отрасли */}
        {selectedIndustry && (
          <div className="mt-12 pt-8 border-t border-[#A7A9AC]/30 animate-fadeIn">
            <h3
              className="text-[#50626C] mb-6"
              style={{ fontSize: '20px', fontWeight: 600, letterSpacing: '0.02em' }}
            >
              {selectedIndustry.name}
            </h3>
            <p className="text-[#595B5C] text-base leading-relaxed max-w-4xl">
              {selectedIndustry.description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

<style>{`
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.4s ease-out forwards;
  }
`}</style>