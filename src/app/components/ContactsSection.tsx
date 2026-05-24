import { MapPin, Phone, Mail, Building2 } from 'lucide-react';

export function ContactsSection() {
  const contacts = [
    {
      icon: MapPin,
      title: 'Адрес',
      value: '123456, Россия, г. Москва, ул. Промышленная, д. 1',
    },
    {
      icon: Phone,
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@gazproektengineering.ru',
    },
    {
      icon: Building2,
      title: 'ИНН / КПП',
      value: '7700000000 / 770001001',
    },
  ];

  const requisites = [
    { label: 'Полное наименование', value: 'Общество с ограниченной ответственностью "Газ-Проект Инжиниринг"' },
    { label: 'Юридический адрес', value: '123456, Россия, г. Москва, ул. Промышленная, д. 1' },
    { label: 'ИНН', value: '7700000000' },
    { label: 'КПП', value: '770001001' },
    { label: 'ОГРН', value: '1234567890123' },
    { label: 'Расчетный счет', value: '40702810000000000000' },
    { label: 'Банк', value: 'ПАО "Банк"' },
    { label: 'БИК', value: '044525000' },
    { label: 'Корр. счет', value: '30101810000000000000' },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 px-6 bg-gradient-to-b from-[#50626C] to-[#595B5C]">
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className="text-white mb-6 tracking-wide"
            style={{ fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 700, letterSpacing: '0.05em' }}
          >
            КОНТАКТЫ
          </h1>
          <p
            className="text-white/80 max-w-3xl mx-auto"
            style={{ fontSize: '18px', fontWeight: 300, lineHeight: 1.6 }}
          >
            Свяжитесь с нами для получения технической консультации и коммерческого предложения
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-gradient-to-br from-[#F5F5F5] to-white border border-[#A7A9AC]/20 hover:border-[#8D9DA6]/60 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#8D9DA6] to-[#A7A9AC] flex items-center justify-center">
                    <Icon className="text-white" size={28} strokeWidth={1.5} />
                  </div>
                  <div
                    className="text-[#50626C] mb-2"
                    style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.05em' }}
                  >
                    {contact.title}
                  </div>
                  <div
                    className="text-[#595B5C]"
                    style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.5 }}
                  >
                    {contact.value}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="aspect-video bg-gradient-to-br from-[#50626C] to-[#8D9DA6] relative shadow-2xl mb-16">
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
                  className="text-white mb-2"
                  style={{ fontSize: '24px', fontWeight: 600 }}
                >
                  Интерактивная карта
                </div>
                <div
                  className="text-white/70"
                  style={{ fontSize: '16px', fontWeight: 400 }}
                >
                  г. Москва, ул. Промышленная, д. 1
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-6 h-6 rounded-full bg-white animate-pulse">
                <div className="absolute inset-0 rounded-full bg-white/40 animate-ping" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-[#F5F5F5] to-white">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-[#50626C] mb-12 text-center tracking-wide"
            style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700, letterSpacing: '0.05em' }}
          >
            РЕКВИЗИТЫ
          </h2>

          <div className="bg-white border border-[#A7A9AC]/20 p-8 md:p-12">
            <div className="space-y-6">
              {requisites.map((item, index) => (
                <div
                  key={index}
                  className="grid md:grid-cols-3 gap-4 pb-6 border-b border-[#A7A9AC]/10 last:border-b-0"
                >
                  <div
                    className="text-[#8D9DA6]"
                    style={{ fontSize: '14px', fontWeight: 600 }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="md:col-span-2 text-[#595B5C]"
                    style={{ fontSize: '14px', fontWeight: 400 }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}