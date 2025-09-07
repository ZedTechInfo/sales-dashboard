import { Card, CardContent, Typography, Box } from '@mui/material';

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  change: string;
  icon: React.ReactNode;
  backgroundColor: string;
  iconColor: string;
}

const StatCard = ({ title, value, subtitle, change, icon, backgroundColor, iconColor }: StatCardProps) => {
  return (
    <Card 
      sx={{ 
        backgroundColor, 
        border: 'none',
        borderRadius: '16px',
        minHeight: '120px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <CardContent sx={{ padding: 3, height: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 2 }}>
          <Box
            sx={{
              backgroundColor: iconColor,
              borderRadius: '12px',
              padding: 1.5,
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 48,
              height: 48,
            }}
          >
            {icon}
          </Box>
        </Box>
        
        <Box>
          <Typography 
            variant="h4" 
            sx={{ 
              color: '#1F2937', 
              fontWeight: 'bold', 
              fontSize: '32px',
              marginBottom: 0.5
            }}
          >
            {value}
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#374151', 
              fontSize: '14px',
              fontWeight: 500,
              marginBottom: 1
            }}
          >
            {subtitle}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#10B981', 
              fontSize: '12px',
              fontWeight: 500
            }}
          >
            {change}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatCard;