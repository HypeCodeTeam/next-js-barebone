import React, { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import AxiosProvider from 'shared/providers/AxiosProvider';

const client = new QueryClient();

const Layout: FC = ({ children }) => (
  <>
    <AxiosProvider>
      <QueryClientProvider client={client}>
        <main>{children}</main>
      </QueryClientProvider>
    </AxiosProvider>
  </>
)

export default Layout;
