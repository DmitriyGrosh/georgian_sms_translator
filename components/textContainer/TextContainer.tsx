import { FC, useEffect } from 'react';
import {
	View,
	TouchableOpacity,
	Clipboard,
	Keyboard,
	ScrollView,
} from 'react-native';
import { Text } from 'react-native-paper';

import { addCard } from '../../storage/list';

import { textContainerStyle } from './TextContainer.style';
import { ITranslate } from '../../shared/types';

interface ITextContainer {
	translationResult: string;
	toggleVisible: (value: boolean) => void;
	country: string;
	translit: string;
	georgianText: string;
}

const TextContainer: FC<ITextContainer> = ({ translationResult, toggleVisible, translit, country, georgianText }) => {
	const copyToClipboard = async () => {
		if (translationResult) {
			Clipboard.setString(translationResult);

			const card: ITranslate = {
				translit,
				country,
				georgianText,
				translationResult,
				id: Date.now(),
				type: 'regular',
			};

			await addCard(card);
			toggleVisible(true);
		}
	};

	useEffect(() => {
		const keyboardDidHideListener = Keyboard.addListener(
			'keyboardDidHide',
			async () => {
				const card: ITranslate = {
					translit,
					country,
					georgianText,
					translationResult,
					id: Date.now(),
					type: 'regular',
				};

				if (translationResult !== 'error') {
					await addCard(card);
				}
			}
		);

		return () => {
			keyboardDidHideListener.remove();
		};
	}, [translationResult, translit, country]);

	return (
		<View style={textContainerStyle.container}>
			<ScrollView>
				<TouchableOpacity onPress={() => copyToClipboard()}>
					<View style={textContainerStyle.textContainer}>
						<View style={textContainerStyle.text}>
							<Text>{translationResult}</Text>
						</View>
					</View>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

export default TextContainer;
