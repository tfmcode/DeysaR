"use client";

import { Metadata } from "next";
import { useState } from "react";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string[];
  details: string[];
  extraInfo?: string;
}

const services: Service[] = [
  {
    id: "desobstruccion-limpieza",
    title: "Desobstrucción y Limpieza en Cañerías de Desagües",
    category: "desobstruccion",
    image: "/img/serviciosfoto-3.png",
    description: [
      "Desobstrucciones de cañerías con Camión Desobstructor",
      "Destapación de cañería con sistemas mecanizados, permitiendo romper cualquier obstrucción por sedimentos y semisólidos",
      "Destapación de cámaras sépticas decantadoras de residuos",
      "Destapación de cámaras sépticas de interconexión",
      "Destapación y desobstrucción de cañerías fluviales con bombas de alta presión de agua",
    ],
    details: [
      "Limpieza de cañerías y rejillas de cocina industrial",
      "Limpieza de columnas de bajadas de edificios",
      "En las cañerías superiores a los 110 mm, DEYSA dispone de equipos Desobstructores con potentes bombas de alto caudal y presión para el retiro de grasas y barro que reducen el diámetro en el interior del caño",
      "Equipos de Video Inspección y Diagnóstico de las Tuberías para una aproximación real en el que se encuentran sus cañerías",
    ],
    extraInfo:
      "Prevenir la reducción en las cañerías de desagües, realizando limpiezas hidrocinéticas se previene futuras inundaciones por taponamientos de residuos generados en los distintos sectores de su empresa.",
  },
  {
    id: "video-inspeccion",
    title: "Video Inspección de Cañerías y Desagües",
    category: "diagnostico",
    image: "/img/serviciosfoto-1.png",
    description: [
      "Filmación del estado interno de las cañerías en tiempo real",
      "Entrega de informes sobre el estado de las cañerías",
      "Diagnóstico por imágenes en alta resolución",
      "Equipo portátil para la inspección televisiva y filmación del estado de las cañerías",
      "Ideal para cañerías y ductos de 1 a 5 pulgadas",
    ],
    details: [
      "Cámara color de alta resolución",
      "Iluminación LED de alto brillo",
      "Tamaño de la cámara: diámetro 23 mm",
      "40 metros de fibra óptica",
    ],
    extraInfo:
      "Con su cámara color de alta resolución e iluminación a LED blancos de alto brillo incorporados, filma y graba imágenes en todo tipo de cañerías pluviales y cloacales. Las filmaciones serán extraídas de la cámara para su visualización y análisis, integradas en informes técnicos que serán presentados por el departamento técnico de nuestra empresa.",
  },
  {
    id: "transporte-disposicion",
    title: "Transporte y Disposición Final de Residuos",
    category: "residuos",
    image: "/img/serviciosfoto-2.png",
    description: [
      "Lodo Bentonita",
      "Desagote de agua con restos orgánicos",
      "Desagote de agua y barros con hidrocarburos",
      "Desagote de sótanos y garaje",
      "Desagote en plantas de efluentes industriales",
      "Disposición final de desechos biodegradables",
    ],
    details: [
      "Limpieza de fondos de tanques e hidrolavados",
      "Limpieza de sobrenadantes de lagunas decantadoras",
      "Retiro de aceites usados",
      "Retiro de barros de lavaderos y estaciones de servicios",
      "Retiro de barros de plantas de efluentes",
      "Retiro de barros industriales en general",
      "Retiro de barros, limpieza e hidrolavado de cámaras industriales, comercios, estaciones de servicio, lavaderos",
      "Retiro de hidrocarburos contaminados y derivados del petróleo",
      "Retiro de residuos de marmolería",
      "Retiro de residuos industriales líquidos, semisólidos y sólidos",
      "Retiro de tierras contaminadas y remediación de suelos",
      "Transporte de agua para perforaciones",
    ],
    extraInfo:
      "DEYSA se compromete con el cuidado del medio ambiente, concientizando a las empresas generadoras de residuos.",
  },
  {
    id: "hidrolavado-tanques",
    title: "Hidrolavado de Cámaras Sépticas y Tanques",
    category: "hidrolavado",
    image: "/img/serviciosfoto-4.png",
    description: [
      "Limpieza de cámaras sépticas",
      "Limpieza en fosas sépticas",
      "Limpieza en plantas de tratamiento",
      "Hidrolavado a presión en pozos de bombeo",
      "Hidrolavado en sótanos de edificios",
      "Hidrolavado a presión en tanques de combustible",
    ],
    details: [],
    extraInfo:
      "Contamos con equipos portátiles para hidrolavado en cámaras sépticas. Camiones Desobstructores de alta presión que alcanzan los 350 bares para hidrolavados en fondos de tanques y plantas de tratamiento.",
  },
  {
    id: "instalacion-saneamiento",
    title: "Instalación y Saneamiento de Cañerías",
    category: "instalacion",
    image: "/img/serviciosfoto-5.png",
    description: [
      "Desagote y limpieza de los pozos sépticos de bombeo cloacal y pluvial. Desagote de plantas de efluentes residuales",
      "Extracción, reparación y cambio de bombas sumergibles de los pozos sépticos",
      "Reparación y reconstrucción de pozos de bombeo",
      "Extracción de bomba sumergible. Instalación de nueva unidad en interior de pozo de perforación de agua potable",
      "Reparación de tuberías dañadas existentes. Instalación de cañerías sanitarias. Reemplazo de cañerías de desagües por nuevas",
    ],
    details: [
      "Construcción de cámaras sépticas para las redes de desagües, cloacal, pluvial y de alimentación de agua",
    ],
    extraInfo:
      "Realizamos la limpieza y desinfección de los pozos de bombeo, brindando seguridad y efectividad en el buen funcionamiento de las bombas de expulsión de líquidos y efluentes.",
  },
];

const categories = [
  { id: "all", label: "Todos los Servicios" },
  { id: "desobstruccion", label: "Desobstrucción y Limpieza" },
  { id: "diagnostico", label: "Video Inspección" },
  { id: "residuos", label: "Transporte y Disposición" },
  { id: "hidrolavado", label: "Hidrolavado" },
  { id: "instalacion", label: "Instalación y Saneamiento" },
];

export default function ServiciosPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <main>
      <section className="relative bg-gradient-to-r from-teal-900 to-teal-800 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Conocé Nuestros Servicios
          </h1>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-teal-100 mb-8">
            Somos profesionales en el área
          </p>
          <Link
            href="/#contacto"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Contáctenos
          </Link>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300`}
              >
                <div className="lg:w-1/2 relative h-96 lg:h-auto overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {service.title}
                  </h2>
                  <div className="w-16 h-1 bg-orange-500 mb-6"></div>

                  <ul className="space-y-3 mb-8">
                    {service.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg
                          className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl w-fit"
                  >
                    <span>Ver Más</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedService && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">
                {selectedService.title}
              </h3>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="px-8 py-6">
              <ul className="space-y-3 mb-6">
                {selectedService.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {selectedService.details.length > 0 && (
                <ul className="space-y-3 mb-6">
                  {selectedService.details.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {selectedService.extraInfo && (
                <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    {selectedService.extraInfo}
                  </p>
                </div>
              )}
            </div>

            <div className="sticky bottom-0 bg-gray-50 px-8 py-6 border-t border-gray-200">
              <button
                onClick={() => setSelectedService(null)}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-colors duration-200"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
