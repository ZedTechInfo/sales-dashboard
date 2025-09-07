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

const VolumeVsServiceLevel = () => {
  const data = {
    labels: ['', '', '', '', '', '', '', '', ''],
    datasets: [
      {
        label: 'Volume',
        data: [1315, 1200, 1450, 1380, 1100, 1250, 1400, 1150, 1300],
        backgroundColor: '#3B82F6',
        borderRadius: 4,
        maxBarThickness: 25,
      },
      {
        label: 'Services',
        data: [635, 580, 720, 650, 520, 590, 680, 540, 620],
        backgroundColor: '#22C55E',
        borderRadius: 4,
        maxBarThickness: 25,
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
            return context.dataset.label + ': ' + context.parsed.y.toLocaleString();
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
        max: 1600,
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
          Volume vs Service Level
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#3B82F6' }} />
            <Typography sx={{ fontSize: '12px', color: '#6B7280' }}>
              Volume
            </Typography>
            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#1F2937' }}>
              1,315
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#22C55E' }} />
            <Typography sx={{ fontSize: '12px', color: '#6B7280' }}>
              Services
            </Typography>
            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#1F2937' }}>
              635
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

export default VolumeVsServiceLevel;