export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'client' | 'realtor';
  avatar?: string;
  phone?: string;
  address?: Address;
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface Lot {
  id: string;
  number: string;
  area: number;
  price: number;
  status: 'available' | 'reserved' | 'sold';
  description: string;
  images: string[];
  location: {
    latitude: number;
    longitude: number;
  };
  features: string[];
  realtorId?: string;
  clientId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Contract {
  id: string;
  lotId: string;
  clientId: string;
  realtorId: string;
  price: number;
  downPayment: number;
  installments: number;
  installmentValue: number;
  interestRate: number;
  status: 'pending' | 'active' | 'completed' | 'cancelled';
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Payment {
  id: string;
  contractId: string;
  amount: number;
  dueDate: Date;
  paidDate?: Date;
  status: 'pending' | 'paid' | 'overdue';
  paymentMethod?: 'boleto' | 'pix';
  paymentProof?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SupportTicket {
  id: string;
  userId: string;
  title: string;
  description: string;
  category: 'financial' | 'technical' | 'general';
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high';
  assignedTo?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Review {
  id: string;
  userId: string;
  lotId: string;
  rating: number;
  comment: string;
  type: 'service' | 'delivery';
  createdAt: Date;
  updatedAt: Date;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: Date;
  updatedAt: Date;
}
