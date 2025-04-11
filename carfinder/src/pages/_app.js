import '@/styles/global.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import { ToastContainer } from "react-toastify";
export default function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState('light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background: {
            default: mode === 'dark' ? '#121212' : '#ffffff',
            paper: mode === 'dark' ? '#424242' : '#ffffff',
          },
          text: {
            primary: mode === 'dark' ? '#ffffff' : '#000000',
            secondary: mode === 'dark' ? '#bdbdbd' : '#757575',
          },
        
          primary: {
            main: '#1976d2',
          },
          color:{
            default: mode === 'light' ? 'black' : 'white',
          }
        },
      }),
    [mode]
  );

  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode) setMode(savedMode);
  }, []);

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        <Navbar toggleTheme={toggleTheme} mode={mode} />
        <Component {...pageProps} toggleTheme={toggleTheme} mode={mode} />
        <ToastContainer position="top-right" autoClose={1500} theme="colored" />
      </>
    </ThemeProvider>
  );
}
