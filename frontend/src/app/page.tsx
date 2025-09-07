import Dashboard from '@/components/Dashboard';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F8F9FA' }}>
      <Sidebar />
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Box sx={{ flex: 1, padding: 3 }}>
          <Dashboard />
        </Box>
      </Box>
    </Box>
  );
}