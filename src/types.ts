export interface TourLocation {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  altitude?: string;
  highlights: string[];
}

export interface PackageInclusion {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface DepartureCity {
  name: string;
  pickupTime: string;
  locationDetails: string;
}

export interface TouristAttraction {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  icon: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  location: string;
  src: string;
  category: 'nature' | 'valley' | 'adventure' | 'group';
}

export interface FeatureReason {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BookingState {
  fullName: string;
  phone: string;
  departureCity: string;
  passengers: number;
  travelDate: string;
  specialNotes: string;
}
