
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider, Box } from '@mantine/core';
import TopBar from '../components/TopBar';
import { useRouter } from 'next/router';

const gradient = 'linear-gradient(120deg, #228be6 0%, #15aabf 50%, #f7b801 100%)';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const active = (router.pathname.split('/')[1] || 'home') as 'home' | 'about' | 'projects';

  return (
    <MantineProvider>
      <Box
        style={{
          minHeight: '100vh',
          width: '100vw',
          background: gradient,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          position: 'relative',
          transition: 'background 0.7s cubic-bezier(.4,2,.6,1)',
        }}
      >
        <TopBar active={active} />
        <Component {...pageProps} />
      </Box>
    </MantineProvider>
  );
}
