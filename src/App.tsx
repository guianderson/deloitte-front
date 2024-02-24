import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Light } from './shared/themes';
import { Drawer, Menu, ThemeProvider } from '@mui/material';
import { MenuLateral } from './shared/components/menu-lateral/menuLateral';
import { DrawerProvider } from './shared/contexts';

export const App = () => {
  return (
    <ThemeProvider theme={Light}>
      <DrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
        </BrowserRouter>
      </DrawerProvider>
    </ThemeProvider>
  );
};  