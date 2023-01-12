import { FC } from 'react';
import { Linking, TouchableWithoutFeedback, View } from 'react-native';

import ShareText from '../shareText';

import YandexTranslate from '../../assets/svg/YandexTranslate';
import GoogleTranslate from '../../assets/svg/GoogleTranslate';

import { redirectStyle } from './Redirect.style';

interface IRedirect {
	text: string;
	from: string;
	to: string;
}

const Redirect: FC<IRedirect> = ({ text, to, from }) => {
	const handleRedirect = (type: string) => {
		if (type === 'google') {
			Linking.openURL(`googletranslate://app?sl=${from}&tl=${to}&text=${text}`);
		} else {
			// https://translate.yandex.ru/?
			Linking.openURL(`yandextranslate://app?source_lang=${from}&target_lang=${to}&text=${text}`);
		}
	};

	return (
		<View style={redirectStyle.group}>
			<TouchableWithoutFeedback onPress={() => handleRedirect('google')}>
				<View>
					<GoogleTranslate />
				</View>
			</TouchableWithoutFeedback>
			<TouchableWithoutFeedback onPress={() => handleRedirect('yandex')}>
				<View style={redirectStyle.button}>
					<YandexTranslate />
				</View>
			</TouchableWithoutFeedback>
			<ShareText text={text} />
		</View>
	);
};

export default Redirect;
