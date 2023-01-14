import { useContext, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

import { RouterContext } from '../../shared/context';
import { ITranslate, SERVICE_RESULT_TYPE } from '../../shared/types';
import { getSpecialList } from '../../storage/list';

import CardTranslate from '../../components/cardTranslate';

import { favoriteStyle } from './Favorite.style';

export default function Favorite() {
	const [cards, setCards] = useState<ITranslate[]>([]);
	const { changePage } = useContext(RouterContext);

	useEffect(() => {
		const initData = async () => {
			const { data, type } = await getSpecialList();

			if (type === SERVICE_RESULT_TYPE.SUCCESS) {
				setCards(data);
			}
		};

		if (changePage === 1) {
			initData();
		}
	}, [changePage]);

	return (
		<ScrollView style={favoriteStyle.container}>
			{cards.reverse().map((card, index) => (
				<CardTranslate
					{...card}
					updateType="special"
					setCards={setCards}
					key={index.toString(36)}
				/>
			))}
		</ScrollView>
	);
};
