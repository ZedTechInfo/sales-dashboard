'use client';

import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
} from '@mui/material';

const SalesMapping = () => {
  return (
    <Card sx={{ borderRadius: '16px', border: 'none', height: '280px', boxShadow: 'none' }}>
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
          Sales Mapping by Country
        </Typography>
        
        {/* Placeholder for World Map */}
        <Box 
          sx={{ 
            height: 'calc(100% - 60px)', 
            backgroundColor: '#F8F9FA',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            border: '2px dashed #D1D5DB',
          }}
        >
          {/* Simulated Map Regions */}
          <Box sx={{ position: 'relative', width: '80%', height: '60%' }}>
            {/* Europe */}
            <Box
              sx={{
                position: 'absolute',
                top: '20%',
                left: '45%',
                width: 20,
                height: 20,
                borderRadius: '50%',
                backgroundColor: '#FBBF24',
                opacity: 0.8,
              }}
            />
            {/* North America */}
            <Box
              sx={{
                position: 'absolute',
                top: '25%',
                left: '25%',
                width: 24,
                height: 24,
                borderRadius: '50%',
                backgroundColor: '#8B5CF6',
                opacity: 0.8,
              }}
            />
            {/* Asia */}
            <Box
              sx={{
                position: 'absolute',
                top: '30%',
                left: '70%',
                width: 18,
                height: 18,
                borderRadius: '50%',
                backgroundColor: '#3B82F6',
                opacity: 0.8,
              }}
            />
            {/* South America */}
            <Box
              sx={{
                position: 'absolute',
                top: '60%',
                left: '30%',
                width: 16,
                height: 16,
                borderRadius: '50%',
                backgroundColor: '#EF4444',
                opacity: 0.8,
              }}
            />
            {/* Australia */}
            <Box
              sx={{
                position: 'absolute',
                top: '70%',
                left: '75%',
                width: 14,
                height: 14,
                borderRadius: '50%',
                backgroundColor: '#22C55E',
                opacity: 0.8,
              }}
            />
          </Box>
          
          <Typography 
            variant="body2" 
            sx={{ 
              position: 'absolute',
              bottom: 20,
              color: '#9CA3AF',
              fontSize: '12px',
              textAlign: 'center'
            }}
          >
            Interactive world map would be implemented here
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SalesMapping;