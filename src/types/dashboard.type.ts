export interface TDashboard {
  bookingStats: TBookingStats;
  serviceRevenue: TServiceRevenue;
}

export interface TBookingStats {
  requests: number[];
  cancels: number[];
}

export interface TServiceRevenue {
  Home: number[];
  Fashion: number[];
  Car: number[];
  Event: number[];
  Bike: number[];
  Business: number[];
  Furniture: number[];
  Electronics: number[];
}
