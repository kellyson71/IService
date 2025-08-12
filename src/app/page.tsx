"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Shield,
  MessageCircle,
  Star,
  Zap,
  DollarSign,
  Users,
  Clock,
  Award,
  Frown,
  DollarSignIcon,
  AlertTriangle,
  Timer,
  FileText,
  MessageSquare,
  CheckIcon,
  Rocket,
} from "lucide-react";
import HeroSection from "@/components/landing/hero-section";
import { ModernCard } from "@/components/landing/modern-card";
import { GradientText } from "@/components/landing/gradient-text";
import { FloatingElements } from "@/components/landing/floating-elements";
import { ScrollReveal } from "@/components/landing/scroll-reveal";
import { GridPattern } from "@/components/landing/grid-pattern";
import { ContactPopup } from "@/components/landing/contact-popup";
import { BentoGrid, BentoGridItem } from "@/components/landing/bento-grid";
import { Dots } from "@/components/landing/background-dots";

export default function LandingPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const painPoints = [
    {
      icon: <Frown className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />,
      title: "Horas perdidas procurando",
      description:
        "Você gasta HORAS no Google, WhatsApp e indicações que não dão em nada",
    },
    {
      icon: (
        <DollarSignIcon className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
      ),
      title: "Preços abusivos",
      description:
        "Paga MUITO CARO porque não tem como comparar preços facilmente",
    },
    {
      icon: <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />,
      title: "Medo de ser enganado",
      description:
        "Nunca sabe se o profissional é confiável ou se vai fazer um bom trabalho",
    },
    {
      icon: <Timer className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />,
      title: "Demora para conseguir",
      description:
        "Quando finalmente acha alguém, demora DIAS para conseguir um horário",
    },
  ];

  const benefits = [
    {
      icon: <Zap className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Encontre em 30 segundos",
      description:
        "Digite o que precisa e veja profissionais disponíveis NA HORA",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: <DollarSign className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Economize até 40%",
      description: "Compare preços e escolha a melhor oferta. Sem surpresas!",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "100% Verificados",
      description:
        "Todos os profissionais são checados e avaliados por clientes reais",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Chat Direto",
      description: "Negocie preço, horário e detalhes direto pelo app",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Descreva o que precisa",
      description: "Em 10 segundos, conte o que você quer fazer",
      icon: (
        <FileText className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-600" />
      ),
    },
    {
      step: "2",
      title: "Receba propostas",
      description: "Profissionais próximos enviam orçamentos instantaneamente",
      icon: (
        <MessageSquare className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-green-600" />
      ),
    },
    {
      step: "3",
      title: "Escolha e contrate",
      description: "Compare, escolha e agende. Simples assim!",
      icon: (
        <CheckIcon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-purple-600" />
      ),
    },
  ];

  const bentoItems = [
    {
      title: (
        <GradientText gradient="from-blue-600 to-purple-600">
          +10.000 Profissionais
        </GradientText>
      ),
      description:
        "Rede verificada de especialistas em toda região metropolitana",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[4rem] sm:min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 items-center justify-center">
          <Users className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-blue-600" />
        </div>
      ),
      className: "md:col-span-2",
      icon: <Users className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />,
    },
    {
      title: (
        <GradientText gradient="from-green-600 to-emerald-600">
          Resposta em 5min
        </GradientText>
      ),
      description: "Tempo médio para receber a primeira proposta",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[4rem] sm:min-h-[6rem] rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 items-center justify-center">
          <Clock className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-green-600" />
        </div>
      ),
      className: "md:col-span-1",
      icon: <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />,
    },
    {
      title: (
        <GradientText gradient="from-purple-600 to-pink-600">
          98% Satisfação
        </GradientText>
      ),
      description: "Taxa de satisfação dos nossos clientes",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[4rem] sm:min-h-[6rem] rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 items-center justify-center">
          <Award className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-purple-600" />
        </div>
      ),
      className: "md:col-span-1",
      icon: <Award className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600" />,
    },
    {
      title: (
        <GradientText gradient="from-orange-600 to-red-600">
          Garantia Total
        </GradientText>
      ),
      description:
        "Proteção completa em todos os serviços contratados pela plataforma",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[4rem] sm:min-h-[6rem] rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 items-center justify-center">
          <Shield className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-orange-600" />
        </div>
      ),
      className: "md:col-span-2",
      icon: <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-orange-600" />,
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-white dark:bg-neutral-950">
      {/* Global Background with Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950" />
        <GridPattern className="opacity-30" />
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Pain Points Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Dots dotColor="#ef4444" />
        </div>
        <FloatingElements />

        <div className="container mx-auto relative z-10 px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                <GradientText gradient="from-red-600 via-orange-600 to-red-600">
                  Cansado de Passar Raiva?
                </GradientText>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed px-4">
                <span className="font-bold text-red-600">PARE DE SOFRER!</span>{" "}
                Estes problemas acabaram para você:
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {painPoints.map((pain, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <ModernCard className="group h-full">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {pain.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                        <GradientText>{pain.title}</GradientText>
                      </h3>
                      <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {pain.description}
                      </p>
                    </div>
                  </div>
                </ModernCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Dots dotColor="#10b981" />
        </div>
        <FloatingElements />

        <div className="container mx-auto relative z-10 px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 text-sm sm:text-base lg:text-lg font-semibold mb-6 sm:mb-8">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 sm:mr-3 animate-pulse" />
                <GradientText gradient="from-green-600 to-blue-600">
                  A SOLUÇÃO QUE VOCÊ ESPERAVA!
                </GradientText>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                <GradientText gradient="from-green-600 via-blue-600 to-purple-600">
                  Transforme Sua Vida em 30 Segundos
                </GradientText>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed px-4">
                Imagine nunca mais perder tempo procurando serviços.{" "}
                <span className="font-bold text-green-600">É REAL!</span>
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <ModernCard className="text-center group h-full">
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-4 sm:mb-6">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${benefit.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {benefit.icon}
                    </div>
                    <div
                      className={`absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${benefit.gradient} rounded-xl sm:rounded-2xl opacity-20 blur-xl group-hover:blur-2xl transition-all duration-300`}
                    ></div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                    <GradientText>{benefit.title}</GradientText>
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </ModernCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <GridPattern />
        </div>
        <FloatingElements />

        <div className="container mx-auto relative z-10 px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                <GradientText gradient="from-neutral-900 via-neutral-700 to-neutral-900 dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-100">
                  Números que Impressionam
                </GradientText>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed px-4">
                Veja por que milhares de pessoas confiam em nossa plataforma
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[16rem] lg:md:auto-rows-[20rem]">
              {bentoItems.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  className={item.className}
                  icon={item.icon}
                />
              ))}
            </BentoGrid>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Dots dotColor="#3b82f6" />
        </div>
        <FloatingElements />

        <div className="container mx-auto relative z-10 px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                <GradientText gradient="from-blue-600 via-purple-600 to-pink-600">
                  É Mais Fácil do que Pedir Pizza!
                </GradientText>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed px-4">
                Em apenas{" "}
                <span className="font-bold text-blue-600">
                  3 passos simples
                </span>
                , você resolve qualquer problema doméstico:
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {howItWorks.map((step, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <ModernCard className="text-center group relative h-full">
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="pt-6 sm:pt-8">
                    <div className="mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                      {step.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                      <GradientText>{step.title}</GradientText>
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </ModernCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-neutral-800 dark:from-neutral-950 dark:to-neutral-900"></div>
        <div className="absolute inset-0 opacity-30">
          <Dots dotColor="#ffffff" />
        </div>
        <FloatingElements />

        <div className="container mx-auto text-center relative z-10 px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">
              Não Perca Mais Tempo!
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              Junte-se a milhares de pessoas que já{" "}
              <span className="font-bold text-yellow-400">TRANSFORMARAM</span> a
              forma como contratam serviços domésticos
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 max-w-2xl mx-auto">
              <a href="/login">
                <Button
                  size="lg"
                  className="bg-white text-neutral-900 hover:bg-neutral-100 hover:scale-105 transition-all duration-300 shadow-2xl px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-xl sm:rounded-2xl w-full sm:w-auto"
                >
                  Começar Agora - Grátis
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-neutral-900 bg-transparent hover:scale-105 transition-all duration-300 shadow-2xl px-6 sm:px-8 py-4 sm:py-6 text-lg sm:text-xl font-semibold rounded-xl sm:rounded-2xl w-full sm:w-auto"
              >
                Ver Demonstração
              </Button>
            </div>

            {/* Final Social Proof */}
            <ModernCard className="max-w-2xl mx-auto bg-white/10 border-white/20">
              <div className="flex justify-center mb-3 sm:mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-base sm:text-lg font-semibold text-white mb-2">
                "Mudou minha vida! Nunca mais perco tempo procurando."
              </p>
              <p className="text-sm sm:text-base text-neutral-300">
                - Maria Silva, Caruaru - PE
              </p>
            </ModernCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 px-4 bg-neutral-50 dark:bg-neutral-900 relative overflow-hidden">
        <FloatingElements />
        <div className="container mx-auto relative z-10 px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="relative">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg" />
                <div className="absolute inset-0 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-50 blur-sm"></div>
              </div>
              <span className="text-xl sm:text-2xl font-semibold">
                <GradientText>ServiçosFácil</GradientText>
              </span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-neutral-400">
                © 2024 ServiçosFácil - Todos os direitos reservados
              </p>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-500 mt-1 sm:mt-2 flex items-center justify-center md:justify-end gap-1">
                Transformando vidas através da tecnologia{" "}
                <Rocket className="w-3 h-3 sm:w-4 sm:h-4" />
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Popup */}
      <ContactPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
}
