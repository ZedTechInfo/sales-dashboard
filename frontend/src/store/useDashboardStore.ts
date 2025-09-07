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
        axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + '/dashboard/metrics'),
        axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + '/dashboard/revenue'),
        axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + '/dashboard/customer-satisfaction'),
        axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + '/dashboard/visitor-insights'),
        axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + '/dashboard/top-products'),
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