import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Window Frame */}
      <div className="relative bg-gradient-to-b from-zinc-100 to-zinc-200 p-8 rounded-sm shadow-2xl overflow-hidden">
        {/* Vintage Paper Texture Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-30" />
        
        {/* Illustration Container */}
        <div className="relative h-72 mb-6 flex items-center justify-center">
          <motion.img
            src={illustration}
            alt={name}
            className="h-full w-auto object-contain"
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Location Info */}
        <div className="relative text-center space-y-3">
          <h2 className="text-4xl font-bold tracking-widest text-black mb-1">
            {name}
          </h2>
          <p className="text-sm font-semibold text-zinc-600 tracking-wider">
            {postcode}
          </p>

          {/* Decorative Line */}
          <div className="w-16 h-0.5 bg-accent mx-auto my-4" />

          {/* Details - Hidden by default, shown on hover */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              height: isHovered ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="text-sm text-zinc-700 space-y-2 pt-2">
              <p className="font-medium">{address}</p>
              <p>{hours}</p>
              <p>{phone}</p>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex gap-3 pt-4"
          >
            <Button
              variant="default"
              className="flex-1 bg-black text-gold hover:bg-zinc-800 border-2 border-accent font-bold tracking-wider"
              asChild
            >
              <a href={detailLink}>VER DETALLES</a>
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-2 border-black text-black hover:bg-black hover:text-gold font-bold tracking-wider"
              asChild
            >
              <a href="/booking">RESERVAR</a>
            </Button>
          </motion.div>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-accent/30" />
        <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-accent/30" />
        <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-accent/30" />
        <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-accent/30" />
      </div>
    </motion.div>
  );
};
