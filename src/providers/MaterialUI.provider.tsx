import { createTheme, PaletteMode, ThemeProvider } from '@mui/material';
import {
  createContext,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { getDesignThemes } from 'src/styles/theme';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const MaterialProvider = ({
  children,
}: PropsWithChildren<Record<string, unknown>>) => {
  const [mode, setMode] = useState<PaletteMode>('light');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedMode = window.localStorage.getItem('theme');
      if (storedMode === 'light' || storedMode === 'dark') setMode(storedMode);
    }
  }, []);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newMode);
        setMode(newMode);
      },
    }),
    [mode],
  );

  const theme = useMemo(() => createTheme(getDesignThemes(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>;
    </ColorModeContext.Provider>
  );
};
