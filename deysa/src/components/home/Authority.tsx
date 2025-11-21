"use client";

import { useState, useEffect, useRef } from "react";

export default function Authority() {
  const clients = [
    { name: "La Nueva Metropol", logo: "/marcas/1.png" },
    { name: "SanCor", logo: "/marcas/2.png" },
    { name: "Nestlé", logo: "/marcas/3.png" },
    { name: "McDonald's", logo: "/marcas/4.png" },
    { name: "Burger King", logo: "/marcas/5.png" },
    { name: "Wendy's", logo: "/marcas/6.png" },
    { name: "Eternit", logo: "/marcas/7.png" },
    { name: "Vital", logo: "/marcas/8.png" },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Clientes que nos eligen
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de 30 años brindando soluciones de mantenimiento integral a las
            empresas más importantes de gastronomía, industria y comercio en
            Argentina
          </p>
        </div>

        <div className="relative mb-16">
          <div className="flex gap-12 animate-scroll">
            {duplicatedClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                style={{ width: "200px" }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div
            className={`p-6 transform transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            <div className="text-4xl font-bold text-orange-500 mb-2">
              {isVisible ? <Counter target={30} suffix="+" /> : "0+"}
            </div>
            <div className="text-gray-600">Años de experiencia</div>
          </div>
          <div
            className={`p-6 transform transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="text-4xl font-bold text-orange-500 mb-2">
              {isVisible ? <Counter target={500} suffix="+" /> : "0+"}
            </div>
            <div className="text-gray-600">Empresas confían en nosotros</div>
          </div>
          <div
            className={`p-6 transform transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="text-4xl font-bold text-orange-500 mb-2">
              {isVisible ? "24/7" : "0/0"}
            </div>
            <div className="text-gray-600">Atención de urgencias</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-200px * 8 - 3rem * 8));
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}
