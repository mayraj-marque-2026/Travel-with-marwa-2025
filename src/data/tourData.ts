import {
  TourLocation,
  PackageInclusion,
  DepartureCity,
  TouristAttraction,
  GalleryImage,
  FeatureReason,
  FAQItem,
} from '../types';
import naranImage from '../assets/images/naran_mountain_road_1785142096421.jpg';
import raftingImage from '../assets/images/kunhar_river.jpg';
import busDepartureImage from '../assets/images/luxury_bus_departure_marwa_1785142839368.jpg';

export const BUSINESS_INFO = {
  name: 'TRAVEL WITH MARWA',
  subtitle: 'EXPLORE THE BEAUTY OF NORTHERN PAKISTAN',
  tagline: 'Create unforgettable memories with your family & friends!',
  phone: '0329-9594741',
  phoneFormatted: '+92 329 9594741',
  whatsappNumber: '923299594741',
  whatsappLink: 'https://wa.me/923299594741',
  whatsappPrefilledMessage: 'Hello TRAVEL WITH MARWA,\nI want details about the 3 Days / 2 Nights Family Tour.',
  featuredTourTitle: '3 Days / 2 Nights Family Tour',
  pricePerPerson: 12500,
  priceFormatted: 'Rs. 12,500',
  currency: 'Rs.',
};

export const FEATURED_LOCATIONS: TourLocation[] = [
  {
    id: 'naran',
    name: 'NARAN',
    tagline: 'Heart of Kaghan Valley',
    description: 'A bustling alpine town surrounded by towering pine forests, roaring mountain rivers, and legendary crystal lakes.',
    image: naranImage,
    altitude: '7,900 ft',
    highlights: ['Kunhar River Views', 'Naran Main Bazaar', 'Lush Green Meadows', 'Charming Riverside Cafes'],
  },
  {
    id: 'kaghan',
    name: 'KAGHAN',
    tagline: 'Jewel of Khyber Pakhtunkhwa',
    description: 'An enchanting valley dotted with terraced fields, pristine waterfalls, and serene mountain retreats perfect for family relaxation.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    altitude: '7,000 ft',
    highlights: ['Alpine Climate', 'Balakot River Banks', 'Kiwai Waterfall Stop', 'Dense Pine Forests'],
  },
  {
    id: 'babusar-top',
    name: 'BABUSAR TOP',
    tagline: 'Roof of the Valley',
    description: 'A high mountain pass connecting Kaghan Valley to Gilgit Baltistan with sweeping 360° views of snow-clad peaks.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    altitude: '13,691 ft',
    highlights: ['Snowy Mountain Pass', 'Panoramic Valley Views', 'Cool Mountain Breeze', 'Fresh Mountain Tea'],
  },
  {
    id: 'shogran',
    name: 'SHOGRAN',
    tagline: 'Green Heavenly Plateau',
    description: 'A quiet hill station perched high above the valley floor, famous for serene pine meadows and views of Makra Peak.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
    altitude: '7,749 ft',
    highlights: ['Siri Paye Meadows', 'Jeep Safari Thrill', 'Pine Wood Walking Trails', 'Picturesque Valleys'],
  },
];

export const DEPARTURE_CITIES: DepartureCity[] = [
  {
    name: 'Peshawar',
    pickupTime: '05:00 AM',
    locationDetails: 'Northern Bypass / Motorway Interchange Point',
  },
  {
    name: 'Charsadda',
    pickupTime: '05:45 AM',
    locationDetails: 'Charsadda Interchange / Main Highway Stop',
  },
  {
    name: 'Mardan',
    pickupTime: '06:30 AM',
    locationDetails: 'Mardan Motorway Toll Plaza',
  },
  {
    name: 'Swabi',
    pickupTime: '07:15 AM',
    locationDetails: 'Swabi Service Area / Interchange Point',
  },
];

