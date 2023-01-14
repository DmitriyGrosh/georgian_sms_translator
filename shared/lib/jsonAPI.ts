export const stringify = <T>(value: T): string => JSON.stringify(value);

export const parse = <T>(value: string): T => JSON.parse(value);
