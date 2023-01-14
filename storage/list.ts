import AsyncStorage from '@react-native-async-storage/async-storage';

import { parse, stringify } from '../shared/lib/jsonAPI';
import { IStorage, ITranslate}  from '../shared/types';
import {deepEqual} from "../shared/lib/equal";

export const getAllList = async () => {
	try {
		const data = await AsyncStorage.getItem('list');

		if (data) {
			const list = parse<IStorage<ITranslate[]>>(data);

			return list.data;
		}

		return [];
	} catch (e: unknown) {
		console.log('==========>e', e);
	}
};

export const addCard = async (card: ITranslate) => {
	console.log('==========>card', card);
	try {
		const list = await AsyncStorage.getItem('list');

		if (list) {
			const currentList = parse<IStorage<ITranslate[]>>(list);
			const lastCard = currentList.data[currentList.data.length - 1];
			const isLastEqual = deepEqual(lastCard, card);

			console.log('==========>isLastEqual', isLastEqual);
			console.log('==========>lastCard', lastCard);
			console.log('==========>card', card);
			if (!isLastEqual) {
				const jsonValue: IStorage<ITranslate[]> = {
					data: [...currentList.data, card],
				};

				await AsyncStorage.setItem('list', stringify(jsonValue))
			}
		} else {
			const jsonValue: IStorage<ITranslate[]> = {
				data: [card]
			};

			await AsyncStorage.setItem('list', stringify(jsonValue))
		}
	} catch (e: unknown) {
		console.log('==========>e', e);
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
