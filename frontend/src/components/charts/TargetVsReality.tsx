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
import { Card, CardContent, Typography, Box } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TargetVsReality = () => {
  const data = {
    labels: ['', '', '', '', '', '', '', '', '', ''],
    datasets: [
      {
        label: 'Reality Sales',
        data: [8.2, 7.5, 9.1, 8.8, 7.2, 8.9, 9.5, 8.1, 7.8, 9.3],
        backgroundColor: '#22C55E',
        borderRadius: 4,
        maxBarThickness: 20,
      },
      {
        label: 'Target Sales',
        data: [12.0, 11.8, 12.5, 12.2, 11.5, 12.8, 13.0, 12.3, 11.9, 12.7],
        backgroundColor: '#FBBF24',
        borderRadius: 4,
        maxBarThickness: 20,
      },
    ],
  };

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
        callbacks: {
          label: function(context: any) {
            return context.dataset.label + ': ' + context.parsed.y;
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
        max: 15,
      },
    },
  };

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
          Target vs Reality
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#22C55E' }} />
            <Typography sx={{ fontSize: '12px', color: '#6B7280' }}>
              Reality Sales
            </Typography>
            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#1F2937' }}>
              8,823
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#FBBF24' }} />
            <Typography sx={{ fontSize: '12px', color: '#6B7280' }}>
              Target Sales
            </Typography>
            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#1F2937' }}>
              12,122
            </Typography>
          </Box>
        </Box>
        <Box sx={{ height: 'calc(100% - 100px)', position: 'relative' }}>
          <Bar data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default TargetVsReality;