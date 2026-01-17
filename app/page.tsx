'use client';

import VisualTargets from '@/components/VisualTargets';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* New Typographic Hero Section */}
      <motion.section
        initial="initial"
        animate="animate"
        className="relative w-full min-h-[80vh] flex flex-col justify-end px-4 md:px-8 pb-32 pt-32"
      >
        <div className="max-w-7xl mx-auto w-full relative">
          <div className="flex flex-col gap-8 md:gap-12">
            {/* Top Meta (Hidden on Mobile) */}
            <motion.div
              variants={{
                initial: { opacity: 0, filter: "blur(5px)" },
                animate: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="hidden md:flex justify-between items-start text-xs text-accent/70"
            >
              <div className="space-y-1">
                <p>TU PORTAL DEL CLIENTE</p>
                <p>ESTADO: INICIADO</p>
              </div>
              <div className="text-right space-y-1">
                <p>CÓDIGO: BS-2026-X1</p>
                <p>UBICACIÓN: SANTO DOMINGO</p>
              </div>
            </motion.div>

            {/* Mobile Top Meta */}
            <div className="flex md:hidden justify-between items-start text-[10px] text-accent/70 mb-4">
              <p>TU PORTAL DEL CLIENTE</p>
            </div>

            {/* Main Title - Focus Pull Effect */}
            <div className="overflow-hidden">
              <motion.h1
                variants={{
                  initial: { opacity: 0, scale: 1.1, filter: "blur(20px)" },
                  animate: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="text-[14vw] md:text-[clamp(3rem,14vw,12rem)] font-bold leading-[0.8] tracking-tighter text-accent mix-blend-screen -ml-1"
              >
                BERENJENA<br />STUDIO
              </motion.h1>
            </div>

            {/* Progress & Call to Action - Desktop Layout */}
            <div className="hidden md:grid grid-cols-12 gap-8 border-t border-accent pt-12 items-end overflow-hidden">
              <motion.div
                variants={{
                  initial: { opacity: 0, filter: "blur(10px)" },
                  animate: { opacity: 1, filter: "blur(0px)", transition: { duration: 1, ease: "easeOut", delay: 0.2 } }
                }}
                className="col-span-3"
              >
                <p className="text-[10px] mb-2 text-accent/70 uppercase tracking-wider">
                  PROCESO DE COMPLETADO
                </p>
                <p className="text-[8rem] leading-[0.8] font-bold tracking-tighter text-accent">
                  15<span className="text-4xl align-top">%</span>
                </p>
              </motion.div>
              <motion.div
                variants={{
                  initial: { opacity: 0, filter: "blur(5px)" },
                  animate: { opacity: 1, filter: "blur(0px)", transition: { duration: 1, ease: "easeOut", delay: 0.4 } }
                }}
                className="col-span-6 col-start-8 text-right"
              >
                <a
                  href="https://berenjenastudio.com"
                  target="_blank"
                  className="inline-block text-[10px] border border-accent px-6 py-2 hover:bg-accent hover:text-black transition-colors duration-300"
                >
                  [ VER WEBSITE EN VIVO ]
                </a>
              </motion.div>
            </div>

            {/* Progress & Call to Action - Mobile Control Cluster */}
            <div className="flex md:hidden w-full border-t border-accent pt-6 mt-8">
              <div className="flex w-full items-stretch h-14">
                {/* Action Button (70%) */}
                <div className="w-[70%] border border-accent border-r-0 flex items-center justify-center bg-accent text-black hover:bg-white transition-colors">
                  <a
                    href="https://berenjenastudio.com"
                    target="_blank"
                    className="text-[10px] font-bold tracking-widest uppercase w-full h-full flex items-center justify-center"
                  >
                    [ VER WEBSITE ]
                  </a>
                </div>
                {/* Status Indicator (30%) */}
                <div className="w-[30%] border border-accent flex flex-col items-center justify-center bg-black">
                  <span className="text-[9px] text-accent/70 uppercase leading-none mb-1">PROGRESO</span>
                  <span className="text-2xl font-bold text-accent leading-none font-mono">15%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Connective Thread Line */}
      <div className="fixed left-8 top-0 bottom-0 w-[1px] bg-zinc-900 z-0 hidden md:block"></div>

      {/* Connective Grid Line */}
      <div className="max-w-7xl mx-auto w-full h-[1px] bg-accent/30 mb-20"></div>

      {/* Live Feed / Action Queue */}
      <section className="max-w-7xl mx-auto mb-40 px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 md:gap-32">
          {/* Column 1: Doing */}
          <div className="space-y-8">
            <h3 className="text-xs font-bold text-accent mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              [ LOG: EN PROCESO ]
            </h3>
            <ul className="space-y-12">
              <li className="group">
                <p className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  DISEÑO DE CONCEPTO
                </p>
                <p className="text-[10px] md:text-xs text-accent/70 leading-relaxed max-w-sm">
                  Dirección de arte. Narrativa visual. Moodboards de alto impacto. Ejecución técnica inicial.
                </p>
              </li>

              <li className="opacity-30">
                <p className="text-[10px] font-bold mb-2">[ SIGUIENTE ]</p>
                <p className="text-xl md:text-2xl font-bold text-accent mb-2">
                  DESARROLLO DE INTERFAZ
                </p>
                <p className="text-[10px] md:text-xs text-accent leading-relaxed max-w-sm">
                  Implementación de componentes React. Integración de animaciones.
                </p>
              </li>
            </ul>
          </div>


        </div>
      </section>

      {/* Visual Targets */}
      <VisualTargets />

      {/* The Roadmap (Minimalist List) with Animations */}
      <section className="max-w-7xl mx-auto space-y-px mb-20 md:mb-48 px-4 md:px-8">
        {/* FASE 01 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-12 gap-4 py-8 border-t border-accent/20 group hover:bg-accent/5 transition-colors"
        >
          <div className="md:col-span-2 text-[10px] text-accent/50">FASE 01</div>
          <div className="md:col-span-4 text-2xl font-bold text-accent opacity-50">CONCEPTO</div>
          <div className="md:col-span-4 text-[10px] text-accent/70 pt-2">DEFINICIÓN DE NARRATIVA VISUAL Y OBJETIVOS.</div>
          <div className="md:col-span-2 text-right text-[10px] text-accent border border-accent/20 px-2 py-1 self-start inline-block">
            COMPLETADO
          </div>
        </motion.div>

        {/* FASE 02 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-12 gap-4 py-8 border-t border-b border-accent group"
        >
          <div className="md:col-span-2 text-[10px] text-accent font-bold">FASE 02</div>
          <div className="md:col-span-4 text-2xl font-bold text-accent">ESTRUCTURA</div>
          <div className="md:col-span-4 text-[10px] text-accent pt-2">UX COMO NARRATIVA. WIREFRAMES Y DISEÑO DE INTERFAZ.</div>
          <div className="md:col-span-2 text-right text-[10px] bg-accent text-black px-2 py-1 self-start inline-block font-bold">
            EN PROGRESO
          </div>
        </motion.div>

        {/* FASE 03 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-12 gap-4 py-8 border-b border-accent/20 opacity-50 hover:opacity-100 transition-opacity"
        >
          <div className="md:col-span-2 text-[10px]">FASE 03</div>
          <div className="md:col-span-4 text-2xl font-bold">OPTIMIZACIÓN</div>
          <div className="md:col-span-4 text-[10px] pt-2">INDEXACIÓN, PALABRAS CLAVE Y RENDIMIENTO.</div>
          <div className="md:col-span-2 text-right text-[10px] border border-accent/20 px-2 py-1 self-start inline-block">
            PENDIENTE
          </div>
        </motion.div>

        {/* FASE 04 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-12 gap-4 py-8 border-b border-accent/20 opacity-50 hover:opacity-100 transition-opacity"
        >
          <div className="md:col-span-2 text-[10px]">FASE 04</div>
          <div className="md:col-span-4 text-2xl font-bold">ROLLOUT</div>
          <div className="md:col-span-4 text-[10px] pt-2">LANZAMIENTO OFICIAL Y MANTENIMIENTO.</div>
          <div className="md:col-span-2 text-right text-[10px] border border-accent/20 px-2 py-1 self-start inline-block">
            FUTURO
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-8 py-12 border-t border-accent/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] text-accent/60">
          <div className="font-bold tracking-widest">BERENJENASTUDIO</div>
          <div>© 2026 NAAV STUDIO</div>
        </div>
      </footer>
    </main>
  );
}
