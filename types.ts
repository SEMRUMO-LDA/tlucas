
import React from 'react';

export interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface FleetVehicle {
  name: string;
  capacity: string;
  luggage: string;
  features: string[];
  image: string;
}