import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipamientos - DEYSA | Tecnología de Última Generación",
  description:
    "Conocé nuestra flota de equipamiento industrial: camiones atmosféricos, hidrolavadoras, cámaras de video inspección y más. Tecnología de punta para servicios profesionales.",
  keywords:
    "equipamiento industrial, camiones atmosféricos, hidrolavadoras, video inspección, maquinaria destapaciones, bombas sumergibles",
};

interface Equipment {
  id: string;
  name: string;
  image: string;
  category: string;
}

const features = [
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Inversión",
    description:
      "Invertimos en tecnologías de última generación para garantizar el mejor servicio.",
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Mantenimiento",
    description:
      "Ofrecemos diagnósticos sin cargo y seguimiento de instalaciones para evitar colapsos.",
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: "Tecnología",
    description:
      "Maquinaria óptima para la prestación de servicios. Comprobá la diferencia.",
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Mercado",
    description:
      "Conocemos el mercado y ofrecemos precios competitivos para tu empresa.",
  },
];

const equipments: Equipment[] = [
  {
    id: "1",
    name: "Máquina Destapadora Cofahe 300",
    image: "/img/equip-destapadora-cofahe-300-nueva-resize.jpg",
    category: "Destapación",
  },
  {
    id: "2",
    name: "Motobomba Honda Wb30xt",
    image: "/img/equip-motobomba-honda-wb30xt-resize.jpg",
    category: "Bombeo",
  },
  {
    id: "3",
    name: "Bomba Flygt 2125 HT",
    image: "/img/equip-2125-flygt-resize.jpg",
    category: "Bombeo",
  },
  {
    id: "4",
    name: "Máquina Destapa Cañerías Cofahe C 150",
    image: "/img/equip-cofahe-c-150-resize.jpg",
    category: "Destapación",
  },
  {
    id: "5",
    name: "Desobstructor Hidrojet COFAHE HJ-80",
    image: "/img/equip-cofahe_hj80_gde-resize.jpg",
    category: "Hidrolavado",
  },
  {
    id: "6",
    name: "Cámara de Video Inspección Robotizada",
    image: "/img/equip-videoinspeccion-resize.jpg",
    category: "Diagnóstico",
  },
  {
    id: "7",
    name: "Bomba Sumergible",
    image: "/img/equip-bomba-sumergible-lodo-resize.jpg",
    category: "Bombeo",
  },
  {
    id: "8",
    name: "Camión Hidrojet Desobstructor",
    image: "/img/equip-camionHidrojet.png",
    category: "Flota",
  },
  {
    id: "9",
    name: "Camión Atmosférico",
    image: "/img/equip-camionAtmosferico.png",
    category: "Flota",
  },
];

export default function EquipamientosPage() {
  return (
    <main>
      <section className="relative bg-gradient-to-r from-teal-900 to-teal-800 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Equipamientos</h1>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto">
            Contamos con el mejor equipamiento del mercado para cubrir todas tus
            necesidades
          </p>
        </div>
      </section>

      <section className="bg-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center text-white">
                <div className="flex justify-center mb-4">
                  <div className="bg-white bg-opacity-20 rounded-full p-4">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white text-opacity-90 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              En DEYSA ponemos el{" "}
              <span className="text-orange-500">mejor equipamiento</span> a tu
              disposición
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos encontramos en la búsqueda constante de nuevas técnicas que
              nos permitan la fidelización de nuestros clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipments.map((equipment, index) => (
              <div
                key={equipment.id}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={equipment.image}
                    alt={equipment.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {equipment.category}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white bg-opacity-90 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                    {equipment.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6 text-lg">
              ¿Querés conocer más sobre nuestro equipamiento?
            </p>

            <a
              href="#contacto"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Solicitá una Demostración
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
