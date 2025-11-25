import { motion } from "framer-motion";
import { Clock, Tag, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface TreatmentCardProps {
  name: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
  image: string;
  index: number;
}

export const TreatmentCard = ({
  name,
  description,
  duration,
  price,
  features,
  image,
  index,
}: TreatmentCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute -inset-2 bg-accent/20 rounded-lg blur-xl"
        animate={{
          opacity: isHovered ? 0.6 : 0,
          scale: isHovered ? 1.05 : 0.95,
        }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative bg-card border-2 border-accent/30 rounded-lg overflow-hidden shadow-gold hover:shadow-gold-intense transition-all duration-500">
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          {/* Price Badge */}
          <motion.div
            className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold text-xl shadow-gold-intense"
            animate={{
              rotate: isHovered ? [0, -5, 5, 0] : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            {price}
          </motion.div>

          {/* Floating Particles */}
          {isHovered && (
            <>
              <motion.div
                className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: [0, 1, 0], y: -40 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-32 right-16 w-1.5 h-1.5 bg-accent rounded-full"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: [0, 1, 0], y: -40 }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          {/* Title with underline */}
          <div className="relative">
            <h3 className="text-2xl font-bold text-accent tracking-wider mb-2">
              {name}
            </h3>
            <div className="w-16 h-1 bg-accent" />
          </div>

          <p className="text-foreground/80 leading-relaxed">{description}</p>

          {/* Duration Badge */}
          <div className="flex items-center gap-2 text-accent">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">{duration}</span>
          </div>

          {/* Expand Features Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-accent hover:text-gold-light transition-colors flex items-center gap-2 font-semibold"
          >
            <Sparkles className="w-4 h-4" />
            {isExpanded ? "Ocultar detalles" : "Ver detalles"}
          </button>

          {/* Features List - Expandable */}
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 space-y-2 border-t border-accent/20">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -20 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <Tag className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/70">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Book Button */}
          <Button
            className="w-full bg-gradient-to-r from-accent via-accent to-gold-dark text-accent-foreground hover:shadow-gold-intense font-bold tracking-wider transition-all duration-300 hover:scale-105"
            size="lg"
          >
            RESERVAR AHORA
          </Button>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent rounded-tl-lg opacity-50" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent rounded-br-lg opacity-50" />
      </div>
    </motion.div>
  );
};
