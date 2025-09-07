import { useState, useEffect } from 'react';
import { 
  dashboardAPI, 
  DashboardMetrics, 
  RevenueData, 
  CustomerSatisfactionData, 
  VisitorInsights, 
  TopProduct 
} from '../services/api';

interface DashboardData {
  metrics: DashboardMetrics | null;
  revenue: RevenueData[] | null;
  customerSatisfaction: CustomerSatisfactionData | null;
  visitorInsights: VisitorInsights | null;
  topProducts: TopProduct[] | null;
}

interface LoadingState {
  metrics: boolean;
  revenue: boolean;
  customerSatisfaction: boolean;
  visitorInsights: boolean;
  topProducts: boolean;
}

interface ErrorState {
  metrics: string | null;
  revenue: string | null;
  customerSatisfaction: string | null;
  visitorInsights: string | null;
  topProducts: string | null;
}

export const useDashboardData = () => {
  const [data, setData] = useState<DashboardData>({
    metrics: null,
    revenue: null,
    customerSatisfaction: null,
    visitorInsights: null,
    topProducts: null,
  });

  const [loading, setLoading] = useState<LoadingState>({
    metrics: true,
    revenue: true,
    customerSatisfaction: true,
    visitorInsights: true,
    topProducts: true,
  });

  const [errors, setErrors] = useState<ErrorState>({
    metrics: null,
    revenue: null,
    customerSatisfaction: null,
    visitorInsights: null,
    topProducts: null,
  });

  const fetchMetrics = async () => {
    try {
      setLoading(prev => ({ ...prev, metrics: true }));
      setErrors(prev => ({ ...prev, metrics: null }));
      const metrics = await dashboardAPI.getMetrics();
      setData(prev => ({ ...prev, metrics }));
    } catch (error) {
      setErrors(prev => ({ 
        ...prev, 
        metrics: 'Failed to load metrics' 
      }));
    } finally {
      setLoading(prev => ({ ...prev, metrics: false }));
    }
  };

  const fetchRevenue = async () => {
    try {
      setLoading(prev => ({ ...prev, revenue: true }));
      setErrors(prev => ({ ...prev, revenue: null }));
      const revenue = await dashboardAPI.getRevenue();
      setData(prev => ({ ...prev, revenue }));
    } catch (error) {
      setErrors(prev => ({ 
        ...prev, 
        revenue: 'Failed to load revenue data' 
      }));
    } finally {
      setLoading(prev => ({ ...prev, revenue: false }));
    }
  };

  const fetchCustomerSatisfaction = async () => {
    try {
      setLoading(prev => ({ ...prev, customerSatisfaction: true }));
      setErrors(prev => ({ ...prev, customerSatisfaction: null }));
      const customerSatisfaction = await dashboardAPI.getCustomerSatisfaction();
      setData(prev => ({ ...prev, customerSatisfaction }));
    } catch (error) {
      setErrors(prev => ({ 
        ...prev, 
        customerSatisfaction: 'Failed to load customer satisfaction data' 
      }));
    } finally {
      setLoading(prev => ({ ...prev, customerSatisfaction: false }));
    }
  };

  const fetchVisitorInsights = async () => {
    try {
      setLoading(prev => ({ ...prev, visitorInsights: true }));
      setErrors(prev => ({ ...prev, visitorInsights: null }));
      const visitorInsights = await dashboardAPI.getVisitorInsights();
      setData(prev => ({ ...prev, visitorInsights }));
    } catch (error) {
      setErrors(prev => ({ 
        ...prev, 
        visitorInsights: 'Failed to load visitor insights' 
      }));
    } finally {
      setLoading(prev => ({ ...prev, visitorInsights: false }));
    }
  };

  const fetchTopProducts = async () => {
    try {
      setLoading(prev => ({ ...prev, topProducts: true }));
      setErrors(prev => ({ ...prev, topProducts: null }));
      const topProducts = await dashboardAPI.getTopProducts();
      setData(prev => ({ ...prev, topProducts }));
    } catch (error) {
      setErrors(prev => ({ 
        ...prev, 
        topProducts: 'Failed to load top products' 
      }));
    } finally {
      setLoading(prev => ({ ...prev, topProducts: false }));
    }
  };

  const refreshAll = async () => {
    await Promise.all([
      fetchMetrics(),
      fetchRevenue(),
      fetchCustomerSatisfaction(),
      fetchVisitorInsights(),
      fetchTopProducts(),
    ]);
  };

  useEffect(() => {
    refreshAll();
  }, []);

  const isLoading = Object.values(loading).some(Boolean);
  const hasErrors = Object.values(errors).some(Boolean);

  return {
    data,
    loading,
    errors,
    isLoading,
    hasErrors,
    refresh: {
      all: refreshAll,
      metrics: fetchMetrics,
      revenue: fetchRevenue,
      customerSatisfaction: fetchCustomerSatisfaction,
      visitorInsights: fetchVisitorInsights,
      topProducts: fetchTopProducts,
    },
  };
};