export const PACKAGE_INCLUDES: PackageInclusion[] = [
  {
    id: 'transport',
    title: 'Luxury Transport',
    description: 'Dedicated air-conditioned luxury coaster/saloon bus with experienced mountain driver.',
    iconName: 'Bus',
  },
  {
    id: 'hotel',
    title: 'Hotel Accommodation',
    description: 'Clean, safe, and family-standard hotel room stays in Naran/Kaghan valley.',
    iconName: 'Hotel',
  },
  {
    id: 'breakfast',
    title: '3 Times Breakfast',
    description: 'Freshly prepared nutritious morning breakfasts served during the 3-day tour.',
    iconName: 'Coffee',
  },
  {
    id: 'dinner',
    title: '2 Times Dinner',
    description: 'Delicious hot dinner meals included for both nights of your valley stay.',
    iconName: 'Utensils',
  },
  {
    id: 'photography',
    title: 'Photography Assistance',
    description: 'Dedicated trip coordination and photo assistance at scenic spots for family memories.',
    iconName: 'Camera',
  },
  {
    id: 'family-env',
    title: 'Friendly & Family Environment',
    description: '100% safe, respectful, and organized atmosphere strictly designed for families & couples.',
    iconName: 'Users',
  },
];

export const TOURIST_ATTRACTIONS: TouristAttraction[] = [
  {
    id: 'attraction-1',
    name: 'Naran Valley',
    category: 'Town & River',
    description: 'The vibrant centerpiece of the tour featuring riverside markets, pine groves, and evening strolls.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
    icon: 'MapPin',
  },
  {
    id: 'attraction-2',
    name: 'Kaghan Valley',
    category: 'Alpine Valley',
    description: 'Breathtaking scenery along the Kunhar River with fresh mountain breeze and terraced green hills.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    icon: 'Trees',
  },
  {
    id: 'attraction-3',
    name: 'Babusar Top',
    category: 'Mountain Pass',
    description: 'Reach 13,700 feet altitude with snow-covered mountain peaks and clouds at arm length.',
    image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=80',
    icon: 'Mountain',
  },
  {
    id: 'attraction-4',
    name: 'Shogran',
    category: 'Hill Station',
    description: 'Perched on a green plateau with magnificent pine forests and breathtaking views of Makra Peak.',
    image: 'https://images.unsplash.com/photo-1511497584788-876761c11969?auto=format&fit=crop&w=800&q=80',
    icon: 'Sun',
  },
  {
    id: 'attraction-5',
    name: 'Lulusar Lake',
    category: 'High Altitude Lake',
    description: 'A serene mirror-like turquoise lake framed by majestic snow peaks on the way to Babusar.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
    icon: 'Waves',
  },
  {
    id: 'attraction-6',
    name: 'River View Stops',
    category: 'Scenic Viewpoint',
    description: 'Multiple designated photo & tea breaks right next to the crystal blue rushing waters of Kunhar River.',
    image: 'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?auto=format&fit=crop&w=800&q=80',
    icon: 'Sparkles',
  },
  {
    id: 'attraction-7',
    name: 'Beautiful Sightseeing Points',
    category: 'Guided Sightseeing',
    description: 'Handpicked vantage points including Kiwai Waterfall, Balakot Valley, and alpine meadow viewpoints.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    icon: 'Compass',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gal-1',
    title: 'Naran Valley Road & Mountains',
    location: 'Naran Valley',
    src: naranImage,
    category: 'valley',
  },
  {
    id: 'gal-2',
    title: 'Babusar Pass Snow Peaks',
    location: 'Babusar Top',
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    category: 'nature',
  },
  {
    id: 'gal-3',
    title: 'Shogran Pine Meadows',
    location: 'Shogran',
    src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
    category: 'nature',
  },
  {
    id: 'gal-4',
    title: 'Kaghan Valley River Flow',
    location: 'Kaghan Valley',
    src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    category: 'valley',
  },
  {
    id: 'gal-5',
    title: 'Turquoise Waters of Lulusar Lake',
    location: 'Lulusar Lake',
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
    category: 'nature',
  },
  {
    id: 'gal-6',
    title: 'Kiwai Waterfall Refreshment Stop',
    location: 'Kiwai / Kaghan',
    src: 'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?auto=format&fit=crop&w=1200&q=80',
    category: 'adventure',
  },
  {
    id: 'gal-7',
    title: 'Luxury Bus Departure & Family Travel',
    location: 'Peshawar - Naran Route',
    src: busDepartureImage,
    category: 'group',
  },
  {
    id: 'gal-8',
    title: 'Kunhar River Rafting Experience',
    location: 'Naran River Rafting',
    src: raftingImage,
    category: 'adventure',
  },
];

