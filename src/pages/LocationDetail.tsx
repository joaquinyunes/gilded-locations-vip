import { motion } from "framer-motion";
import { MapPin, Clock, Phone, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import location1 from "@/assets/location-1.jpg";

const LocationDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src={location1}
            alt="BOW LANE"
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
            <h1 className="text-5xl md:text-6xl font-bold text-accent mb-4 tracking-widest">
              BOW LANE
            </h1>
            <p className="text-xl text-foreground/80">Bank · London</p>
          </motion.div>
        </div>

        <Button
          variant="outline"
          className="absolute top-6 left-6 z-20 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          asChild
        >
          <a href="/locations">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Locations
          </a>
        </Button>
      </section>

      {/* Info Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-accent mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  ADDRESS
                </h2>
                <p className="text-foreground/80 text-lg">
                  47 Bow Lane
                  <br />
                  London, EC4M 9DL
                  <br />
                  United Kingdom
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-accent mb-4 flex items-center gap-2">
                  <Phone className="w-6 h-6" />
                  CONTACT
                </h2>
                <p className="text-foreground/80 text-lg">020 8616 3708</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-accent mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6" />
                OPENING HOURS
              </h2>
              <div className="space-y-3 text-foreground/80 text-lg">
                <div className="flex justify-between border-b border-accent/20 pb-2">
                  <span>Monday – Friday</span>
                  <span className="text-accent">9:00 – 20:00</span>
                </div>
                <div className="flex justify-between border-b border-accent/20 pb-2">
                  <span>Saturday</span>
                  <span className="text-accent">10:00 – 18:00</span>
                </div>
                <div className="flex justify-between border-b border-accent/20 pb-2">
                  <span>Sunday</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <motion.section
        className="px-6 pb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto max-w-5xl">
          <div className="rounded-lg overflow-hidden border-2 border-accent/30 shadow-gold">
            <iframe
              src="https://www.google.com/maps?q=51.513141,-0.093041&z=16&output=embed"
              className="w-full h-[450px]"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-card border-y border-accent/20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-accent mb-6">
              READY FOR THE VIP TREATMENT?
            </h3>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-12 py-6 tracking-wider shadow-gold-intense hover:shadow-gold transition-all duration-300"
              asChild
            >
              <a href="/booking">BOOK AN APPOINTMENT</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LocationDetail;
