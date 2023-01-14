import { useEffect, useState } from 'react';
import { View } from 'react-native';

import { ITranslate, SERVICE_RESULT_TYPE } from '../../shared/types';
import { getSpecialList } from '../../storage/list';

import CardTranslate from '../../components/cardTranslate';

import { favoriteStyle } from './Favorite.style';

export default function Favorite() {
	const [cards, setCards] = useState<ITranslate[]>([]);

	useEffect(() => {
		const initData = async () => {
			const { data, type } = await getSpecialList();

			if (type === SERVICE_RESULT_TYPE.SUCCESS) {
				setCards(data);
			}
		};

		initData();
	}, []);

	return (
		<View style={favoriteStyle.container}>
			{cards.map((card, index) => (
				<CardTranslate
					{...card}
					updateType="special"
					setCards={setCards}
					key={index.toString(36)}
				/>
			))}
		</View>
	);
};
