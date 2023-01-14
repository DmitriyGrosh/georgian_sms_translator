import { Dispatch, FC, SetStateAction } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Card } from 'react-native-paper';

import { ITranslate, SERVICE_RESULT_TYPE } from '../../shared/types';
import { addSpecialCard, removeSpecialCard } from '../../storage/list';

import FullStar from '../../assets/svg/FullStart';
import EmptyStar from '../../assets/svg/EmptyStart';

import { cardTranslateStyle } from './CardTranslate.style';

interface ICardTranslate extends ITranslate {
	setCards: Dispatch<SetStateAction<ITranslate[]>>;
	updateType: 'all' | 'special';
}

const CardTranslate: FC<ICardTranslate> = ({
		translationResult,
		translit,
		country,
		type,
		georgianText,
		id,
		setCards,
		updateType,
	}) => {
	const handleAddToSpecial = async () => {
		if (type === 'special') {
			const { type: resultType, data } = await removeSpecialCard(id, updateType);

			if (resultType === SERVICE_RESULT_TYPE.SUCCESS) {
				setCards(data);
			}
		}

		if (type === 'regular') {
			const { type: resultType, data } = await addSpecialCard(id, updateType);

			if (resultType === SERVICE_RESULT_TYPE.SUCCESS) {
				setCards(data);
			}
		}
	};

	return (
		<Card style={cardTranslateStyle.card}>
			<Card.Title title={translit} />
			<Card.Content style={cardTranslateStyle.cardContent}>
				<View style={cardTranslateStyle.textCard}>
					<Text>{translationResult}</Text>
				</View>
				<TouchableWithoutFeedback onPress={handleAddToSpecial}>
					<View style={cardTranslateStyle.imageCard}>
						{type === 'special' ? (<FullStar />) : (<EmptyStar />)}
					</View>
				</TouchableWithoutFeedback>
			</Card.Content>
		</Card>
	);
};

export default CardTranslate;
