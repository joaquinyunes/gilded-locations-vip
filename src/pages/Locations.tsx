import { motion } from "framer-motion";
import { LocationWindow } from "@/components/LocationWindow";
import { Chamber88Section } from "@/components/Chamber88Section";
import { InteractiveMap } from "@/components/InteractiveMap";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import illustration1 from "@/assets/illustration-1.jpg";
import illustration2 from "@/assets/illustration-2.jpg";
import illustration3 from "@/assets/illustration-3.jpg";

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-zinc-700 to-zinc-600 py-20 px-6 text-center border-b-4 border-accent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-widest">
            UBICACIONES
          </h1>
          <p className="text-xl md:text-2xl text-zinc-200 max-w-4xl mx-auto leading-relaxed">
            Cada movimiento es calculado, preciso y deliberado. No elegimos
            cualquier ubicación para nuestras barberías, hay un significado
            histórico y cultural en cada uno de nuestros salones de belleza.
          </p>
        </motion.div>
      </section>

      {/* Location Windows Grid */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-zinc-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {locationsData.map((location, index) => (
              <LocationWindow key={location.id} {...location} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Chamber 88 Section */}
      <Chamber88Section />

      {/* Interactive Map */}
      <InteractiveMap />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Locations;
