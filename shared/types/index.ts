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

export interface IReplacementsMap {
	[key: string]: string;
}

export enum SERVICE_RESULT_TYPE {
	SUCCESS = 'SUCCESS',
	FAILURE = 'FAILURE',
}

type ServiceResultSuccess<T> = {
	type: SERVICE_RESULT_TYPE.SUCCESS,
	data: T,
}

type ServiceResultFailure = {
	type: SERVICE_RESULT_TYPE.FAILURE,
	data: string
}

export type ServiceResult<T> = ServiceResultSuccess<T> | ServiceResultFailure;


