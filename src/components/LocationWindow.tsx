import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Sparkles } from "lucide-react";

interface LocationWindowProps {
  name: string;
  postcode: string;
  address: string;
  hours: string;
  phone: string;
  illustration: string;
  detailLink: string;
  index: number;
}

export const LocationWindow = ({
  name,
  postcode,
  address,
  hours,
  phone,
  illustration,
  detailLink,
  index,
}: LocationWindowProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      className="relative group perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer Glow Effect */}
      <motion.div
        className="absolute -inset-4 bg-accent/20 rounded-lg blur-2xl"
        animate={{
          opacity: isHovered ? 0.6 : 0,
          scale: isHovered ? 1.05 : 0.95,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Main Window Frame */}
      <motion.div
        className="relative bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-200 p-1 rounded-lg shadow-2xl overflow-hidden"
        animate={{
          y: isHovered ? -8 : 0,
        }}
        transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
      >
        {/* Gold Border Frame */}
        <div className="absolute inset-0 border-4 border-accent/40 rounded-lg pointer-events-none" />
        
        {/* Corner Ornaments - Victorian Style */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-accent rounded-tl-lg" />
        <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-accent rounded-tr-lg" />
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-accent rounded-bl-lg" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-accent rounded-br-lg" />
        
        {/* Gold Corner Decorations */}
        <Sparkles className="absolute top-2 left-2 w-5 h-5 text-accent animate-pulse" />
        <Sparkles className="absolute top-2 right-2 w-5 h-5 text-accent animate-pulse" style={{ animationDelay: "0.5s" }} />
        <Sparkles className="absolute bottom-2 left-2 w-5 h-5 text-accent animate-pulse" style={{ animationDelay: "1s" }} />
        <Sparkles className="absolute bottom-2 right-2 w-5 h-5 text-accent animate-pulse" style={{ animationDelay: "1.5s" }} />

        {/* Inner Container with Paper Texture */}
        <div className="relative vintage-paper bg-gradient-to-b from-zinc-50 to-zinc-100 p-8 rounded-md shadow-inner">
          {/* Vintage Noise Overlay */}
          <div 
            className="absolute inset-0 opacity-10 rounded-md mix-blend-multiply"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
            }}
          />

          {/* Top Decorative Line */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

          {/* Illustration Container with Shadow */}
          <div className="relative h-80 mb-8 flex items-center justify-center">
            {/* Shadow behind illustration */}
            <motion.div
              className="absolute inset-0 bg-black/5 rounded-full blur-3xl"
              animate={{
                scale: isHovered ? 1.1 : 0.9,
                opacity: isHovered ? 0.3 : 0.15,
              }}
              transition={{ duration: 0.4 }}
            />
            
            <motion.img
              src={illustration}
              alt={name}
              className="relative h-full w-auto object-contain drop-shadow-2xl z-10"
              animate={{
                scale: isHovered ? 1.08 : 1,
                rotateY: isHovered ? 5 : 0,
              }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              style={{ filter: "contrast(1.1) brightness(1.05)" }}
            />

            {/* Floating Gold Particles */}
            {isHovered && (
              <>
                <motion.div
                  className="absolute top-10 left-10 w-2 h-2 bg-accent rounded-full"
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: [0, 1, 0], y: -50 }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                />
                <motion.div
                  className="absolute top-20 right-20 w-1.5 h-1.5 bg-accent rounded-full"
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: [0, 1, 0], y: -50 }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                  className="absolute bottom-20 left-20 w-1 h-1 bg-accent rounded-full"
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: [0, 1, 0], y: -50 }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </>
            )}
          </div>

          {/* Location Info */}
          <div className="relative text-center space-y-4">
            {/* Name with Underline Animation */}
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-5xl font-bold tracking-[0.3em] text-black mb-2 relative z-10">
                {name}
              </h2>
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-1 bg-accent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
              />
            </div>
            
            <p className="text-lg font-bold text-zinc-700 tracking-[0.2em] uppercase">
              {postcode}
            </p>

            {/* Ornate Divider */}
            <div className="flex items-center justify-center gap-3 my-6">
              <div className="w-12 h-px bg-accent" />
              <div className="w-3 h-3 border-2 border-accent rotate-45" />
              <div className="w-12 h-px bg-accent" />
            </div>

            {/* Details with Icons - Always Visible with Better Styling */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
              className="space-y-4 py-4"
            >
              <div className="flex items-start gap-3 text-left bg-white/50 p-3 rounded-md border border-accent/20">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-zinc-800 font-medium leading-relaxed">{address}</p>
              </div>
              
              <div className="flex items-start gap-3 text-left bg-white/50 p-3 rounded-md border border-accent/20">
                <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-zinc-800 font-medium leading-relaxed">{hours}</p>
              </div>
              
              <div className="flex items-start gap-3 text-left bg-white/50 p-3 rounded-md border border-accent/20">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-zinc-800 font-medium leading-relaxed">{phone}</p>
              </div>
            </motion.div>

            {/* Buttons with Enhanced Styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 + 1 }}
              className="flex gap-4 pt-6"
            >
              <Button
                variant="default"
                className="flex-1 bg-gradient-to-r from-accent via-accent to-gold-dark text-black hover:shadow-gold-intense font-bold tracking-widest uppercase border-2 border-accent hover:scale-105 transition-all duration-300 py-6 text-sm"
                asChild
              >
                <a href={detailLink}>Ver Detalles</a>
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-2 border-black text-black hover:bg-black hover:text-accent font-bold tracking-widest uppercase hover:scale-105 transition-all duration-300 py-6 text-sm"
                asChild
              >
                <a href="/booking">Reservar</a>
              </Button>
            </motion.div>
          </div>

          {/* Bottom Decorative Line */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        {/* Shimmer Effect on Hover */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
      </motion.div>
    </motion.div>
  );
};
