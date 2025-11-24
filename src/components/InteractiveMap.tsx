import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  {
    id: "bow-lane",
    name: "BOW LANE",
    lat: 51.513141,
    lng: -0.093041,
    address: "47 Bow Lane, London, EC4M 9DL",
  },
  {
    id: "mayfair",
    name: "MAYFAIR",
    lat: 51.507351,
    lng: -0.147621,
    address: "5 Shepherd Market, London, W1J 7PD",
  },
  {
    id: "spitalfields",
    name: "SPITALFIELDS",
    lat: 51.519247,
    lng: -0.071489,
    address: "4 Toynbee Street, London, E1 7NE",
  },
];

export const InteractiveMap = () => {
  // Center of London, averaging all locations
  const centerLat = 51.513;
  const centerLng = -0.104;

  return (
    <section className="py-16 px-6 bg-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4 tracking-wider">
            ENCUÉNTRANOS
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-lg overflow-hidden border-4 border-accent shadow-gold-intense"
        >
          <iframe
            src={`https://www.google.com/maps?q=${centerLat},${centerLng}&z=13&output=embed`}
            className="w-full h-[500px] md:h-[600px]"
            allowFullScreen
            loading="lazy"
            title="Mapa de ubicaciones"
          />
        </motion.div>

        {/* Location Pins Info */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border-2 border-accent/30 rounded-lg p-6 text-center hover:border-accent transition-all duration-300 hover:shadow-gold"
            >
              <MapPin className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="text-xl font-bold text-accent mb-2 tracking-wider">
                {location.name}
              </h3>
              <p className="text-sm text-muted-foreground">{location.address}</p>
              <a
                href={`https://www.google.com/maps?q=${location.lat},${location.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-accent hover:text-accent/80 font-semibold text-sm underline"
              >
                Abrir en Google Maps
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
