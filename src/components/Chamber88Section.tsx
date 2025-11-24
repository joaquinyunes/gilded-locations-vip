import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Crown, Sparkles, Star } from "lucide-react";
import chamber88Bg from "@/assets/chamber88-bg.jpg";
import { useRef } from "react";

export const Chamber88Section = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative h-[600px] overflow-hidden my-20">
      {/* Animated Background with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: `url(${chamber88Bg})`,
          }}
        />
        {/* Multiple Overlay Layers for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10" />
      </motion.div>

      {/* Top Gold Border with Animation */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-accent to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      {/* Decorative Top Pattern */}
      <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-start gap-8 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-px h-20 bg-gradient-to-b from-accent to-transparent"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      {/* Floating Gold Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        style={{ opacity }}
      >
        {/* Crown Icon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <Crown className="w-16 h-16 text-accent mx-auto animate-pulse" />
        </motion.div>

        {/* Title with Ornate Styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-8"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 blur-3xl bg-accent/30" />
          
          <h2 className="relative text-6xl md:text-8xl font-bold text-accent tracking-wider mb-4"
              style={{
                fontFamily: "'Cinzel', serif",
                textShadow: "0 0 30px rgba(212, 175, 55, 0.5), 0 0 60px rgba(212, 175, 55, 0.3)",
              }}>
            CHAMBER <span className="italic">88</span>
          </h2>

          {/* Decorative Stars */}
          <div className="flex justify-center gap-4 mb-4">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <Star className="w-5 h-5 text-accent fill-accent" />
            <Star className="w-4 h-4 text-accent fill-accent" />
          </div>
        </motion.div>

        {/* Description Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mb-10"
        >
          <div className="relative bg-black/40 backdrop-blur-sm border-2 border-accent/40 rounded-lg p-8">
            {/* Corner Sparkles */}
            <Sparkles className="absolute -top-2 -left-2 w-6 h-6 text-accent" />
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-accent" />
            <Sparkles className="absolute -bottom-2 -left-2 w-6 h-6 text-accent" />
            <Sparkles className="absolute -bottom-2 -right-2 w-6 h-6 text-accent" />

            <p className="text-xl md:text-2xl text-foreground leading-relaxed font-light">
              ¿Quieres llevar tu corte al <span className="text-accent font-bold">siguiente nivel</span>?
              <br />
              Explora nuestra experiencia exclusiva solo con cita previa
              <br />
              <span className="text-accent font-bold text-3xl italic">'Chamber 88'</span> en Bow Lane
            </p>
          </div>
        </motion.div>

        {/* CTA Button with Enhanced Styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="relative bg-gradient-to-r from-accent via-accent to-gold-dark text-black hover:shadow-gold-intense font-bold text-xl px-16 py-8 tracking-widest uppercase border-4 border-accent hover:scale-105 transition-all duration-300 overflow-hidden group"
            asChild
          >
            <a href="/chamber-88" className="relative z-10">
              <span className="relative z-10">Visitar Chamber 88</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </a>
          </Button>
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-8 flex items-center gap-3"
        >
          <div className="w-20 h-px bg-accent" />
          <Crown className="w-6 h-6 text-accent" />
          <div className="w-20 h-px bg-accent" />
        </motion.div>
      </motion.div>

      {/* Bottom Gold Border with Animation */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-accent to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />

      {/* Decorative Bottom Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden rotate-180">
        <div className="absolute inset-0 flex justify-center items-start gap-8 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-px h-20 bg-gradient-to-b from-accent to-transparent"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
