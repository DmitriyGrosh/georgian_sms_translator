import { FC, useState } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Card } from 'react-native-paper';

import { ITranslate } from '../../shared/types';

import FullStar from '../../assets/svg/FullStart';
import EmptyStar from '../../assets/svg/EmptyStart';

import { cardTranslateStyle } from './CardTranslate.style';

interface ICardTranslate extends ITranslate {}

const CardTranslate: FC<ICardTranslate> = ({ translationResult, translit, country, type, georgianText }) => {
	const [isActiveStart, setIsActiveStart] = useState<boolean>(false);

	const handleAddToSpecial = () => {
		setIsActiveStart((prev) => !prev);
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
						{isActiveStart ? (<FullStar />) : (<EmptyStar />)}
					</View>
				</TouchableWithoutFeedback>
			</Card.Content>
		</Card>
	);
};

export default CardTranslate;
