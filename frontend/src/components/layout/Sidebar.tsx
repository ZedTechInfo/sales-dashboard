import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Leaderboard as LeaderboardIcon,
  ShoppingBag as ShoppingBagIcon,
  Assessment as AssessmentIcon,
  Mail as MailIcon,
  Settings as SettingsIcon,
  ExitToApp as ExitToAppIcon,
} from '@mui/icons-material';

const Sidebar = () => {
  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Leaderboard', icon: <LeaderboardIcon /> },
    { text: 'Order', icon: <ShoppingBagIcon /> },
    { text: 'Products', icon: <ShoppingBagIcon /> },
    { text: 'Sales Report', icon: <AssessmentIcon /> },
    { text: 'Messages', icon: <MailIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
    { text: 'Sign Out', icon: <ExitToAppIcon /> },
  ];

  return (
    <Box
      sx={{
        width: 240,
        height: '100vh',
        backgroundColor: 'background.paper',
        borderRight: '1px solid #E0E0E0',
        padding: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
        <Typography variant="h6" sx={{ marginLeft: 1, fontWeight: 'bold' }}>
          Dabang
        </Typography>
      </Box>
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              sx={{
                borderRadius: '8px',
                backgroundColor:
                  item.text === 'Dashboard' ? 'primary.main' : 'transparent',
                color:
                  item.text === 'Dashboard' ? 'primary.contrastText' : 'inherit',
                '&:hover': {
                  backgroundColor:
                    item.text === 'Dashboard' ? 'primary.dark' : '#F5F5F5',
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color:
                    item.text === 'Dashboard'
                      ? 'primary.contrastText'
                      : 'inherit',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;