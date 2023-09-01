"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

interface tenstackProviderProps {
  children: React.ReactNode;
}

const TenStackProvider = ({ children }: tenstackProviderProps) => {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TenStackProvider;
