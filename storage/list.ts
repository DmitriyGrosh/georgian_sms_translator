import AsyncStorage from '@react-native-async-storage/async-storage';

import {
	IStorage,
	ITranslate,
	SERVICE_RESULT_TYPE,
	ServiceResult,
} from '../shared/types';

import { deepEqual } from '../shared/lib/equal';
import { parse, stringify } from '../shared/lib/jsonAPI';

export const getAllList = async (): Promise<ServiceResult<ITranslate[]>> => {
	try {
		const data = await AsyncStorage.getItem('list');

		if (data) {
			const list = parse<IStorage<ITranslate[]>>(data);

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

export const addCard = async (card: ITranslate): Promise<ServiceResult<ITranslate[]>> => {
	try {
		const list = await AsyncStorage.getItem('list');

		if (list) {
			const currentList = parse<IStorage<ITranslate[]>>(list);
			const lastCard = currentList.data[currentList.data.length - 1];
			const isLastEqual = deepEqual(lastCard, card);

			if (!isLastEqual) {
				const jsonValue: IStorage<ITranslate[]> = {
					data: [...currentList.data, card],
				};

				await AsyncStorage.setItem('list', stringify(jsonValue));

				return {
					type: SERVICE_RESULT_TYPE.SUCCESS,
					data: jsonValue.data,
				}
			}
		} else {
			const jsonValue: IStorage<ITranslate[]> = {
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

export const getSpecialList = async () => {
	try {

	} catch (e: unknown) {
		console.log('==========>e', e);
	}
};

export const addSpecialCard = async () => {
	try {

	} catch (e: unknown) {
		console.log('==========>e', e);
	}
};

export const removeSpecialCard = async () => {
	try {

	} catch (e: unknown) {
		console.log('==========>e', e);
	}
};
