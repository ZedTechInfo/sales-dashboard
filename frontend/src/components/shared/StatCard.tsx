import { Card, CardContent, Typography, Box } from '@mui/material';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  color: string;
}

const StatCard = ({ title, value, change, icon, color }: StatCardProps) => {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              backgroundColor: color,
              borderRadius: '50%',
              padding: 1,
              marginRight: 2,
              color: 'white',
            }}
          >
            {icon}
          </Box>
          <Box>
            <Typography variant="h6">{value}</Typography>
            <Typography color="textSecondary">{title}</Typography>
          </Box>
        </Box>
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          {change}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatCard;