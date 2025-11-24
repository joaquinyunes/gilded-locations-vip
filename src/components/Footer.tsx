import { Instagram, Facebook, Twitter, Phone } from "lucide-react";

const locations = [
  {
    name: "BOW LANE",
    address: "47 Bow Lane, London, EC4M 9DL",
    hours: "Mon-Fri: 9:00 - 20:00",
    phone: "020 8616 3708",
  },
  {
    name: "MAYFAIR",
    address: "5 Shepherd Market, London, W1J 7PD",
    hours: "Mon-Sat: 9:00 - 20:00",
    phone: "020 3602 2427",
  },
  {
    name: "SPITALFIELDS",
    address: "4 Toynbee Street, London, E1 7NE",
    hours: "Every day: 10:00 - 18:00",
    phone: "020 7247 1524",
  },
];

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-accent/20 py-16">
      <div className="container mx-auto px-6">
        {/* Locations Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {locations.map((location) => (
            <div key={location.name} className="space-y-2">
              <h4 className="text-accent font-bold text-lg tracking-wider mb-3">
                {location.name}
              </h4>
              <p className="text-muted-foreground text-sm">{location.address}</p>
              <p className="text-muted-foreground text-sm">{location.hours}</p>
              <p className="text-muted-foreground text-sm flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {location.phone}
              </p>
            </div>
          ))}
        </div>

        {/* Middle Section */}
        <div className="text-center border-t border-accent/10 pt-8 mb-8">
          <h3 className="text-accent text-2xl font-bold mb-4 tracking-widest">
            WHERE PRECISION MEETS LUXURY
          </h3>
          
          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="#"
              className="text-accent hover:text-accent/80 transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-accent hover:text-accent/80 transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-accent hover:text-accent/80 transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-accent/10 text-muted-foreground text-sm">
          <p>© 2025 VIP Barbershop · Crafted with Excellence</p>
          <div className="flex gap-6">
            <a href="#" className="text-accent hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="text-accent hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-accent hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
