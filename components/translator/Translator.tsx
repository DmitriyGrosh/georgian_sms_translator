import { useState } from 'react';
import { View, Text } from 'react-native';

import Textarea from '../textarea';
import Header from '../header';
import TextContainer from '../textContainer';
import Notification from '../notification';
import ButtonGroup from '../buttonGroup';
import Redirect from '../redirect';
import LatestTranslation from '../latestTranslations';

import { ILanguage } from '../../shared/types';
import { translatorStyles } from './Translator.styles';

export default function Translator() {
	const [country, setCountry] = useState<string>('geo');
	const [translit, setTranslit] = useState<string>('');
	const [translateResult, setTranslateResult] = useState<string>('');
	const [georgianText, setGeorgianText] = useState<string>('');
	const [visible, setVisible] = useState<boolean>(false);

	const toggleVisible = (value: boolean) => {
		setVisible(value);
	};

	const handleSelect = (item: ILanguage) => {
		setCountry(item.value);
	};

	const toTranslate = () => {
		switch (country) {
			case 'rus':
				return 'ru';
			case  'eng':
				return 'en';
			default:
				return 'ru'
		}
	};

	const to = toTranslate();

	return (
		<View style={translatorStyles.container}>
			<Header country={country} handleSelect={handleSelect} />
			<View style={translatorStyles.titleContainer}>
				<Text style={translatorStyles.title}>SMS сообщение</Text>
			</View>
			<Textarea
				setTranslateResult={setTranslateResult}
				setTranslateText={setTranslit}
				setGeorgianText={setGeorgianText}
				translateText={translit}
				country={country}
			/>
			<View style={translatorStyles.contentWrapper}>
				{!!translateResult ? (
					<>
						{country === 'geo' && (
							<ButtonGroup
								setGeorgianText={setGeorgianText}
								setTranslateResult={setTranslateResult}
								text={translit}
							/>
						)}
						<View style={translatorStyles.descriptionContainer}>
							<Text style={translatorStyles.title}>Нажмите на текст чтобы скопировать</Text>
						</View>
						<TextContainer
							country={country}
							translit={translit}
							translationResult={translateResult}
							toggleVisible={toggleVisible}
							georgianText={georgianText}
						/>
						<Redirect text={georgianText} from="ka" to={to} />
						<Notification visible={visible} toggleVisible={toggleVisible} />
					</>
				) : (
					<LatestTranslation />
				)}
			</View>
		</View>
	);
}
