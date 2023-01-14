import AsyncStorage from '@react-native-async-storage/async-storage';

import {
	IStorage,
	ITranslate,
	SERVICE_RESULT_TYPE,
	ServiceResult,
} from '../shared/types';

import { deepEqual } from '../shared/lib/equal';
import { parse, stringify } from '../shared/lib/jsonAPI';

type TTranslateStorage = IStorage<ITranslate[]>;
type TListResult = Promise<ServiceResult<ITranslate[]>>;

export const getAllList = async (): TListResult => {
	try {
		const data = await AsyncStorage.getItem('list');

		if (data) {
			const list = parse<TTranslateStorage>(data);

			return {
				type: SERVICE_RESULT_TYPE.SUCCESS,
				data: list.data,
			};
		}

		return {
			type: SERVICE_RESULT_TYPE.SUCCESS,
			data: []
		};
	} catch (e: unknown) {
		console.log('==========>e', e);

		return {
			type: SERVICE_RESULT_TYPE.FAILURE,
			data: 'error',
		};
	}
};

export const addCard = async (card: ITranslate): TListResult => {
	try {
		const list = await AsyncStorage.getItem('list');

		if (list) {
			const currentList = parse<TTranslateStorage>(list);
			const lastCard = currentList.data[currentList.data.length - 1];
			const { id, ...equalLastCard } = lastCard;
			const { id: cardId, ...equalCard } = card;
			const isLastEqual = deepEqual(equalLastCard, equalCard);

			if (!isLastEqual) {
				const jsonValue: TTranslateStorage = {
					data: [...currentList.data, card],
				};

				await AsyncStorage.setItem('list', stringify(jsonValue));

				return {
					type: SERVICE_RESULT_TYPE.SUCCESS,
					data: jsonValue.data,
				}
			}
		} else {
			const jsonValue: TTranslateStorage = {
				data: [card]
			};

			await AsyncStorage.setItem('list', stringify(jsonValue));

			return {
				type: SERVICE_RESULT_TYPE.SUCCESS,
				data: jsonValue.data,
			}
		}

		return {
			type: SERVICE_RESULT_TYPE.SUCCESS,
			data: [],
		}
	} catch (e: unknown) {
		console.log('==========>e', e);

		return {
			type: SERVICE_RESULT_TYPE.FAILURE,
			data: 'error',
		}
	}
};

export const getSpecialList = async (): TListResult => {
	try {
		const list = await AsyncStorage.getItem('list');

		if (list) {
			const currentList = parse<TTranslateStorage>(list);
			const specialList = currentList.data.filter((list) => list.type === 'special');

			return {
				type: SERVICE_RESULT_TYPE.SUCCESS,
				data: specialList,
			}
		}

		return {
			type: SERVICE_RESULT_TYPE.SUCCESS,
			data: [],
		}
	} catch (e: unknown) {
		console.log('==========>e', e);

		return {
			type: SERVICE_RESULT_TYPE.FAILURE,
			data: 'error',
		}
	}
};

export const addSpecialCard = async (id: number, type: 'special' | 'all'): TListResult => {
	try {
		const list = await AsyncStorage.getItem('list');

		if (list) {
			const currentList = parse<TTranslateStorage>(list);

			const specialCards = currentList.data.map((card) => {
				const translate: ITranslate = {
					...card,
					type: card.id === id ? 'special' : card.type,
				};

				return translate;
			});

			const jsonValue: TTranslateStorage = {
				data: specialCards,
			};

			await AsyncStorage.setItem('list', stringify(jsonValue));

			return {
				type: SERVICE_RESULT_TYPE.SUCCESS,
				data: type === 'all' ? specialCards : specialCards.filter((card) => card.type === 'special'),
			};
		}

		return {
			type: SERVICE_RESULT_TYPE.SUCCESS,
			data: [],
		};
	} catch (e: unknown) {
		console.log('==========>e', e);

		return {
			type: SERVICE_RESULT_TYPE.FAILURE,
			data: 'error',
		};
	}
};

export const removeSpecialCard = async (id: number, type: 'special' | 'all'): TListResult => {
	try {
		const list = await AsyncStorage.getItem('list');

		if (list) {
			const currentList = parse<TTranslateStorage>(list);

			const regularCards = currentList.data.map((card) => {
				const translate: ITranslate = {
					...card,
					type: card.id === id ? 'regular' : card.type,
				};

				return translate;
			});

			const jsonValue: TTranslateStorage = {
				data: regularCards,
			};

			await AsyncStorage.setItem('list', stringify(jsonValue));

			return {
				type: SERVICE_RESULT_TYPE.SUCCESS,
				data: type === 'all' ? regularCards : regularCards.filter((card) => card.type === 'special'),
			};
		}

		return {
			type: SERVICE_RESULT_TYPE.SUCCESS,
			data: [],
		};

	} catch (e: unknown) {
		console.log('==========>e', e);

		return {
			type: SERVICE_RESULT_TYPE.FAILURE,
			data: 'error',
		};
	}
};
