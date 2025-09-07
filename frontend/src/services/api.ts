import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export interface DashboardMetrics {
  totalRevenue: number;
  totalOrders: number;
  totalCustomers: number;
  totalProducts: number;
}

export interface RevenueData {
  month: string;
  revenue: number;
}

export interface CustomerSatisfactionData {
  averageRating: number;
  totalRatings: number;
}

export interface VisitorInsights {
  totalVisitors: number;
  newVisitors: number;
  returningVisitors: number;
}

export interface TopProduct {
  id: number;
  name: string;
  sales: number;
}

export const dashboardAPI = {
  // Get dashboard metrics
  getMetrics: async (): Promise<DashboardMetrics> => {
    const response = await apiClient.get('/api/dashboard/metrics');
    return response.data;
  },

  // Get revenue data
  getRevenue: async (): Promise<RevenueData[]> => {
    const response = await apiClient.get('/api/dashboard/revenue');
    return response.data;
  },

  // Get customer satisfaction data
  getCustomerSatisfaction: async (): Promise<CustomerSatisfactionData> => {
    const response = await apiClient.get('/api/dashboard/customer-satisfaction');
    return response.data;
  },

  // Get visitor insights
  getVisitorInsights: async (): Promise<VisitorInsights> => {
    const response = await apiClient.get('/api/dashboard/visitor-insights');
    return response.data;
  },

  // Get top products
  getTopProducts: async (): Promise<TopProduct[]> => {
    const response = await apiClient.get('/api/dashboard/top-products');
    return response.data;
  },
};

export default apiClient;