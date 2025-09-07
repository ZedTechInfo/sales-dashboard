'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Card, CardContent, Typography, Box, CircularProgress } from '@mui/material';
import { useDashboardData } from '../../hooks/useDashboardData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TotalRevenueChart = () => {
  const { data: dashboardData, loading } = useDashboardData();

  // Process revenue data for the chart
  const getChartData = () => {
    if (!dashboardData.revenue) {
      return {
        labels: [],
        datasets: [],
      };
    }

    return {
      labels: dashboardData.revenue.map(item => item.month),
      datasets: [
        {
          label: 'Online Sales',
          data: dashboardData.revenue.map(item => item.revenue * 0.6), // 60% online
          backgroundColor: '#22C55E',
          borderRadius: 4,
          maxBarThickness: 40,
        },
        {
          label: 'Offline Sales', 
          data: dashboardData.revenue.map(item => item.revenue * 0.4), // 40% offline
          backgroundColor: '#3B82F6',
          borderRadius: 4,
          maxBarThickness: 40,
        },
      ],
    };
  };

  const data = getChartData();

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        align: 'start' as const,
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        callbacks: {
          label: function(context: any) {
            return context.dataset.label + ': $' + context.parsed.y.toLocaleString();
          }
        }
      },
    },
    scales: {
      x: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
          color: '#6B7280',
        },
      },
      y: {
        border: {
          display: false,
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          font: {
            size: 12,
          },
          color: '#6B7280',
          callback: function(value: any) {
            return '$' + (value / 1000) + 'k';
          },
        },
      },
    },
  };

  if (loading.revenue) {
    return (
      <Card sx={{ borderRadius: '16px', border: 'none', height: '400px', boxShadow: 'none', boxShadow: 'none' }}>
        <CardContent sx={{ padding: 3, height: '100%' }}>
          <Typography
            variant="h6"
            sx={{
              color: '#1F2937',
              fontWeight: 'bold',
              fontSize: '18px',
              marginBottom: 3,
            }}
          >
            Total Revenue
          </Typography>
          <Box sx={{ height: 'calc(100% - 80px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CircularProgress />
          </Box>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={{ borderRadius: '16px', border: 'none', height: '400px', boxShadow: 'none', boxShadow: 'none' }}>
      <CardContent sx={{ padding: 3, height: '100%' }}>
        <Typography
          variant="h6"
          sx={{
            color: '#1F2937',
            fontWeight: 'bold',
            fontSize: '18px',
            marginBottom: 3,
          }}
        >
          Total Revenue
        </Typography>
        <Box sx={{ height: 'calc(100% - 80px)', position: 'relative' }}>
          <Bar data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default TotalRevenueChart;