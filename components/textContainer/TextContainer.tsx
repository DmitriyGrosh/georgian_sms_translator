import { FC, useEffect } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Clipboard,
	Keyboard,
	ScrollView,
} from 'react-native';

import { addCard } from '../../storage/list';

import { textContainerStyle } from './TextContainer.style';

interface ITextContainer {
	translate: string;
	toggleVisible: (value: boolean) => void;
	country: string;
	translit: string;
}

const TextContainer: FC<ITextContainer> = ({ translate, toggleVisible, translit, country }) => {
	const copyToClipboard = () => {
		if (translate) {
			Clipboard.setString(translate);
			toggleVisible(true);
		}
	};

	useEffect(() => {
		const keyboardDidHideListener = Keyboard.addListener(
			'keyboardDidHide',
			async () => {
				await addCard({ translit, country, translationResult: translate, type: 'regular' })
			}
		);

		return () => {
			keyboardDidHideListener.remove();
		};
	}, [translate, translit, country]);

	return (
		<View style={textContainerStyle.container}>
			<ScrollView>
				<TouchableOpacity onPress={() => copyToClipboard()}>
					<View style={textContainerStyle.textContainer}>
						<View style={textContainerStyle.text}>
							<Text>{translate}</Text>
						</View>
					</View>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

export default TextContainer;
