import {
	FC,
	useState,
	useEffect,
	useContext,
} from 'react';
import { ScrollView } from 'react-native';

import { RouterContext } from '../../shared/context';
import { ITranslate, SERVICE_RESULT_TYPE } from '../../shared/types';
import { getAllList } from '../../storage/list';


import CardTranslate from '../cardTranslate';

import { latestTranslationStyle } from './LatestTranslation.style';

const LatestTranslation: FC = () => {
	const [cards, setCards] = useState<ITranslate[]>([]);
	const { changePage } = useContext(RouterContext);

	useEffect(() => {
		const initData = async () => {
			const { data, type } = await getAllList();

			if (type === SERVICE_RESULT_TYPE.SUCCESS) {
				setCards(data);
			}
		};

		if (changePage === 0) {
			initData();
		}
	}, [changePage]);

	return (
		<ScrollView style={latestTranslationStyle.container}>
			{cards.map((card, index) => (
				<CardTranslate
					{...card}
					updateType="all"
					setCards={setCards}
					key={index.toString(36)}
				/>
			))}
		</ScrollView>
	);
};

export default LatestTranslation;
