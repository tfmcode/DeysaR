export default function FAQ() {
  const faqs = [
    {
      question: "¿Cuánto demora la atención de una urgencia?",
      answer:
        "Nuestro tiempo de respuesta para urgencias es de 2 a 4 horas en CABA y GBA. Contamos con guardia 24/7 los 365 días del año y flota propia para atención inmediata sin depender de terceros.",
    },
    {
      question: "¿Entregan certificados y documentación legal?",
      answer:
        "Sí, entregamos manifiestos de transporte, certificados de disposición final y toda la documentación requerida por organismos de control ambiental. Esto te respalda ante auditorías y garantiza el cumplimiento normativo de tu empresa.",
    },
    {
      question: "¿Qué diferencia a DEYSA de otras empresas del rubro?",
      answer:
        "Flota propia con equipamiento de última generación, más de 30 años de experiencia con grandes empresas, trazabilidad completa de residuos, certificaciones ambientales vigentes y personal técnico capacitado. No subcontratamos servicios críticos.",
    },
    {
      question: "¿Hacen mantenimiento preventivo programado?",
      answer:
        "Sí, diseñamos planes de mantenimiento preventivo personalizados según tu operación. Esto reduce hasta un 95% las emergencias, prolonga la vida útil de tus instalaciones y te permite planificar presupuestos con anticipación.",
    },
    {
      question: "¿Trabajan con empresas de todos los tamaños?",
      answer:
        "Atendemos desde pequeños comercios hasta grandes cadenas e industrias. Cada cliente recibe el mismo nivel de profesionalismo, tecnología y respaldo documental, adaptándonos a las necesidades específicas de cada operación.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Resolvemos tus dudas sobre nuestros servicios
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-6 list-none">
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <span className="text-orange-500 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">¿No encontraste lo que buscabas?</p>
          <a
            href="#contacto"
            className="inline-block text-orange-500 hover:text-orange-600 font-semibold transition-colors duration-200"
          >
            Contactanos directamente →
          </a>
        </div>
      </div>
    </section>
  );
}
