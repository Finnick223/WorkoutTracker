import { createTheme, PaletteMode, ThemeProvider } from '@mui/material';
import { PropsWithChildren, useMemo, useState } from 'react';
import { getDesignThemes } from 'src/styles/theme';

export const MaterialProvider = ({
  children,
}: PropsWithChildren<Record<string, unknown>>) => {
  const [mode] = useState<PaletteMode>('light');

  const theme = useMemo(() => createTheme(getDesignThemes(mode)), [mode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
