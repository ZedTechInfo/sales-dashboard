import { create } from 'zustand';
import axios from 'axios';

interface DashboardMetrics {
  totalRevenue: number;
  totalOrders: number;
  newCustomers: number;
  conversionRate: number;
}

interface RevenueItem {
  month: string;
  revenue: number;
}

interface ProductItem {
  name: string;
  sales: number;
  revenue: number;
}

interface DashboardState {
  metrics: DashboardMetrics | null;
  revenue: RevenueItem[];
  customerSatisfaction: number | null;
  visitorInsights: Record<string, unknown> | null;
  topProducts: ProductItem[];
  fetchData: () => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  metrics: null,
  revenue: [],
  customerSatisfaction: null,
  visitorInsights: null,
  topProducts: [],
  fetchData: async () => {
    try {
      const [
        metricsRes,
        revenueRes,
        customerSatisfactionRes,
        visitorInsightsRes,
        topProductsRes,
      ] = await Promise.all([
        axios.get('http://localhost:3000/api/dashboard/metrics'),
        axios.get('http://localhost:3000/api/dashboard/revenue'),
        axios.get('http://localhost:3000/api/dashboard/customer-satisfaction'),
        axios.get('http://localhost:3000/api/dashboard/visitor-insights'),
        axios.get('http://localhost:3000/api/dashboard/top-products'),
      ]);
      set({
        metrics: metricsRes.data,
        revenue: revenueRes.data,
        customerSatisfaction: customerSatisfactionRes.data,
        visitorInsights: visitorInsightsRes.data,
        topProducts: topProductsRes.data,
      });
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  },
}));

export default useDashboardStore;