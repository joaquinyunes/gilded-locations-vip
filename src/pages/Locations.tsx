import { motion } from "framer-motion";
import { LocationCard } from "@/components/LocationCard";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-barbershop.jpg";
import location1 from "@/assets/location-1.jpg";
import location2 from "@/assets/location-2.jpg";
import location3 from "@/assets/location-3.jpg";
import { useEffect } from "react";

const locationsData = [
  {
    id: 1,
    name: "BOW LANE",
    address: "47 Bow Lane, London, EC4M 9DL",
    hours: "Monday to Friday: 9:00 - 20:00 | Weekends: Closed",
    phone: "020 8616 3708",
    imageUrl: location1,
    detailLink: "/locations/bow-lane",
  },
  {
    id: 2,
    name: "MAYFAIR",
    address: "5 Shepherd Market, London, W1J 7PD",
    hours: "Monday to Saturday: 9:00 - 20:00 | Sunday: 10:00 - 18:00",
    phone: "020 3602 2427",
    imageUrl: location2,
    detailLink: "/locations/mayfair",
  },
  {
    id: 3,
    name: "SPITALFIELDS",
    address: "4 Toynbee Street, London, E1 7NE",
    hours: "Every day: 10:00 - 18:00",
    phone: "020 7247 1524",
    imageUrl: location3,
    detailLink: "/locations/spitalfields",
  },
];

const Locations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src={heroImage}
            alt="VIP Barbershop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-accent mb-6 tracking-widest animate-glow-pulse">
              UBICACIONES
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto">
              Donde la precisión, el lujo y el estilo se encuentran
            </p>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-12 py-6 tracking-wider shadow-gold-intense hover:shadow-gold transition-all duration-300"
              asChild
            >
              <a href="/booking">RESERVAR AHORA</a>
            </Button>
          </motion.div>
        </div>

        {/* Decorative gold line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-accent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </section>

      {/* Phrase Divider */}
      <motion.section
        className="bg-card border-y border-accent/20 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <p className="text-xl md:text-2xl text-foreground/90 font-light italic tracking-wide">
            La precisión no es un acto, sino un hábito.
            <br />
            <span className="text-accent font-semibold not-italic">
              Encuentra tu santuario del estilo.
            </span>
          </p>
        </div>
      </motion.section>

      {/* Locations Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4 tracking-wider">
              NUESTRAS UBICACIONES
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {locationsData.map((location, index) => (
              <LocationCard
                key={location.id}
                {...location}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Locations;
