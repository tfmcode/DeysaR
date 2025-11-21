"use client";

import { Metadata } from "next";
import { useState } from "react";
import Link from "next/link";

interface FAQ {
  question: string;
  answer: string | string[];
}

interface FAQCategory {
  id: string;
  title: string;
  faqs: FAQ[];
}

const faqCategories: FAQCategory[] = [
  {
    id: "servicios",
    title: "Servicios",
    faqs: [
      {
        question:
          "¿Qué distancia de metraje de manguera tienen los equipos atmosféricos?",
        answer:
          "Realizamos servicios de hasta 150 metros de distancia, dependiendo de la localización de la cámara séptica. Siempre solicitamos distancias de referencias.",
      },
      {
        question:
          "¿Realizan servicios de desagotes y limpiezas de cámaras sépticas en pisos inferiores y superiores a planta baja?",
        answer:
          "Realizamos todo tipo de desagote y retiro de líquidos, tanto en subsuelos, como pisos superiores.",
      },
      {
        question:
          "¿Cuál es la diferencia entre desagotar y destapar una cámara séptica?",
        answer: [
          "En DEYSA hacemos referencia a una destapación como un proceso de desobstrucción de la cañería. Llevando en acción la limpieza en el interior, retirando grasas, sarro, papeles y cualquier otro tipo de objeto sólido que perjudique la circulación del líquido en la cañería.",
          "Caso distinto es realizar el desagote, aspirado o vaciado de la totalidad de los líquidos o residuos de una cámara séptica con Camión Atmosférico o bombas sumergibles a fin de retirar la totalidad de los líquidos residuales.",
        ],
      },
      {
        question:
          "¿Para realizar un cambio de bomba sumergible debe estar vacía la cámara séptica?",
        answer:
          "Se realiza el desagote del pozo séptico interviniendo en conjunto con la limpieza del pozo séptico para evitar futuros problemas de obstrucción de la bomba instalada.",
      },
      {
        question: "¿Cómo se realiza una destapación de cañería?",
        answer:
          "La destapación de cañerías se realiza mediante sondas de acero tipo resortes y sistema hidro-jet (alta presión de agua).",
      },
      {
        question: "¿Para qué se utilizan las motobombas con motor a explosión?",
        answer:
          "Desagote de sitios inundados por la lluvia. Para la utilización de este servicio, el lugar a desagotar deberá tener un mínimo de 60 cm de altura de agua. Retiran 60.000 litros/hora, dependiendo de la distancia que se quiera desagotar.",
      },
    ],
  },
  {
    id: "maquinarias",
    title: "Maquinarias y Equipos",
    faqs: [
      {
        question: "¿Para qué se utiliza un camión atmosférico?",
        answer:
          "Se utilizan para servicios de desagotes de líquidos y semi-sólidos (especiales y no especiales), transportados en tanques cisternas cerrados, para evitar su derrame.",
      },
      {
        question: "¿Qué capacidad tienen los camiones atmosféricos?",
        answer:
          "La empresa cuenta con unidades de 4.000, 16.000, 20.000 y 36.000 metros cúbicos.",
      },
      {
        question:
          "¿Qué tipo maquinaria recomiendan para cada tipo de destapación de cañería?",
        answer: [
          "• Electromecánicas portátiles (sondas tipo resortes de acero de distintos calibres). Para obstrucciones sólidas como papel, algodón, trapos, plásticos y raíces.",
          "• Sistema HidroJet de alta presión de agua, para cañerías con obstrucciones como barro y grasa orgánica.",
          "• Aspiración o succión del interior de las cañerías con Camión Atmosférico. Como ser piedras o escombros provenientes de obras y derrumbes de cámaras sépticas.",
        ],
      },
      {
        question: "¿Por qué tengo que desagotar para destapar?",
        answer:
          "A menudo nuestros clientes nos realizan esta consulta. Se da que en muchas situaciones una cámara séptica se encuentra obstruida por la acumulación de sedimentos que se van asentando por el uso. Las destapaciones básicas con maquinaria pequeña solo realizan un pequeño hueco en la obstrucción, permitiendo el desagote de la cámara por los próximos días. En casos como estos, DEYSA recomienda la extracción de semisólidos de cámara/cañería con Camión Atmosférico, y luego la limpieza del caño con equipos Hidro-Jet de alta presión.",
      },
      {
        question:
          "¿La cañería debe estar limpia para realizar una Video Inspección?",
        answer:
          "La empresa cuenta con cámaras de alta definición a color. Se recomienda previamente realizar la limpieza de la tubería para evitar posibles obstrucciones en la visualización de la cámara óptica.",
      },
      {
        question: "¿Cuál es la potencia del camión desobstructor?",
        answer:
          "Este equipo trabaja con una bomba de alta presión que expulsa un caudal de 180 litros por minuto.",
      },
    ],
  },
  {
    id: "presupuestos",
    title: "Presupuestos y Pagos",
    faqs: [
      {
        question: "¿Las cotizaciones en DEYSA son en el día?",
        answer: [
          "Las cotizaciones en desobstrucciones y transporte de residuos son en el día. Existen ocasiones que debido a la acotada información que recibimos para el pedido de cotización, se procede a realizar una visita técnica al sitio.",
          "Las cotizaciones derivadas de las reparaciones y reformas deben ser relevadas por personal técnico de la empresa.",
        ],
      },
      {
        question:
          "¿La visita técnica tiene un costo? ¿Cuánto demoran en llegar?",
        answer:
          "¡No tiene costo alguno! Se envía un técnico a realizar un relevamiento del servicio sin cargo. Son coordinadas según disponibilidad de ambas partes.",
      },
      {
        question:
          "¿La empresa cuenta con toda la documentación necesaria para la plena actividad?",
        answer:
          "¡Por supuesto! DEYSA trabaja con la documentación vigente para realizar cualquier tipo de actividad.",
      },
      {
        question: "¿Cuáles son los medios de pagos que acepta DEYSA?",
        answer: [
          "• Transferencia bancaria",
          "• Valores a depositar",
          "• Mercado Pago (¡cuidado! tiene recargo)",
        ],
      },
      {
        question: "Anticipo para la adquisición de los servicios",
        answer:
          "Por políticas de la empresa hay determinados pedidos de servicios que no serán procesados hasta no haberse efectuado el anticipo del 50% respecto del mismo. Los pagos pueden efectuarse por los medios mencionados, y una vez efectuado el anticipo de servicio, el área de logística se pondrá en contacto para avanzar con el pedido. Caso contrario de cancelar un servicio, habiendo avisado con anticipación de 24 hs al envío de los equipos, se procede con la devolución total del dinero al cliente. Si los equipos llegan a destino, y se desea suspender el servicio, aplicaremos gastos mínimos de las unidades por un monto parcial del 25% del total del servicio solicitado.",
      },
      {
        question: "¿Cuánto demoran en venir si contrato un servicio hoy mismo?",
        answer:
          "La rápida respuesta es una de nuestras ventajas competitivas en el cumplimiento de los pedidos solicitados. En ocasiones podemos demorar entre 24 y 48 hs, dependiendo de la zona de ubicación y problemas ajenos a la empresa (ej: microcentro).",
      },
      {
        question: "¿Si no pueden destapar la cañería, me cobran igual?",
        answer: [
          "Los motivos por los cuales la empresa no puede finalizar un servicio, en gran cantidad de ocasiones, suelen ser por razones ajenas a nosotros. A menudo nos encontramos con roturas u obstrucciones que puedan generarse en el sector de línea municipal (colector perteneciente a la calle/vereda). Este tipo de reparaciones están a cargo de la empresa de saneamiento público. También es muy común encontrarnos con las cañerías en muy mal estado, con fisuras por los años de uso.",
          "Las cañerías que presentan obstrucciones de raíces, cemento de finalización de obra y cualquier otro objeto contundente como piedras producidas por el derrumbe de la propia cámara séptica, no es posible brindar una garantía del servicio.",
          "Para su tranquilidad, DEYSA cuenta con equipos y tecnología de última generación. Siempre estamos dispuestos a brindar una solución posible en su cañería. Enviando un técnico capacitado para diagnosticar el problema nuevamente.",
        ],
      },
    ],
  },
];

