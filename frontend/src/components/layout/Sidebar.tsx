import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Leaderboard as LeaderboardIcon,
  ShoppingBag as ShoppingBagIcon,
  Assessment as AssessmentIcon,
  Mail as MailIcon,
  Settings as SettingsIcon,
  ExitToApp as ExitToAppIcon,
  Inventory as ProductsIcon,
} from '@mui/icons-material';

const Sidebar = () => {
  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Leaderboard', icon: <LeaderboardIcon /> },
    { text: 'Order', icon: <ShoppingBagIcon /> },
    { text: 'Products', icon: <ProductsIcon /> },
    { text: 'Sales Report', icon: <AssessmentIcon /> },
    { text: 'Messages', icon: <MailIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
    { text: 'Sign Out', icon: <ExitToAppIcon /> },
  ];

  return (
    <Box
      sx={{
        width: 280,
        height: '100vh',
        backgroundColor: '#5F5AF6',
        padding: 3,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            backgroundColor: 'white',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 2,
          }}
        >
          <Typography sx={{ color: '#5F5AF6', fontWeight: 'bold', fontSize: '18px' }}>
            D
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
          Dabang
        </Typography>
      </Box>

      {/* Menu Items */}
      <List sx={{ flex: 1 }}>
        {menuItems.slice(0, -1).map((item, index) => (
          <ListItem key={index} disablePadding sx={{ marginBottom: 1 }}>
            <ListItemButton
              sx={{
                borderRadius: '12px',
                backgroundColor: item.text === 'Dashboard' ? '#4F46E5' : 'transparent',
                color: 'white',
                paddingY: 1.5,
                '&:hover': {
                  backgroundColor: item.text === 'Dashboard' ? '#4338CA' : 'rgba(255,255,255,0.1)',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{ 
                  fontSize: '14px', 
                  fontWeight: item.text === 'Dashboard' ? 600 : 400 
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Dabang Pro Card */}
      <Card
        sx={{
          backgroundColor: '#4F46E5',
          color: 'white',
          borderRadius: '16px',
          marginBottom: 2,
          border: 'none',
          boxShadow: 'none',
        }}
      >
        <CardContent sx={{ padding: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                backgroundColor: 'white',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 1,
              }}
            >
              <Typography sx={{ color: '#4F46E5', fontWeight: 'bold', fontSize: '14px' }}>
                $
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              Dabang Pro
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ fontSize: '12px', opacity: 0.9, marginBottom: 2 }}>
            Buy monthly & get access to all premium features!
          </Typography>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: 'white',
              color: '#4F46E5',
              fontSize: '12px',
              fontWeight: 'bold',
              textTransform: 'none',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: '#F8F9FA',
              },
            }}
          >
            Get Pro
          </Button>
        </CardContent>
      </Card>

      {/* Sign Out */}
      <ListItem disablePadding>
        <ListItemButton
          sx={{
            borderRadius: '12px',
            color: 'white',
            paddingY: 1.5,
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.1)',
            },
          }}
        >
          <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText 
            primary="Sign Out" 
            primaryTypographyProps={{ fontSize: '14px' }}
          />
        </ListItemButton>
      </ListItem>
    </Box>
  );
};

export default Sidebar;