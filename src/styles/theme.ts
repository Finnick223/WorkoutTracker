import { PaletteMode } from '@mui/material';

export const getDesignThemes = (mode: PaletteMode) => ({
  palette: {
    error: {
      main: '#d32f2f',
    },
    warning: {
      main: '#ed6c02',
    },
    info: {
      main: '#0288d1',
    },
    success: {
      main: '#2e7d32',
    },
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#6366f1',
            light: '#818cf8',
            dark: '#4f46e5',
          },
          secondary: {
            main: '#F16366',
            light: '#f38284',
            dark: '#a84547',
          },
          text: {
            primary: 'rgba(0,0,0,0.88)',
            secondary: 'rgba(0,0,0,0.6)',
            disabled: 'rgba(0,0,0,0.38)',
          },
          background: {
            default: '#ffffff',
            paper: '#ffffff',
          },
        }
      : {
          primary: {
            main: '#6366f1',
            light: '#818cf8',
            dark: '#4f46e5',
          },
          secondary: {
            main: '#F16366',
            light: '#f38284',
            dark: '#a84547',
          },
          text: {
            primary: '#ffffff',
            secondary: 'rgba(255,255,255,0.7)',
            disabled: 'rgba(255,255,255,0.5)',
          },
          background: {
            default: '#383838',
            paper: '#383838',
          },
        }),
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
});
