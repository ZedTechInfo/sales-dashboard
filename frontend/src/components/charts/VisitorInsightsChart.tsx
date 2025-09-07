'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Card, CardContent, Typography, Box, CircularProgress } from '@mui/material';
import { useDashboardData } from '../../hooks/useDashboardData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const VisitorInsightsChart = () => {
  const { data: dashboardData, loading } = useDashboardData();

  // Process visitor insights data for chart
  const getChartData = () => {
    if (!dashboardData.visitorInsights) {
      return {
        labels: [],
        datasets: [],
      };
    }

    const insights = dashboardData.visitorInsights;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    // Generate mock monthly data based on the totals from backend
    const generateMonthlyData = (total: number) => {
      return months.map((_, index) => {
        // Create some variation in the data
        const variation = 0.8 + Math.sin(index * 0.5) * 0.4;
        return Math.round((total / 12) * variation);
      });
    };

    return {
      labels: months,
      datasets: [
        {
          label: 'Total Visitors',
          data: generateMonthlyData(insights.totalVisitors),
          borderColor: '#8B5CF6',
          backgroundColor: 'rgba(139, 92, 246, 0.1)',
          tension: 0.4,
          pointBackgroundColor: '#8B5CF6',
          pointBorderColor: '#8B5CF6',
          pointRadius: 4,
        },
        {
          label: 'New Visitors',
          data: generateMonthlyData(insights.newVisitors),
          borderColor: '#EF4444',
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          tension: 0.4,
          pointBackgroundColor: '#EF4444',
          pointBorderColor: '#EF4444',
          pointRadius: 4,
        },
        {
          label: 'Returning Visitors',
          data: generateMonthlyData(insights.returningVisitors),
          borderColor: '#22C55E',
          backgroundColor: 'rgba(34, 197, 94, 0.1)',
          tension: 0.4,
          pointBackgroundColor: '#22C55E',
          pointBorderColor: '#22C55E',
          pointRadius: 4,
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
            return value + '';
          },
        },
      },
    },
    elements: {
      point: {
        hoverRadius: 8,
      },
    },
  };

  if (loading.visitorInsights) {
    return (
      <Card sx={{ borderRadius: '16px', border: 'none', height: '400px' }}>
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
            Visitor Insights
          </Typography>
          <Box sx={{ height: 'calc(100% - 80px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CircularProgress />
          </Box>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={{ borderRadius: '16px', border: 'none', height: '400px' }}>
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
          Visitor Insights
        </Typography>
        <Box sx={{ height: 'calc(100% - 80px)', position: 'relative' }}>
          <Line data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default VisitorInsightsChart;