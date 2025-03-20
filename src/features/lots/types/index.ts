import { User } from '../../../types/models';

export interface LotFeature {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface LotImage {
  id: string;
  url: string;
  alt: string;
  isMain: boolean;
}

export interface LotLocation {
  latitude: number;
  longitude: number;
  address: string;
  reference: string;
}

export interface LotDetails {
  id: string;
  number: string;
  block: string;
  area: number;
  price: number;
  status: 'available' | 'reserved' | 'sold';
  description: string;
  images: LotImage[];
  location: LotLocation;
  features: LotFeature[];
  documents: {
    id: string;
    name: string;
    url: string;
    type: string;
  }[];
  realtor?: Pick<User, 'id' | 'name' | 'email' | 'phone' | 'avatar'>;
  createdAt: Date;
  updatedAt: Date;
}
