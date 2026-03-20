'use client';
import * as React from 'react';
import { RainbowKitProvider, darkTheme, getDefaultConfig } from '@rainbow-me/rainbowkit';
import { WagmiProvider, http } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@rainbow-me/rainbowkit/styles.css';

const tempoChain = {
  id: 4217, // Pastikan ID ini sesuai dengan Tempo Mainnet
  name: 'Tempo',
  nativeCurrency: { name: 'Tempo', symbol: 'TEMPO', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://tempo-mainnet.drpc.org'] },
  },
  blockExplorers: {
    default: { name: 'TempoScan', url: 'https://explore.tempo.xyz/' },
  },
} as const;

const config = getDefaultConfig({
  appName: 'Enshrined Mint',
  projectId: 'YOUR_PROJECT_ID', // Dapatkan di cloud.walletconnect.com (opsional)
  chains: [tempoChain],
  transports: { [tempoChain.id]: http() },
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme({ accentColor: '#d4af37' })}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
