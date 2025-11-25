import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { TreatmentCard } from "@/components/TreatmentCard";
import { Footer } from "@/components/Footer";
import { treatments, categories } from "@/data/treatments";
import { Scissors, Crown, Sparkles } from "lucide-react";
import serviceHaircut from "@/assets/service-haircut.jpg";
import serviceBeard from "@/assets/service-beard.jpg";
import serviceShave from "@/assets/service-shave.jpg";

const Treatments = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredTreatments =
    selectedCategory === "all"
      ? treatments
      : treatments.filter((t) => t.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-background">
          <div className="absolute inset-0 opacity-10 vintage-paper" />
          {/* Floating particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6 py-20">
          {/* Crown Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Crown className="w-20 h-20 text-accent mx-auto animate-pulse" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold text-accent mb-6 tracking-[0.3em]"
            style={{
              textShadow:
                "0 0 40px rgba(212, 175, 55, 0.5), 0 4px 20px rgba(0,0,0,0.5)",
            }}
          >
            TRATAMIENTOS
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-black/30 backdrop-blur-sm border-2 border-accent/50 rounded-lg p-8">
              <Sparkles className="w-8 h-8 text-accent mx-auto mb-4" />
              <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed">
                El arte del <span className="text-accent font-bold">grooming tradicional</span> combinado
                con técnicas modernas.
                <br />
                Cada servicio es una experiencia única de{" "}
                <span className="text-accent font-bold">lujo y precisión</span>.
              </p>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-4 mt-12"
          >
            <div className="w-24 h-px bg-accent" />
            <Scissors className="w-8 h-8 text-accent" />
            <div className="w-24 h-px bg-accent" />
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-6 bg-card border-y border-accent/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-bold tracking-wider transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-accent text-accent-foreground shadow-gold-intense scale-105"
                    : "bg-background border-2 border-accent/30 text-foreground hover:border-accent hover:shadow-gold"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-20 px-6 vintage-paper">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4 tracking-[0.2em]">
              NUESTROS SERVICIOS
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-20 h-px bg-accent" />
              <Sparkles className="w-6 h-6 text-accent" />
              <div className="w-20 h-px bg-accent" />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreatments.map((treatment, index) => (
              <TreatmentCard key={treatment.id} {...treatment} index={index} />
            ))}
          </div>

          {filteredTreatments.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-foreground/60">
                No hay servicios en esta categoría
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Premium Experience Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-card border-y border-accent/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Crown className="w-16 h-16 text-accent mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6 tracking-wider">
                EXPERIENCIA PREMIUM
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Cada tratamiento incluye productos de alta gama, ambiente exclusivo
                y la experiencia de nuestros maestros barberos con años de tradición.
              </p>
              <ul className="space-y-4">
                {[
                  "Productos premium seleccionados",
                  "Ambiente de lujo y comodidad",
                  "Bebidas de cortesía",
                  "Asesoramiento personalizado",
                  "Garantía de satisfacción",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <Sparkles className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src={serviceHaircut}
                alt="Servicio de corte"
                className="rounded-lg border-2 border-accent/30 shadow-gold hover:shadow-gold-intense transition-all duration-300 hover:scale-105"
              />
              <img
                src={serviceBeard}
                alt="Servicio de barba"
                className="rounded-lg border-2 border-accent/30 shadow-gold hover:shadow-gold-intense transition-all duration-300 hover:scale-105 mt-8"
              />
              <img
                src={serviceShave}
                alt="Servicio de afeitado"
                className="rounded-lg border-2 border-accent/30 shadow-gold hover:shadow-gold-intense transition-all duration-300 hover:scale-105 col-span-2"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Treatments;
