import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { UIProvider } from '../context/ui';
import { SnackbarProvider } from 'notistack'
import { EntriesProvider } from '../context/entries/EntriesProvider';

import { lightTheme } from '../themes';
import { darkTheme } from '../themes/dark-theme';

import '../styles/globals.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={3}>
      <EntriesProvider>
        <UIProvider>
          <ThemeProvider theme={ darkTheme }>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </UIProvider>
      </EntriesProvider>
    </SnackbarProvider>
  ) 
}

export default MyApp
