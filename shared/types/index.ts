export interface ILanguage {
	label: string;
	value: string;
}

export interface ITranslate {
	type: TCard;
	translit: string;
	translationResult: string;
	georgianText: string;
	country: string;
}

export interface IStorage<T> {
	data: T;
}

export type TCard = 'special' | 'regular';
