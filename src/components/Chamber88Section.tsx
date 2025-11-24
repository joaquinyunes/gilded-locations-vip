import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import chamber88Bg from "@/assets/chamber88-bg.jpg";

export const Chamber88Section = () => {
  return (
    <section className="relative h-[500px] overflow-hidden my-16">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${chamber88Bg})`,
            backgroundAttachment: "fixed",
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Chamber 88 Title - Handwritten Style */}
          <h2 className="text-6xl md:text-7xl font-bold text-accent mb-6 tracking-wide italic">
            CHAMBER 88
          </h2>

          <p className="text-xl md:text-2xl text-foreground/90 mb-8 leading-relaxed">
            ¿Quieres llevar tu corte al siguiente nivel? Explora nuestra
            experiencia exclusiva solo con cita previa <span className="text-accent font-semibold">'Chamber 88'</span> en Bow Lane
          </p>

          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-12 py-6 tracking-wider shadow-gold-intense hover:shadow-gold transition-all duration-300 border-2 border-accent"
          >
            <a href="/chamber-88">VISITAR CHAMBER 88</a>
          </Button>
        </motion.div>
      </div>

      {/* Decorative Gold Lines */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-accent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-accent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      />
    </section>
  );
};
