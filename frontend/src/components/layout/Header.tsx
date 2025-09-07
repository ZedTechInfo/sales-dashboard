'use client';

import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  IconButton,
  Avatar,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material';
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Language as LanguageIcon,
} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '12px',
  backgroundColor: '#F5F6FA',
  border: '1px solid #E5E7EB',
  '&:hover': {
    backgroundColor: '#F3F4F6',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '300px',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#9CA3AF',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#6B7280',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.25, 1, 1.25, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    fontSize: '14px',
    '&::placeholder': {
      color: '#9CA3AF',
      opacity: 1,
    },
  },
}));

const Header = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ 
        backgroundColor: 'white',
        borderBottom: '1px solid #E5E7EB'
      }}
    >
      <Toolbar sx={{ paddingY: 1 }}>
        <Typography 
          variant="h5" 
          sx={{ 
            color: '#1F2937', 
            fontWeight: 'bold',
            fontSize: '24px'
          }}
        >
          Dashboard
        </Typography>
        
        <Box sx={{ flexGrow: 1 }} />
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search here..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LanguageIcon sx={{ color: '#6B7280', fontSize: '20px' }} />
            <Typography sx={{ color: '#374151', fontSize: '14px' }}>
              Eng (US)
            </Typography>
          </Box>
          
          <IconButton 
            size="small" 
            sx={{ 
              color: '#6B7280',
              backgroundColor: '#FEF3C7',
              '&:hover': { backgroundColor: '#FDE68A' },
              width: 36,
              height: 36
            }}
          >
            <NotificationsIcon fontSize="small" />
          </IconButton>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Avatar 
              alt="Mustfiq" 
              sx={{ 
                width: 36, 
                height: 36, 
                backgroundColor: '#F59E0B',
                fontSize: '14px',
                fontWeight: 'bold'
              }}
            >
              M
            </Avatar>
            <Box>
              <Typography variant="body2" sx={{ color: '#1F2937', fontWeight: 600, fontSize: '14px' }}>
                Mustfiq
              </Typography>
              <Typography variant="caption" sx={{ color: '#6B7280', fontSize: '12px' }}>
                Admin
              </Typography>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;