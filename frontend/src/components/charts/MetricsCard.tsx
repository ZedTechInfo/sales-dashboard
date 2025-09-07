import { Box, Card, CardContent, Typography } from '@mui/material';

interface Props {
  data: { name: string; value: number; change: string }[];
}

export default function MetricsCard({ data }: Props) {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      {data.map((item, index) => (
        <Box key={index} sx={{ flex: '1 1 250px' }}>
          <Card sx={{ backgroundColor: ['#ffebee', '#fff3e0', '#e8f5e9', '#e1f5fe'][index % 4] }}>
            <CardContent>
              <Typography variant="h6">{item.value}</Typography>
              <Typography variant="body2">{item.name}</Typography>
              <Typography variant="caption" color="text.secondary">{item.change}</Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
}