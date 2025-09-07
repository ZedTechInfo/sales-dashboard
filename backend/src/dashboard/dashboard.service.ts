import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  getMetrics() {
    // Mock data for metrics
    return {
      totalRevenue: 50000,
      totalOrders: 1200,
      totalCustomers: 800,
      totalProducts: 250,
    };
  }

  getRevenue() {
    // Mock data for revenue
    return [
      { month: 'Jan', revenue: 4000 },
      { month: 'Feb', revenue: 3000 },
      { month: 'Mar', revenue: 5000 },
      { month: 'Apr', revenue: 4500 },
      { month: 'May', revenue: 6000 },
      { month: 'Jun', revenue: 5500 },
    ];
  }

  getCustomerSatisfaction() {
    // Mock data for customer satisfaction
    return {
      averageRating: 4.5,
      totalRatings: 500,
    };
  }

  getVisitorInsights() {
    // Mock data for visitor insights
    return {
      totalVisitors: 10000,
      newVisitors: 3000,
      returningVisitors: 7000,
    };
  }

  getTopProducts() {
    // Mock data for top products
    return [
      { id: 1, name: 'Product A', sales: 500 },
      { id: 2, name: 'Product B', sales: 400 },
      { id: 3, name: 'Product C', sales: 300 },
      { id: 4, name: 'Product D', sales: 200 },
      { id: 5, name: 'Product E', sales: 100 },
    ];
  }
}
