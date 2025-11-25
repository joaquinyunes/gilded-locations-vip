export interface Location {
  id: string;
  name: string;
  postcode: string;
  fullAddress: string;
  phone: string;
  hours: {
    weekdays: string;
    weekend: string;
  };
  walkInOnly: boolean;
  hasChamber88: boolean;
  coordinates: {
    lat: number;
    lng: number;
  };
  images: string[];
  description?: string;
}

export const locations: Record<string, Location> = {
  "bow-lane": {
    id: "bow-lane",
    name: "BOW LANE",
    postcode: "EC4M",
    fullAddress: "47 Bow Lane, London, EC4M 9DL, United Kingdom",
    phone: "020 8616 3708",
    hours: {
      weekdays: "9:00 AM - 8:00 PM",
      weekend: "Closed"
    },
    walkInOnly: true,
    hasChamber88: true,
    coordinates: {
      lat: 51.513141,
      lng: -0.093041
    },
    images: [
      "/src/assets/bowlane-interior-1.jpg",
      "/src/assets/bowlane-interior-2.jpg",
      "/src/assets/bowlane-interior-3.jpg"
    ],
    description: "Our flagship location in the heart of the City. Home to the exclusive Chamber 88 VIP lounge, where traditional barbering meets modern luxury. Experience premium grooming in an atmosphere of refined elegance."
  },
  "spitalfields": {
    id: "spitalfields",
    name: "SPITALFIELDS",
    postcode: "E1 6EW",
    fullAddress: "Old Spitalfields Market, 16 Horner Square, London, E1 6EW, United Kingdom",
    phone: "020 7247 8808",
    hours: {
      weekdays: "10:00 AM - 7:00 PM",
      weekend: "10:00 AM - 6:00 PM"
    },
    walkInOnly: false,
    hasChamber88: false,
    coordinates: {
      lat: 51.518937,
      lng: -0.076132
    },
    images: [
      "/src/assets/spitalfields-interior-1.jpg",
      "/src/assets/location-2.jpg",
      "/src/assets/illustration-2.jpg"
    ],
    description: "Located in the vibrant Old Spitalfields Market, this location combines industrial chic with premium grooming services. A perfect blend of East London's creative energy and classic barbering traditions."
  },
  "mayfair": {
    id: "mayfair",
    name: "MAYFAIR",
    postcode: "W1K 5JA",
    fullAddress: "30 Bruton Place, Mayfair, London, W1K 5JA, United Kingdom",
    phone: "020 7629 1888",
    hours: {
      weekdays: "9:00 AM - 8:00 PM",
      weekend: "10:00 AM - 6:00 PM"
    },
    walkInOnly: false,
    hasChamber88: false,
    coordinates: {
      lat: 51.510357,
      lng: -0.148271
    },
    images: [
      "/src/assets/mayfair-interior-1.jpg",
      "/src/assets/location-3.jpg",
      "/src/assets/illustration-3.jpg"
    ],
    description: "Our most exclusive location in prestigious Mayfair. Opulent Victorian interiors meet contemporary barbering excellence. Reserved for those who demand nothing but the finest grooming experience."
  }
};

export const getLocationBySlug = (slug: string): Location | undefined => {
  return locations[slug];
};

export const getAllLocations = (): Location[] => {
  return Object.values(locations);
};
