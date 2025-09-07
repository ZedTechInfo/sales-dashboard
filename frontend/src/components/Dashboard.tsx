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
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
        <Box>
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#1F2937', 
              fontWeight: 'bold',
              fontSize: '20px',
              marginBottom: 0.5
            }}
          >
            Today&apos;s Sales
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#6B7280',
              fontSize: '14px'
            }}
          >
            Sales Summary
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<RefreshIcon />}
            onClick={refresh.all}
            disabled={isLoading}
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
            Refresh
          </Button>
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
      </Box>

      {/* Metrics Cards */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
          gap: 3,
          marginBottom: 4,
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

      {/* Charts Section */}
      <Box sx={{ marginBottom: 3 }}>
        {/* Top Row - Large Charts */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              lg: '2fr 1fr',
            },
            gap: 3,
            marginBottom: 3,
          }}
        >
          <VisitorInsightsChart />
          <TotalRevenueChart />
        </Box>

        {/* Bottom Row - Smaller Charts */}
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
          <CustomerSatisfaction />
          <TargetVsReality />
          <VolumeVsServiceLevel />
        </Box>
      </Box>

      {/* Additional Sections */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(2, 1fr)',
          },
          gap: 3,
        }}
      >
        <TopProducts />
        <SalesMapping />
      </Box>
    </Box>
  );
};

export default Dashboard;