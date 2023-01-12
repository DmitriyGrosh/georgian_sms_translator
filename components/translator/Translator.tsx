import { useState } from 'react';
import { View } from 'react-native';

import Textarea from '../textarea';
import Header from '../header/Header';
import TextContainer from '../textContainer';
import Notification from '../notification';

import { ILanguage } from '../../shared/types';
import { translatorStyles } from './Translator.styles';

export default function Translator() {
	const [country, setCountry] = useState<string>('geo');
	const [translateText, setTranslateText] = useState<string>('');
	const [translateResult, setTranslateResult] = useState<string>('');
	const [visible, setVisible] = useState<boolean>(false);

	const toggleVisible = (value: boolean) => {
		setVisible(value)
	};

	const handleSelect = (item: ILanguage) => {
		setCountry(item.value);
	};

	return (
		<View style={translatorStyles.container}>
			<Header country={country} handleSelect={handleSelect} />
			<Textarea
				setTranslateResult={setTranslateResult}
				setTranslateText={setTranslateText}
				translateText={translateText}
				country={country}
			/>
			<TextContainer translate={translateResult} toggleVisible={toggleVisible} />
			<Notification visible={visible} toggleVisible={toggleVisible} />
		</View>
	);
}
