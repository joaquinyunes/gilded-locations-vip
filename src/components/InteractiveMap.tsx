import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
  {
    id: "bow-lane",
    name: "BOW LANE",
    lat: 51.513141,
    lng: -0.093041,
    address: "47 Bow Lane, London, EC4M 9DL",
    phone: "020 8616 3708",
    hours: "Lun-Vie: 9:00-20:00",
  },
  {
    id: "mayfair",
    name: "MAYFAIR",
    lat: 51.507351,
    lng: -0.147621,
    address: "5 Shepherd Market, London, W1J 7PD",
    phone: "020 3602 2427",
    hours: "Lun-Sáb: 9:00-20:00",
  },
  {
    id: "spitalfields",
    name: "SPITALFIELDS",
    lat: 51.519247,
    lng: -0.071489,
    address: "4 Toynbee Street, London, E1 7NE",
    phone: "020 7247 1524",
    hours: "Todos: 10:00-18:00",
  },
];

export const InteractiveMap = () => {
  const centerLat = 51.513;
  const centerLng = -0.104;

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-zinc-900 via-black to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--accent)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-accent" />
            <Navigation className="w-8 h-8 text-accent" />
            <div className="w-16 h-px bg-accent" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-accent mb-6 tracking-wider">
            ENCUÉNTRANOS
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visita cualquiera de nuestras ubicaciones exclusivas en el corazón de Londres
          </p>
        </motion.div>

        {/* Map Container with Decorative Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-16"
        >
          {/* Ornate Corner Decorations */}
          <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-accent z-20" />
          <div className="absolute -top-4 -right-4 w-16 h-16 border-t-4 border-r-4 border-accent z-20" />
          <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-4 border-l-4 border-accent z-20" />
          <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-accent z-20" />

          {/* Map with Gold Border */}
          <div className="relative rounded-lg overflow-hidden border-4 border-accent shadow-gold-intense">
            {/* Top Gold Bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-accent via-gold-light to-accent z-10" />
            
            <iframe
              src={`https://www.google.com/maps?q=${centerLat},${centerLng}&z=13&output=embed`}
              className="w-full h-[500px] md:h-[650px]"
              allowFullScreen
              loading="lazy"
              title="Mapa de ubicaciones VIP"
            />
            
            {/* Bottom Gold Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-accent via-gold-light to-accent z-10" />
          </div>

          {/* Floating Glow Effect */}
          <motion.div
            className="absolute inset-0 -z-10"
            animate={{
              boxShadow: [
                "0 0 40px rgba(212, 175, 55, 0.3)",
                "0 0 80px rgba(212, 175, 55, 0.5)",
                "0 0 40px rgba(212, 175, 55, 0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        {/* Location Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Card Glow on Hover */}
              <motion.div
                className="absolute -inset-2 bg-accent/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              <div className="relative bg-gradient-to-br from-zinc-900 to-black border-2 border-accent/40 rounded-lg p-8 hover:border-accent transition-all duration-300 shadow-xl">
                {/* Top Decorative Line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

                {/* Icon with Animation */}
                <motion.div
                  className="flex justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl" />
                    <MapPin className="relative w-12 h-12 text-accent" />
                  </div>
                </motion.div>

                {/* Location Name */}
                <h3 className="text-2xl font-bold text-accent mb-4 tracking-widest text-center">
                  {location.name}
                </h3>

                {/* Divider */}
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="w-8 h-px bg-accent" />
                  <div className="w-2 h-2 border border-accent rotate-45" />
                  <div className="w-8 h-px bg-accent" />
                </div>

                {/* Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <p className="leading-relaxed">{location.address}</p>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                    <p>{location.phone}</p>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                    <p>{location.hours}</p>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  className="w-full border-2 border-accent text-accent hover:bg-accent hover:text-black font-bold tracking-wider uppercase transition-all duration-300 group-hover:shadow-gold"
                  asChild
                >
                  <a
                    href={`https://www.google.com/maps?q=${location.lat},${location.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Ver en Mapa
                  </a>
                </Button>

                {/* Bottom Decorative Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
