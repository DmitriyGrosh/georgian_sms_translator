import { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Router from './router';

import { theme, colorsLight, colorsDark } from './shared/lib/theme';
import { ThemeContext } from './shared/context';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(true);

  const toggleTheme = (value: boolean) => {
    setIsDark(value);
  };

  const appTheme = {
    ...theme,
    colors: isDark ? colorsDark.colors : colorsLight.colors,
  }

  return (
    <PaperProvider theme={appTheme}>
      <SafeAreaProvider>
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
          <Router />
        </ThemeContext.Provider>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
