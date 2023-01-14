import { FC, useState, useEffect } from 'react';
import { ScrollView } from 'react-native';

import { ITranslate, SERVICE_RESULT_TYPE } from '../../shared/types';
import { getAllList } from '../../storage/list';


import CardTranslate from '../cardTranslate';

import { latestTranslationStyle } from './LatestTranslation.style';

const LatestTranslation: FC = () => {
	const [cards, setCards] = useState<ITranslate[]>([]);

	useEffect(() => {
		const initData = async () => {
			const { data, type } = await getAllList();

			if (type === SERVICE_RESULT_TYPE.SUCCESS) {
				setCards(data);
			}
		};

		initData();
	}, []);

	return (
		<ScrollView style={latestTranslationStyle.container}>
			{cards.reverse().map((card, index) => (
				<CardTranslate {...card} key={index.toString(36)} />
			))}
		</ScrollView>
	);
};

export default LatestTranslation;
