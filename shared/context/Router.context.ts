import { createContext } from 'react';

export interface IRouterContext {
	changePage: number;
}

export const RouterContext = createContext({} as IRouterContext);
