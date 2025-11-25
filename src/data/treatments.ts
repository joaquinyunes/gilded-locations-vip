export interface Treatment {
  id: string;
  name: string;
  category: "haircut" | "beard" | "shave" | "grooming" | "premium";
  description: string;
  duration: string;
  price: string;
  features: string[];
  image: string;
}

export const treatments: Treatment[] = [
  {
    id: "signature-cut",
    name: "Corte Signature",
    category: "haircut",
    description: "Nuestro corte de cabello insignia. Consulta personalizada, lavado premium, corte de precisión y acabado con productos de alta gama.",
    duration: "45 min",
    price: "£45",
    features: [
      "Consulta de estilo personalizada",
      "Lavado con productos premium",
      "Corte de precisión con navaja",
      "Masaje de cuero cabelludo",
      "Acabado con productos styling"
    ],
    image: "/src/assets/service-haircut.jpg"
  },
  {
    id: "beard-sculpt",
    name: "Esculpido de Barba",
    category: "beard",
    description: "Tratamiento completo de barba con diseño personalizado, recorte de precisión y acondicionamiento profundo.",
    duration: "30 min",
    price: "£35",
    features: [
      "Análisis de forma facial",
      "Recorte y diseño personalizado",
      "Afeitado de contornos",
      "Aceites y bálsamos premium",
      "Tratamiento hidratante"
    ],
    image: "/src/assets/service-beard.jpg"
  },
  {
    id: "royal-shave",
    name: "Afeitado Real",
    category: "shave",
    description: "La experiencia de afeitado definitiva con navaja tradicional, toallas calientes y productos de lujo.",
    duration: "40 min",
    price: "£40",
    features: [
      "Preparación con toallas calientes",
      "Afeitado con navaja tradicional",
      "Doble pasada para suavidad perfecta",
      "Masaje facial relajante",
      "Bálsamo after-shave premium"
    ],
    image: "/src/assets/service-shave.jpg"
  },
  {
    id: "executive-package",
    name: "Paquete Ejecutivo",
    category: "premium",
    description: "El tratamiento completo para el caballero moderno. Corte, barba y afeitado en una sesión de lujo.",
    duration: "90 min",
    price: "£95",
    features: [
      "Corte Signature completo",
      "Esculpido de barba premium",
      "Afeitado Real tradicional",
      "Tratamiento facial hidratante",
      "Bebida de cortesía",
      "Productos de mantenimiento incluidos"
    ],
    image: "/src/assets/bowlane-interior-3.jpg"
  },
  {
    id: "chamber-88-experience",
    name: "Experiencia Chamber 88",
    category: "premium",
    description: "La cumbre del grooming masculino. Servicio VIP exclusivo en nuestro lounge privado con whisky premium.",
    duration: "120 min",
    price: "£150",
    features: [
      "Lounge privado exclusivo",
      "Consulta de imagen personalizada",
      "Servicio completo de grooming",
      "Selección de whiskies premium",
      "Masaje de lujo incluido",
      "Productos de alta gama de regalo",
      "Reserva prioritaria futura"
    ],
    image: "/src/assets/chamber88-bg.jpg"
  },
  {
    id: "boys-first-cut",
    name: "Primer Corte (Niños)",
    category: "haircut",
    description: "Una experiencia especial para el primer corte de tu hijo en un ambiente amigable y profesional.",
    duration: "30 min",
    price: "£25",
    features: [
      "Ambiente amigable para niños",
      "Barber experimentado con niños",
      "Certificado de primer corte",
      "Foto conmemorativa",
      "Dulce de cortesía"
    ],
    image: "/src/assets/bowlane-interior-2.jpg"
  }
];

export const getTreatmentsByCategory = (category: string): Treatment[] => {
  return treatments.filter(t => t.category === category);
};

export const getTreatmentById = (id: string): Treatment | undefined => {
  return treatments.find(t => t.id === id);
};

export const categories = [
  { id: "all", name: "Todos los Servicios", icon: "✂️" },
  { id: "haircut", name: "Cortes", icon: "💇" },
  { id: "beard", name: "Barba", icon: "🧔" },
  { id: "shave", name: "Afeitado", icon: "🪒" },
  { id: "premium", name: "Premium VIP", icon: "👑" }
];
