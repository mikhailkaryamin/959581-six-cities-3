type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type Coordinate = {
  lat: number;
  lng: number;
}

interface Offer {
  bedrooms: number;
  city: {
    location: Location;
    name: string;
  },
  description: string;
  goods: string[];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  },
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

interface User {
  id: number;
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
}

interface Comment {
  id: number;
  user: {
    id: number;
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  rating: number;
  comment: string;
  date: string;
}

export {
  Offer,
  User,
  Coordinate,
  Comment,
};
