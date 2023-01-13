import { FC, useState } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Card } from 'react-native-paper';

import FullStar from '../../assets/svg/FullStart';
import EmptyStar from '../../assets/svg/EmptyStart';

import { cardTranslateStyle } from './CardTranslate.style';

interface ICardTranslate {
	title: string;
	content: string;
}

const CardTranslate: FC<ICardTranslate> = ({ title, content }) => {
	const [isActiveStart, setIsActiveStart] = useState<boolean>(false);
	const handleAddToSpecial = () => {
		setIsActiveStart((prev) => !prev);
	};

	return (
		<Card style={cardTranslateStyle.card}>
			<Card.Title title={title} />
			<Card.Content style={cardTranslateStyle.cardContent}>
				<View style={cardTranslateStyle.textCard}>
					<Text>{content}</Text>
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
