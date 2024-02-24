import { Button, Divider, Drawer, Icon, List, ListItem, ListItemIcon, ListItemText, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import Logo from '../../assets/deloitte-logo.png';
import HomeIcon from '@mui/icons-material/Home';
import { BarChart } from '@mui/icons-material';
import { useDrawerContext } from '../../contexts';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';

interface IMenuLateralItemProps {
  children: React.ReactNode;
}

export const MenuLateral: React.FC<IMenuLateralItemProps> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen } = useDrawerContext();
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <>
      <Drawer variant={smDown ? 'temporary' : 'permanent'} open={isDrawerOpen} onClose={toggleDrawerOpen}>
        <Box height="100%" display={'flex'} flexDirection={'column'} width={theme.spacing(28)} sx={{ backgroundColor: theme.palette.background.default }}>
          <Box width="100%" height={theme.spacing(20)} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <img src={Logo} alt="Logo" style={{ width: '80%', margin: 'auto', marginTop: theme.spacing(2), marginBottom: theme.spacing(2), marginLeft: theme.spacing(3) }} />
          </Box>
          <Divider style={{marginBottom: theme.spacing(3)}} />
          <Box flex={1}>
            <List component="nav" aria-label="main mailbox folders">
              <ListItem>
                <ListItemIcon>
                  <HomeIcon/>
                </ListItemIcon>
                <ListItemText primary="Início" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BarChart />
                </ListItemIcon>
                <ListItemText primary="Gráficos" />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Drawer>
      {smDown && (
        <Button variant='contained' color='secondary' onClick={toggleDrawerOpen}>
          <DensitySmallIcon/>
        </Button>
      )}
      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};