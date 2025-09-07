'use client';

import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  LinearProgress,
  List,
  ListItem,
  Chip,
  CircularProgress,
} from '@mui/material';
import { useDashboardData } from '../hooks/useDashboardData';

interface ProcessedProduct {
  id: number;
  name: string;
  frequency: string;
  sales: string;
  percentage: number;
  color: string;
}

const TopProducts = () => {
  const { data, loading } = useDashboardData();
  
  // Process backend data into the format needed for display
  const processProducts = (): ProcessedProduct[] => {
    if (!data.topProducts) return [];
    
    const colors = ['#22C55E', '#10B981', '#8B5CF6', '#F59E0B', '#EF4444'];
    const totalSales = data.topProducts.reduce((sum, product) => sum + product.sales, 0);
    
    return data.topProducts.map((product, index) => ({
      id: product.id,
      name: product.name,
      frequency: 'Frequently',
      sales: `${Math.round((product.sales / totalSales) * 100)}%`,
      percentage: Math.round((product.sales / totalSales) * 100),
      color: colors[index % colors.length],
    }));
  };

  const products = processProducts();

  if (loading.topProducts) {
    return (
      <Card sx={{ borderRadius: '16px', border: 'none', height: 'fit-content' }}>
        <CardContent sx={{ padding: 3 }}>
          <Typography
            variant="h6"
            sx={{
              color: '#1F2937',
              fontWeight: 'bold',
              fontSize: '18px',
              marginBottom: 3,
            }}
          >
            Top Products
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', paddingY: 4 }}>
            <CircularProgress size={32} />
          </Box>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={{ borderRadius: '16px', border: 'none', height: 'fit-content' }}>
      <CardContent sx={{ padding: 3 }}>
        <Typography
          variant="h6"
          sx={{
            color: '#1F2937',
            fontWeight: 'bold',
            fontSize: '18px',
            marginBottom: 3,
          }}
        >
          Top Products
        </Typography>
        
        <List sx={{ padding: 0 }}>
          {products.map((product, index) => (
            <ListItem
              key={product.id}
              sx={{
                padding: 0,
                marginBottom: 3,
                '&:last-child': {
                  marginBottom: 0,
                },
              }}
            >
              <Box sx={{ width: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#1F2937',
                      fontSize: '14px',
                      fontWeight: 500,
                      maxWidth: '60%',
                    }}
                  >
                    {String(index + 1).padStart(2, '0')} {product.name}
                  </Typography>
                  <Chip
                    label={product.sales}
                    sx={{
                      backgroundColor: `${product.color}20`,
                      color: product.color,
                      fontSize: '12px',
                      fontWeight: 'bold',
                      height: 24,
                      '& .MuiChip-label': {
                        paddingX: 1,
                      },
                    }}
                  />
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 1 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#6B7280',
                      fontSize: '12px',
                    }}
                  >
                    {product.frequency}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#6B7280',
                      fontSize: '12px',
                    }}
                  >
                    {product.sales}
                  </Typography>
                </Box>
                
                <LinearProgress
                  variant="determinate"
                  value={product.percentage}
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: '#F3F4F6',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: product.color,
                      borderRadius: 3,
                    },
                  }}
                />
              </Box>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default TopProducts;