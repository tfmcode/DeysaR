"use client";

import { useState } from "react";

export default function Services() {
  const services = [
    {
      title: "Desobstrucción y Limpieza",
      shortTitle: "Destapaciones",
      image: "/img/prip.png",
      hoverImage: "/img/home-mantenimiento-saneamiento-slider.png",
      description:
        "Soluciones rápidas para obstrucciones que detienen tu operación",
      link: "/servicios/destapaciones-industriales",
    },
    {
      title: "Video Inspección",
      shortTitle: "Diagnóstico Visual",
      image: "/img/ult.png",
      hoverImage: "/img/destapador_7_redimensionado.png",
      description: "Cámaras robotizadas para diagnóstico preciso de cañerías",
      link: "/servicios/video-inspeccion",
    },
    {
      title: "Transporte y Disposición",
      shortTitle: "Gestión de Residuos",
      image: "/img/home-transporte-disposicion-master.png",
      hoverImage: "/img/home-transporte-disposicion-hover.png",
      description: "Disposición final certificada con trazabilidad completa",
      link: "/servicios/transporte-disposicion",
    },
    {
      title: "Hidrolavado de Tanques",
      shortTitle: "Limpieza de Tanques",
      image: "/img/home-mantenimiento-tanques-master.png",
      hoverImage: "/img/home-mantenimiento-tanques-hover.png",
      description: "Limpieza certificada de cámaras sépticas y tanques",
      link: "/servicios/hidrolavado-tanques",
    },
    {
      title: "Instalación y Saneamiento",
      shortTitle: "Instalaciones",
      image: "/img/home-cambio-reparacion-master.png",
      hoverImage: "/img/home-cambio-reparacion-hover.png",
      description: "Modernización integral de sistemas hidráulicos",
      link: "/servicios/instalacion-saneamiento",
    },
    {
      title: "Todos los Servicios",
      shortTitle: "Ver Todos",
      image: "/img/home-principal-master.png",
      hoverImage: "/img/home-principal-hover.png",
      description: "Conocé toda nuestra gama de soluciones profesionales",
      link: "/servicios",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Servicios Especializados
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones integrales para cada necesidad de tu empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative h-96 cursor-pointer"
                style={{ perspective: "1000px" }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="relative w-full h-full transition-transform duration-700"
                  style={{
                    transformStyle: "preserve-3d",
                    transform:
                      hoveredIndex === index
                        ? "rotateY(180deg)"
                        : "rotateY(0deg)",
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-teal-800 to-teal-900 rounded-2xl shadow-xl overflow-hidden flex items-center justify-center p-8">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>

                  <div
                    className="absolute inset-0"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-xl overflow-hidden p-8 flex flex-col justify-between">
                      <div>
                        <div className="mb-6">
                          <img
                            src={service.hoverImage}
                            alt={service.title}
                            className="w-24 h-24 object-contain mx-auto"
                          />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 text-center">
                          {service.title}
                        </h3>
                        <p className="text-white text-center text-lg leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <a
                        href={service.link}
                        className="block w-full text-center bg-white hover:bg-gray-100 text-orange-600 font-bold px-6 py-3 rounded-lg transition-colors duration-200 mt-6"
                      >
                        Conocé más
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