export const WHY_CHOOSE_US: FeatureReason[] = [
  {
    id: 'reason-1',
    title: 'Safe Family Tours',
    description: 'Strict security protocols, family-only environments, and respectful trip management for complete peace of mind.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'reason-2',
    title: 'Comfortable Travel',
    description: 'Modern luxury coasters, gentle driving speeds, ergonomic seating, and planned comfort stops.',
    iconName: 'Armchair',
  },
  {
    id: 'reason-3',
    title: 'Professional Management',
    description: 'Experienced tour organizers with deep regional knowledge and dedicated on-ground coordination.',
    iconName: 'Award',
  },
  {
    id: 'reason-4',
    title: 'Affordable Packages',
    description: 'Unbeatable value at Rs. 12,500 per person with all major transport, hotel, breakfast & dinner included.',
    iconName: 'PiggyBank',
  },
  {
    id: 'reason-5',
    title: 'Beautiful Destinations',
    description: 'Curated itineraries covering Naran, Kaghan, Babusar Top, Lulusar Lake, Shogran & Kiwai Waterfall.',
    iconName: 'Map',
  },
  {
    id: 'reason-6',
    title: 'Friendly Environment',
    description: 'Warm hospitality, photo support, and a welcoming atmosphere where guests feel right at home.',
    iconName: 'Smile',
  },
];

export const TOUR_ITINERARY = [
  {
    day: 'Day 1',
    title: 'Departure & Kaghan Valley Arrival',
    highlights: [
      'Early morning departures from Peshawar, Charsadda, Mardan, Swabi',
      'Scenic drive via Hazara Motorway & Abbottabad route',
      'Short tea & breakfast break along the lush valley route',
      'Stop at Kiwai Waterfall & arrival in Naran Valley',
      'Hotel check-in, rest, and delicious dinner included',
      'Evening free time to explore vibrant Naran Bazaar',
    ],
  },
  {
    day: 'Day 2',
    title: 'Babusar Top & Lulusar Lake Excursion',
    highlights: [
      'Fresh morning breakfast at the hotel',
      'Scenic departure towards high mountain pass',
      'Photography & sightseeing stop at turquoise Lulusar Lake',
      'Reach grand Babusar Top (13,700 ft) for snow peak views',
      'Return journey to Naran with riverside tea stop',
      'Hot dinner at hotel & overnight stay in Naran',
    ],
  },
  {
    day: 'Day 3',
    title: 'Shogran Meadows & Return Journey',
    highlights: [
      'Morning breakfast & hotel checkout',
      'Drive towards Shogran Plateau hill station',
      'Jeep excursion option to Siri Paye green alpine meadows',
      'Enjoy panoramic views of Makra Peak and pine forests',
      'Afternoon departure for return journey home',
      'Drop-offs at Swabi, Mardan, Charsadda, and Peshawar',
    ],
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'Are these tours suitable for families and children?',
    answer: 'Yes! "TRAVEL WITH MARWA" specializes exclusively in safe, family-friendly tours. We ensure a respectful, well-managed environment ideal for couples, elders, and kids.',
  },
  {
    question: 'What is included in the Rs. 12,500 per person price?',
    answer: 'The package covers Luxury AC Transport for 3 days, Hotel Accommodation for 2 nights, 3 Times Breakfast, 2 Times Dinner, photography assistance, and full tour coordination.',
  },
  {
    question: 'Where are the pickup points and departure times?',
    answer: 'We pick up guests directly from Peshawar (5:00 AM), Charsadda (5:45 AM), Mardan (6:30 AM), and Swabi (7:15 AM) interchanges along the motorway.',
  },
  {
    question: 'How do I confirm my booking?',
    answer: 'You can easily reserve your seat by clicking the "Book on WhatsApp" button or calling us at 0329-9594741. A small initial deposit secures your seats.',
  },
  {
    question: 'Are jeep charges to Siri Paye included?',
    answer: 'Jeep rides for off-road tracks (such as Shogran to Siri Paye) are managed locally on a group sharing basis so guests can choose according to preference.',
  },
];
