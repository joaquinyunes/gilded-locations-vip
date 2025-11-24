import { motion, useScroll, useTransform } from "framer-motion";
import { LocationWindow } from "@/components/LocationWindow";
import { Chamber88Section } from "@/components/Chamber88Section";
import { InteractiveMap } from "@/components/InteractiveMap";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import illustration1 from "@/assets/illustration-1.jpg";
import illustration2 from "@/assets/illustration-2.jpg";
import illustration3 from "@/assets/illustration-3.jpg";
import { Scissors, Crown } from "lucide-react";

const locationsData = [
  {
    id: 1,
    name: "BOW LANE",
    postcode: "EC4M 9DL",
    address: "47 Bow Lane, London, EC4M 9DL",
    hours: "Lunes a Viernes: 9:00 - 20:00 | Sábado-Domingo: Cerrado",
    phone: "020 8616 3708",
    illustration: illustration1,
    detailLink: "/locations/bow-lane",
  },
  {
    id: 2,
    name: "SPITALFIELDS",
    postcode: "E1 7NE",
    address: "4 Toynbee Street, London, E1 7NE",
    hours: "Lunes a Sábado: 9:00 - 20:00 | Domingo: 10:00 - 18:00",
    phone: "020 7247 1524",
    illustration: illustration2,
    detailLink: "/locations/spitalfields",
  },
  {
    id: 3,
    name: "MAYFAIR",
    postcode: "W1J 7PD",
    address: "5 Shepherd Market, London, W1J 7PD",
    hours: "Todos los días: 10:00 - 18:00",
    phone: "020 3602 2427",
    illustration: illustration3,
    detailLink: "/locations/mayfair",
  },
];

const Locations = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background" ref={ref}>
      {/* Hero Header Section with Parallax */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-600">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }} />
        </div>

        {/* Floating Gold Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.div
          className="relative z-10 text-center px-6 py-20"
          style={{ y, opacity }}
        >
          {/* Decorative Top Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="w-24 h-px bg-accent" />
            <Scissors className="w-10 h-10 text-accent animate-pulse" />
            <div className="w-24 h-px bg-accent" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-[0.3em]"
            style={{
              textShadow: "0 0 40px rgba(212, 175, 55, 0.5), 0 4px 20px rgba(0,0,0,0.5)",
            }}
          >
            UBICACIONES
          </motion.h1>

          {/* Subtitle with Ornate Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative bg-black/30 backdrop-blur-sm border-2 border-accent/50 rounded-lg p-8">
              {/* Corner Decorations */}
              <Crown className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 text-accent" />
              
              <p className="text-xl md:text-3xl text-zinc-100 leading-relaxed font-light">
                Cada movimiento es <span className="text-accent font-bold">calculado, preciso y deliberado</span>.
                <br />
                No elegimos cualquier ubicación para nuestras barberías,
                <br />
                hay un <span className="text-accent font-bold">significado histórico y cultural</span> en cada uno de nuestros salones.
              </p>
            </div>
          </motion.div>

          {/* Decorative Bottom Element */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-3 mt-12"
          >
            <div className="w-16 h-px bg-accent" />
            <div className="w-3 h-3 border-2 border-accent rotate-45" />
            <div className="w-16 h-px bg-accent" />
          </motion.div>
        </motion.div>

        {/* Bottom Border with Animation */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-accent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
      </section>

      {/* Location Windows Section */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-zinc-600 via-zinc-800 to-black overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-5 vintage-paper" />

        <div className="container mx-auto relative z-10">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6 tracking-wider">
              NUESTROS SALONES EXCLUSIVOS
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-20 h-px bg-accent" />
              <div className="w-4 h-4 border-2 border-accent rotate-45" />
              <div className="w-20 h-px bg-accent" />
            </div>
          </motion.div>

          {/* Windows Grid */}
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {locationsData.map((location, index) => (
              <LocationWindow key={location.id} {...location} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Chamber 88 Section */}
      <Chamber88Section />

      {/* Interactive Map Section */}
      <InteractiveMap />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Locations;
