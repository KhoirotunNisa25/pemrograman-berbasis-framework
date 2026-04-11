import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/layout/navbar'
import AppShell from '@/components/layout/AppShell'
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps : { session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </SessionProvider>
  );
};
