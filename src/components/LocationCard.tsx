import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface LocationCardProps {
  name: string;
  address: string;
  hours: string;
  phone: string;
  imageUrl: string;
  detailLink: string;
  index: number;
}

export const LocationCard = ({
  name,
  address,
  hours,
  phone,
  imageUrl,
  detailLink,
  index,
}: LocationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="group relative overflow-hidden bg-card border-2 border-border/20 hover:border-accent transition-all duration-500 hover:shadow-gold-intense">
        {/* Image Container */}
        <div className="relative h-72 overflow-hidden">
          <motion.img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            whileHover={{ scale: 1.1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          
          {/* Gold accent line */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-accent"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-accent tracking-wider">{name}</h2>
          
          <div className="space-y-2 text-muted-foreground">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
              <p className="text-sm">{address}</p>
            </div>
            
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
              <p className="text-sm">{hours}</p>
            </div>
            
            <div className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
              <p className="text-sm">{phone}</p>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              variant="default"
              className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold tracking-wide transition-all duration-300 hover:shadow-gold"
              asChild
            >
              <a href={detailLink}>VIEW DETAILS</a>
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold tracking-wide transition-all duration-300"
              asChild
            >
              <a href="/booking">BOOK NOW</a>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
