"use client";

import { useState, useEffect } from "react";
import { Boxes } from "@/components/landing/background-boxes";
import { GradientText } from "@/components/landing/gradient-text";
import { FloatingElements } from "@/components/landing/floating-elements";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const words = "Nunca mais perca tempo procurando serviços domésticos".split(
    " "
  );

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center overflow-hidden min-h-[80vh] px-4 py-8">
      {/* Modern Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-neutral-50 via-white to-neutral-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950" />
        <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)] pointer-events-none">
          <div className="opacity-20">
            <Boxes />
          </div>
        </div>
      </div>

      <FloatingElements />

      <Navbar />

      {/* Subtle border accents */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-neutral-200 to-transparent dark:via-neutral-800" />
      <div className="absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-neutral-200 to-transparent dark:via-neutral-800" />
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent dark:via-neutral-800" />

      <div className="px-8 py-12 md:py-20 relative z-30 w-full">
        <div className="grid lg:grid-cols-5 gap-16 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="text-left lg:col-span-3 px-4 lg:px-0">
            <div
              className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-sm font-medium mb-8 transition-all duration-500 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              <GradientText gradient="from-blue-600 to-purple-600">
                Conecte-se instantaneamente
              </GradientText>
            </div>

            <h1 className="relative z-10 max-w-4xl text-4xl font-bold md:text-5xl xl:text-7xl leading-tight mb-8 lg:text-4xl">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={`mr-3 inline-block transition-all duration-500 ease-out ${
                    isVisible
                      ? "opacity-100 translate-y-0 blur-0"
                      : "opacity-0 translate-y-4 blur-sm"
                  }`}
                  style={{
                    transitionDelay: `${index * 100 + 400}ms`,
                  }}
                >
                  <GradientText gradient="from-neutral-900 via-neutral-700 to-neutral-900 dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-100">
                    {word}
                  </GradientText>
                </span>
              ))}
            </h1>

            <div
              className={`relative z-10 space-y-3 mb-8 transition-all duration-500 ease-out ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transitionDelay: "1200ms",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-lg text-neutral-600 dark:text-neutral-400">
                  <span className="font-semibold text-green-600">
                    Encontre profissionais em 30 segundos
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-lg text-neutral-600 dark:text-neutral-400">
                  <span className="font-semibold text-blue-600">
                    Preços até 40% mais baratos
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-lg text-neutral-600 dark:text-neutral-400">
                  <span className="font-semibold text-purple-600">
                    100% verificados e avaliados
                  </span>
                </span>
              </div>
            </div>

            <div
              className={`relative z-10 flex flex-col sm:flex-row gap-4 transition-all duration-500 ease-out ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transitionDelay: "1600ms",
              }}
            >
              <button
                onClick={scrollToBottom}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <span className="relative z-10 flex items-center gap-2">
                  ✨ Começar Agora - Grátis
                </span>
              </button>
              <button
                onClick={scrollToBottom}
                className="group relative overflow-hidden rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm px-8 py-4 font-semibold text-neutral-700 dark:text-neutral-300 transition-all duration-300 hover:scale-105 hover:bg-white dark:hover:bg-neutral-900 hover:shadow-xl"
              >
                <span className="relative z-10">Ver Como Funciona</span>
              </button>
            </div>

            {/* Modern Social Proof */}
            <div
              className={`relative z-10 mt-12 transition-all duration-500 ease-out ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transitionDelay: "1800ms",
              }}
            >
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800 border-2 border-white dark:border-neutral-900 flex items-center justify-center text-neutral-600 dark:text-neutral-400 font-medium text-sm"
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    +2.847 pessoas do interior já economizaram tempo
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-400 text-sm">
                        ★
                      </span>
                    ))}
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 ml-2">
                      4.9/5 (1.234 avaliações)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div
            className={`relative z-10 lg:col-span-2 transition-all duration-700 ease-out px-4 lg:px-0 ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-95"
            }`}
            style={{
              transitionDelay: "2000ms",
            }}
          >
            <div className="relative">
              <img
                src="/images/cleaning-professionals.png"
                alt="Profissionais de limpeza doméstica - homem e mulher com equipamentos de limpeza"
                className="w-full h-auto max-w-lg mx-auto drop-shadow-2xl"
              />

              {/* Floating elements around the image */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse" />
              <div
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse"
                style={{ animationDelay: "1s" }}
              />

              {/* Decorative elements */}
              <div
                className="absolute top-8 -left-8 text-2xl animate-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                ✨
              </div>
              <div
                className="absolute bottom-12 -right-8 text-2xl animate-bounce"
                style={{ animationDelay: "1.5s" }}
              >
                🏠
              </div>
              <div
                className="absolute top-1/2 -right-12 text-xl animate-bounce"
                style={{ animationDelay: "2.5s" }}
              >
                💫
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Navbar = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <nav className="flex w-full items-center justify-between border-b border-neutral-200/50 dark:border-neutral-800/50 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-md px-6 py-4 relative z-30">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="size-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg" />
          <div className="absolute inset-0 size-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-50 blur-sm"></div>
        </div>
        <h1 className="text-base font-bold md:text-2xl">
          <GradientText gradient="from-neutral-900 to-neutral-700 dark:from-neutral-100 dark:to-neutral-300">
            ServiçosFácil
          </GradientText>
        </h1>
      </div>
      <button
        onClick={scrollToBottom}
        className="group relative overflow-hidden rounded-xl bg-neutral-900 dark:bg-neutral-100 px-6 py-2 font-semibold text-white dark:text-neutral-900 transition-all duration-300 hover:scale-105 hover:shadow-lg md:px-8"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        <span className="relative z-10">Cadastre-se</span>
      </button>
    </nav>
  );
};
