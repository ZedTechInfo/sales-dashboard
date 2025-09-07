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
  Filler,
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
  Legend,
  Filler
);

const CustomerSatisfaction = () => {
  const { data: dashboardData, loading } = useDashboardData();

  // Process customer satisfaction data for chart
  const getChartData = () => {
    if (!dashboardData.customerSatisfaction) {
      return {
        labels: [],
        datasets: [],
      };
    }

    const satisfaction = dashboardData.customerSatisfaction;
    const labels = ['', '', '', '', '', '', '', '', '', '', '', ''];
    
    // Generate mock data variation around the average rating
    const generateVariedData = (avgRating: number) => {
      return labels.map(() => {
        const variation = (Math.random() - 0.5) * 0.8;
        return Math.max(1, Math.min(5, avgRating + variation));
      });
    };

    return {
      labels,
      datasets: [
        {
          label: 'Last Month',
          data: generateVariedData(satisfaction.averageRating - 0.3),
          borderColor: '#60A5FA',
          backgroundColor: 'rgba(96, 165, 250, 0.1)',
          tension: 0.4,
          fill: true,
          pointBackgroundColor: '#60A5FA',
          pointBorderColor: '#60A5FA',
          pointRadius: 0,
          pointHoverRadius: 6,
        },
        {
          label: 'This Month',
          data: generateVariedData(satisfaction.averageRating),
          borderColor: '#34D399',
          backgroundColor: 'rgba(52, 211, 153, 0.1)',
          tension: 0.4,
          fill: true,
          pointBackgroundColor: '#34D399',
          pointBorderColor: '#34D399',
          pointRadius: 0,
          pointHoverRadius: 6,
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
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        displayColors: false,
        callbacks: {
          label: function(context: any) {
            return context.dataset.label + ': ' + context.parsed.y.toFixed(1);
          }
        }
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
        min: 2.5,
        max: 5,
      },
    },
    elements: {
      point: {
        hoverRadius: 8,
      },
    },
  };

  if (loading.customerSatisfaction) {
    return (
      <Card sx={{ borderRadius: '16px', border: 'none', height: '280px', boxShadow: 'none', boxShadow: 'none' }}>
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
            Customer Satisfaction
          </Typography>
          <Box sx={{ height: 'calc(100% - 80px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CircularProgress size={32} />
          </Box>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={{ borderRadius: '16px', border: 'none', height: '280px', boxShadow: 'none', boxShadow: 'none' }}>
      <CardContent sx={{ padding: 3, height: '100%' }}>
        <Typography
          variant="h6"
          sx={{
            color: '#1F2937',
            fontWeight: 'bold',
            fontSize: '18px',
            marginBottom: 1,
          }}
        >
          Customer Satisfaction
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#60A5FA' }} />
            <Typography sx={{ fontSize: '12px', color: '#6B7280' }}>
              Last Month
            </Typography>
            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#1F2937' }}>
              {dashboardData.customerSatisfaction ? (dashboardData.customerSatisfaction.averageRating - 0.3).toFixed(1) : '0.0'}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#34D399' }} />
            <Typography sx={{ fontSize: '12px', color: '#6B7280' }}>
              This Month
            </Typography>
            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#1F2937' }}>
              {dashboardData.customerSatisfaction?.averageRating.toFixed(1) || '0.0'}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ height: 'calc(100% - 100px)', position: 'relative' }}>
          <Line data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomerSatisfaction;