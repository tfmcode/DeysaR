import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Novedades DEYSA | Noticias del Sector Industrial",
  description:
    "Últimas novedades, consejos y noticias sobre mantenimiento industrial, destapaciones y servicios ambientales. Mantente informado con DEYSA.",
  keywords:
    "blog deysa, novedades industriales, consejos mantenimiento, noticias destapaciones, sector industrial",
};

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  day: string;
  month: string;
  year: string;
  slug: string;
  isVideo: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Mantenimiento Preventivo: La Clave para Evitar Emergencias",
    excerpt:
      "Descubrí cómo un plan de mantenimiento preventivo puede reducir hasta un 95% las emergencias en tu empresa y ahorrar costos operativos significativos.",
    image: "/blog/mantenimiento-preventivo.jpg",
    date: "2024-03-15",
    day: "15",
    month: "MAR",
    year: "2024",
    slug: "mantenimiento-preventivo-evitar-emergencias",
    isVideo: false,
  },
  {
    id: "2",
    title: "Nuevas Regulaciones Ambientales para Empresas en CABA",
    excerpt:
      "Te contamos todo sobre las nuevas normativas de disposición de residuos y cómo DEYSA te ayuda a cumplir con todos los requisitos legales.",
    image: "/blog/regulaciones-ambientales.jpg",
    date: "2024-03-10",
    day: "10",
    month: "MAR",
    year: "2024",
    slug: "nuevas-regulaciones-ambientales-caba",
    isVideo: false,
  },
  {
    id: "3",
    title: "Video: Cómo Funciona la Video Inspección de Cañerías",
    excerpt:
      "Mirá en este video cómo utilizamos tecnología de punta para diagnosticar problemas en cañerías sin obras invasivas.",
    image: "/blog/video-inspeccion.jpg",
    date: "2024-03-05",
    day: "05",
    month: "MAR",
    year: "2024",
    slug: "video-inspeccion-canerias",
    isVideo: true,
  },
  {
    id: "4",
    title: "5 Señales de que tu Sistema de Desagüe Necesita Atención",
    excerpt:
      "Aprendé a identificar los síntomas de obstrucciones antes de que se conviertan en emergencias costosas para tu negocio.",
    image: "/blog/senales-desague.jpg",
    date: "2024-02-28",
    day: "28",
    month: "FEB",
    year: "2024",
    slug: "senales-sistema-desague-atencion",
    isVideo: false,
  },
  {
    id: "5",
    title: "Certificaciones Ambientales: Por Qué Son Importantes",
    excerpt:
      "Conocé la importancia de trabajar con proveedores certificados y cómo esto protege a tu empresa ante auditorías.",
    image: "/blog/certificaciones.jpg",
    date: "2024-02-20",
    day: "20",
    month: "FEB",
    year: "2024",
    slug: "certificaciones-ambientales-importantes",
    isVideo: false,
  },
  {
    id: "6",
    title: "Caso de Éxito: Restaurante de Alto Tráfico",
    excerpt:
      "Cómo solucionamos un problema crítico de desagües en menos de 4 horas sin interrumpir el servicio de un restaurante de 300 comensales.",
    image: "/blog/caso-exito-restaurante.jpg",
    date: "2024-02-15",
    day: "15",
    month: "FEB",
    year: "2024",
    slug: "caso-exito-restaurante-alto-trafico",
    isVideo: false,
  },
];

export default function BlogPage() {
  return (
    <main>
      <section className="relative bg-gradient-to-r from-teal-900 to-teal-800 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Novedades</h1>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto">
            Seguí las últimas novedades, consejos y noticias del sector
            industrial
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative h-64 overflow-hidden">
                  {post.isVideo ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teal-900 to-teal-800">
                      <div className="bg-white bg-opacity-20 rounded-full p-6">
                        <svg
                          className="w-16 h-16 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                      <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Video
                      </div>
                    </div>
                  ) : (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-orange-500 text-white text-center px-3 py-1">
                      <div className="text-2xl font-bold leading-none">
                        {post.day}
                      </div>
                    </div>
                    <div className="bg-white text-gray-700 text-center px-3 py-1 text-xs font-semibold">
                      {post.month}/{post.year}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors group"
                  >
                    <span>Leer más</span>
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">
              ¿Querés estar al día con las últimas novedades?
            </p>
            <Link
              href="#contacto"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Suscribite a nuestro newsletter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
