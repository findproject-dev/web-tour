export type Province =
  | "Kalimantan Barat"
  | "Kalimantan Tengah"
  | "Kalimantan Selatan"
  | "Kalimantan Timur"
  | "Kalimantan Utara"
  | "Semua";

export type Category = "wildlife" | "beach" | "culture" | "adventure" | "river" | "family" | "island" | "mountain";
export type ExperienceType = "trekking" | "snorkeling" | "boat-tour" | "cultural" | "wildlife-watching" | "rafting";

export type Destination = {
  id: string;
  name: string;
  slug: string;
  province: Province;
  shortDescription: string;
  longDescription: string;
  location: string;
  category: Category[];
  experienceTypes: ExperienceType[];
  heroImage: string;
  gallery: string[];
  recommendedDuration: string;
  bestTimeToVisit?: string;
  featured: boolean;
  relatedTours: string[];
};

export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
  activities?: string[];
};

export type TourType = "multi-day" | "day-trip" | "private";
export type AvailabilityStatus = "available" | "limited" | "unavailable";

export type Tour = {
  id: string;
  name: string;
  slug: string;
  type: TourType;
  destination: string;
  province: Province;
  duration: string;
  durationDays: number;
  price: number;
  priceDisplay: string;
  priceUnit: string;
  shortDescription: string;
  longDescription: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
  heroImage: string;
  gallery: string[];
  rating: number;
  reviewCount: number;
  availabilityStatus: AvailabilityStatus;
  featured: boolean;
  relatedDestinations: string[];
  relatedTours: string[];
};

export type BookingFormData = {
  tourSlug: string;
  tourName: string;
  date: string;
  adults: number;
  children: number;
  name: string;
  email: string;
  whatsapp: string;
  totalPrice: number;
  status: "pending";
};

export type Testimonial = {
  id: string;
  name: string;
  origin: string;
  quote: string;
  rating: number;
  tourName?: string;
  avatarImage?: string;
};
