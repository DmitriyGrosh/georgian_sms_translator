import { FC, useEffect, useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Clipboard,
	Keyboard,
	TouchableWithoutFeedback,
	ScrollView,
} from 'react-native';

import { textContainerStyle } from './TextContainer.style';
import Arrow from '../../assets/svg/Arrow';

interface ITextContainer {
	translate: string;
	toggleVisible: (value: boolean) => void;
}

const TextContainer: FC<ITextContainer> = ({ translate, toggleVisible }) => {
	const [visible, setVisible] = useState<boolean>(false);
	const copyToClipboard = () => {
		if (translate) {
			Clipboard.setString(translate);
			toggleVisible(true);
		}
	};

	const dismiss = () => {
		Keyboard.dismiss();
	};

	useEffect(() => {
		const keyboardDidShowListener = Keyboard.addListener(
			'keyboardDidShow',
			() => {
				setVisible(false);
			}
		);
		const keyboardDidHideListener = Keyboard.addListener(
			'keyboardDidHide',
			() => {
				setVisible(true);
			}
		);

		return () => {
			keyboardDidHideListener.remove();
			keyboardDidShowListener.remove();
		};
	}, []);

	return (
		<View style={textContainerStyle.container}>
			<ScrollView>
				<TouchableOpacity onPress={() => copyToClipboard()}>
					<View style={textContainerStyle.textContainer}>
						<View style={textContainerStyle.text}>
							<Text>{translate}</Text>
						</View>
						<View style={textContainerStyle.image}>
							{(!!translate && !visible) && (
								<TouchableWithoutFeedback onPress={dismiss}>
									<Arrow />
								</TouchableWithoutFeedback>
							)}
						</View>
					</View>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

export default TextContainer;
