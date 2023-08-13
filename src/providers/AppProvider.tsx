import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { StyledEngineProvider } from '@mui/material';

import { SnackbarProvider } from 'notistack';
import { queryClient } from '../libs/react-query';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider maxSnack={1} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <StyledEngineProvider injectFirst>
          <BrowserRouter>{children}</BrowserRouter>
        </StyledEngineProvider>
      </SnackbarProvider>
    </QueryClientProvider>
  );
};