export default function PreguntasFrecuentesPage() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].id);
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (categoryId: string, index: number) => {
    const faqId = `${categoryId}-${index}`;
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  const activeData = faqCategories.find((cat) => cat.id === activeCategory);

  return (
    <main>
      <section className="relative bg-gradient-to-r from-teal-900 to-teal-800 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Respondemos Todas tus Preguntas
          </h1>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto mb-8">
            Ofrecemos todo tipo de soporte para cada una de tus consultas y
            respondemos todas tus necesidades
          </p>
          <Link
            href="/#contacto"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Conocenos
          </Link>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="border-b border-gray-200">
              <div className="flex flex-wrap">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex-1 min-w-[200px] px-6 py-4 text-center font-semibold transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-orange-500 text-white"
                        : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-8">
              <div className="space-y-4">
                {activeData?.faqs.map((faq, index) => {
                  const faqId = `${activeCategory}-${index}`;
                  const isOpen = openFAQ === faqId;

                  return (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
                    >
                      <button
                        onClick={() => toggleFAQ(activeCategory, index)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 pr-8">
                          {faq.question}
                        </h3>
                        <span
                          className={`flex-shrink-0 text-orange-500 transform transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
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
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? "max-h-[1000px]" : "max-h-0"
                        }`}
                      >
                        <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                          {Array.isArray(faq.answer) ? (
                            <div className="space-y-3">
                              {faq.answer.map((paragraph, pIndex) => (
                                <p
                                  key={pIndex}
                                  className="text-gray-700 leading-relaxed"
                                >
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          ) : (
                            <p className="text-gray-700 leading-relaxed">
                              {faq.answer}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6 text-lg">
              ¿No encontraste lo que buscabas?
            </p>
            <Link
              href="/#contacto"
              className="inline-block text-orange-500 hover:text-orange-600 font-semibold text-lg transition-colors duration-200"
            >
              Contactanos directamente →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
