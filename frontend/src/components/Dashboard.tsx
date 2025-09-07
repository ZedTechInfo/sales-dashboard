'use client';

import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Alert,
} from '@mui/material';
import {
  AttachMoney as MoneyIcon,
  ShoppingBag as OrderIcon,
  CheckCircle as CheckIcon,
  PersonAdd as PersonAddIcon,
  FileDownload as ExportIcon,
  Refresh as RefreshIcon,
} from '@mui/icons-material';
import StatCard from './shared/StatCard';
import VisitorInsightsChart from './charts/VisitorInsightsChart';
import TotalRevenueChart from './charts/TotalRevenueChart';
import CustomerSatisfaction from './charts/CustomerSatisfaction';
import TargetVsReality from './charts/TargetVsReality';
import VolumeVsServiceLevel from './charts/VolumeVsServiceLevel';
import TopProducts from './TopProducts';
import SalesMapping from './SalesMapping';
import { useDashboardData } from '../hooks/useDashboardData';

const Dashboard = () => {
  const { data, isLoading, hasErrors, refresh } = useDashboardData();

  // Show loading spinner while data is loading
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
        <CircularProgress />
      </Box>
    );
  }

  // Show error message if there are errors
  if (hasErrors) {
    return (
      <Box sx={{ marginBottom: 3 }}>
        <Alert severity="error" sx={{ marginBottom: 2 }}>
          Failed to load dashboard data. Please check if the backend is running.
        </Alert>
        <Button
          variant="contained"
          startIcon={<RefreshIcon />}
          onClick={refresh.all}
          sx={{ marginBottom: 3 }}
        >
          Retry
        </Button>
      </Box>
    );
  }

  const metrics = data.metrics;

  return (
    <Box>

      {/* First Row - Today's Sales and Visitor Insights */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            lg: '60% 40%',
          },
          gap: 3,
          marginBottom: 3,
        }}
      >
        {/* Today's Sales Box with Metrics Cards in Single Row */}
        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: 3,
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: '#1F2937',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  marginBottom: 0.5,
                }}
              >
                Today&apos;s Sales
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#6B7280',
                  fontSize: '14px',
                }}
              >
                Sales Summary
              </Typography>
            </Box>
            <Button
              variant="outlined"
              startIcon={<ExportIcon />}
              sx={{
                borderColor: '#D1D5DB',
                color: '#374151',
                textTransform: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                '&:hover': {
                  borderColor: '#9CA3AF',
                  backgroundColor: '#F9FAFB',
                },
              }}
            >
              Export
            </Button>
          </Box>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                lg: 'repeat(4, 1fr)',
              },
              gap: 2,
            }}
          >
            <StatCard
              title="Total Revenue"
              value={`$${metrics?.totalRevenue ? (metrics.totalRevenue / 1000).toFixed(0) : '0'}k`}
              subtitle="Total Sales"
              change="+8% from yesterday"
              icon={<MoneyIcon />}
              backgroundColor="#FFF1F2"
              iconColor="#EF4444"
            />
            <StatCard
              title="Total Orders"
              value={metrics?.totalOrders?.toString() || '0'}
              subtitle="Total Order"
              change="+5% from yesterday"
              icon={<OrderIcon />}
              backgroundColor="#FFF7ED"
              iconColor="#F97316"
            />
            <StatCard
              title="Total Products"
              value={metrics?.totalProducts?.toString() || '0'}
              subtitle="Product Sold"
              change="+1.2% from yesterday"
              icon={<CheckIcon />}
              backgroundColor="#F0FDF4"
              iconColor="#22C55E"
            />
            <StatCard
              title="Total Customers"
              value={metrics?.totalCustomers?.toString() || '0'}
              subtitle="New Customers"
              change="+0.5% from yesterday"
              icon={<PersonAddIcon />}
              backgroundColor="#F3F4F6"
              iconColor="#8B5CF6"
            />
          </Box>
        </Box>
        
        {/* Visitor Insights Chart */}
        <VisitorInsightsChart />
      </Box>

      {/* Second Row - Total Revenue, Customer Satisfaction, Target vs Reality */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(3, 1fr)',
          },
          gap: 3,
          marginBottom: 3,
        }}
      >
        <TotalRevenueChart />
        <CustomerSatisfaction />
        <TargetVsReality />
      </Box>

      {/* Third Row - Top Products, Sales Mapping, Volume vs Service Level */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(3, 1fr)',
          },
          gap: 3,
        }}
      >
        <TopProducts />
        <SalesMapping />
        <VolumeVsServiceLevel />
      </Box>
    </Box>
  );
};

export default Dashboard;