import { createContext } from 'react';

export interface IThemeContext {
	isDark: boolean;
	toggleTheme: (value: boolean) => void;
}

export const ThemeContext = createContext({} as IThemeContext);
