import { motion } from "framer-motion";
import { MapPin, Clock, Phone, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getLocationBySlug } from "@/data/locations";
import bowlaneInterior1 from "@/assets/bowlane-interior-1.jpg";
import bowlaneInterior2 from "@/assets/bowlane-interior-2.jpg";
import bowlaneInterior3 from "@/assets/bowlane-interior-3.jpg";
import spitalfieldsInterior1 from "@/assets/spitalfields-interior-1.jpg";
import mayfairInterior1 from "@/assets/mayfair-interior-1.jpg";

const LocationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = id ? getLocationBySlug(id) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!location) {
    navigate("/locations");
    return null;
  }

  // Get images based on location
  const getLocationImages = () => {
    switch (location.id) {
      case "bow-lane":
        return [bowlaneInterior1, bowlaneInterior2, bowlaneInterior3];
      case "spitalfields":
        return [spitalfieldsInterior1, bowlaneInterior2, bowlaneInterior3];
      case "mayfair":
        return [mayfairInterior1, bowlaneInterior2, bowlaneInterior3];
      default:
        return [bowlaneInterior1, bowlaneInterior2, bowlaneInterior3];
    }
  };

  const images = getLocationImages();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section with Image */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src={images[0]}
            alt={location.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
          
          {/* Floating Gold Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -60],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="backdrop-blur-md bg-black/30 p-8 md:p-12 rounded-lg border-2 border-accent/30 shadow-gold-intense"
          >
            <Sparkles className="w-12 h-12 text-accent mx-auto mb-4 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold text-accent mb-4 tracking-[0.3em]">
              {location.name}
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 tracking-wider">
              {location.postcode} · London
            </p>
            {location.walkInOnly && (
              <motion.p
                className="text-lg text-accent mt-4 tracking-widest uppercase font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Walk-in Only
              </motion.p>
            )}
          </motion.div>
        </div>

        <Button
          variant="outline"
          className="absolute top-6 left-6 z-20 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold tracking-wider transition-all duration-300"
          onClick={() => navigate("/locations")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver
        </Button>
      </section>

      {/* Description Section */}
      {location.description && (
        <section className="py-16 px-6 bg-card border-y border-accent/20">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-16 h-px bg-accent" />
                <Sparkles className="w-6 h-6 text-accent" />
                <div className="w-16 h-px bg-accent" />
              </div>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed italic">
                {location.description}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      <section className="py-16 px-6 vintage-paper">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-accent mb-12 tracking-[0.2em]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            GALERÍA
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group overflow-hidden rounded-lg border-4 border-accent/30 shadow-gold hover:shadow-gold-intense transition-all duration-500"
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
              >
                <img
                  src={image}
                  alt={`${location.name} interior ${index + 1}`}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-card p-8 rounded-lg border-2 border-accent/30 shadow-gold">
                <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4 flex items-center gap-3 tracking-wider">
                  <MapPin className="w-7 h-7" />
                  DIRECCIÓN
                </h2>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  {location.fullAddress}
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg border-2 border-accent/30 shadow-gold">
                <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4 flex items-center gap-3 tracking-wider">
                  <Phone className="w-7 h-7" />
                  CONTACTO
                </h2>
                <p className="text-foreground/80 text-lg font-bold tracking-wider">
                  {location.phone}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-lg border-2 border-accent/30 shadow-gold"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 flex items-center gap-3 tracking-wider">
                <Clock className="w-7 h-7" />
                HORARIOS
              </h2>
              <div className="space-y-4 text-foreground/80 text-lg">
                <div className="flex justify-between items-center border-b border-accent/20 pb-4">
                  <span className="font-semibold">Lunes – Viernes</span>
                  <span className="text-accent font-bold tracking-wider">
                    {location.hours.weekdays}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-accent/20 pb-4">
                  <span className="font-semibold">Sábado - Domingo</span>
                  <span className={location.hours.weekend === "Closed" ? "text-muted-foreground" : "text-accent font-bold tracking-wider"}>
                    {location.hours.weekend === "Closed" ? "Cerrado" : location.hours.weekend}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <motion.section
        className="px-6 pb-16 vintage-paper"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-accent mb-12 tracking-[0.2em]">
            UBICACIÓN
          </h2>
          <div className="relative rounded-lg overflow-hidden border-4 border-accent/40 shadow-gold-intense">
            {/* Ornate corners */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-accent z-10 rounded-tl-lg" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-accent z-10 rounded-tr-lg" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-accent z-10 rounded-bl-lg" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-accent z-10 rounded-br-lg" />
            
            <iframe
              src={`https://www.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}&z=16&output=embed`}
              className="w-full h-[450px]"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </motion.section>

      {/* Chamber 88 Section */}
      {location.hasChamber88 && (
        <section className="py-16 px-6 bg-card border-y border-accent/20">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="w-16 h-16 text-accent mx-auto mb-6 animate-pulse" />
              <h3 className="text-4xl md:text-5xl font-bold text-accent mb-6 tracking-[0.2em]">
                CHAMBER 88 VIP
              </h3>
              <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
                Disponible exclusivamente en esta ubicación. Nuestro lounge VIP ofrece
                tratamientos de barbería premium con nuestros maestros barberos más experimentados.
                Disfruta de whisky seleccionado mientras recibes el mejor servicio de grooming de tu vida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-10 py-6 tracking-wider shadow-gold-intense hover:shadow-gold transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href="/chamber88">Ver Tratamientos</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-card border-t border-accent/20">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-20 h-px bg-accent" />
              <Sparkles className="w-8 h-8 text-accent animate-pulse" />
              <div className="w-20 h-px bg-accent" />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-accent mb-6 tracking-[0.2em]">
              ¿LISTO PARA LA EXPERIENCIA VIP?
            </h3>
            <p className="text-lg text-foreground/70 mb-8">
              Reserva tu cita en {location.name} y descubre el arte del grooming premium.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent via-accent to-gold-dark text-accent-foreground hover:shadow-gold-intense font-bold text-xl px-16 py-8 tracking-[0.2em] shadow-gold hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="/booking">RESERVAR AHORA</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LocationDetail;
