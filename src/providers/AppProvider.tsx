import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { StyledEngineProvider } from '@mui/material';

import { queryClient } from '../libs/react-query';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>{children}</BrowserRouter>
      </StyledEngineProvider>
    </QueryClientProvider>
  );
};
