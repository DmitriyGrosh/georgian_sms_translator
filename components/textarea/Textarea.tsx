import {
	Dispatch,
	FC,
	SetStateAction,
	useState,
	useEffect,
} from 'react';
import {
	TextInputChangeEventData,
	TouchableWithoutFeedback,
	NativeSyntheticEvent,
	TextInput,
	View,
} from 'react-native';

import { translitEngine } from '../../shared/lib/translit';
import { transliterationMixed } from '../../shared/lib/words';

import { textareaStyles } from './Textarea.style';

import Close from '../../assets/svg/Close';

interface ITextarea {
	setTranslateText: Dispatch<SetStateAction<string>>;
	setTranslateResult: Dispatch<SetStateAction<string>>;
	setGeorgianText: Dispatch<SetStateAction<string>>;
	translateText: string;
	country: string;
}

const Textarea: FC<ITextarea> = ({ setTranslateText, translateText, setTranslateResult, setGeorgianText, country }) => {
	const [isAnyText, setIsAnyText] = useState<boolean>(false);

	const handleClear = () => {
		setTranslateText('');
		setTranslateResult('');
		setIsAnyText(false);
	};

	const handleChangeData = async (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
		const { text } = event.nativeEvent;

		if (text) {
			setIsAnyText(true);
		} else {
			setIsAnyText(false);
		}
		const convertTranslit = translitEngine(transliterationMixed)(text);

		setGeorgianText(convertTranslit);

		if (country === 'geo') {
			setTranslateResult(convertTranslit)
		} else if (country === 'rus' || country === 'eng') {
			const response = await fetch('http://localhost:8000/api/v1/translate', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					text: convertTranslit,
					fromLanguage: "ka",
					toLanguage: country.slice(0, 2),
				}),
			});

			const json = await response.json();
			setTranslateResult(json?.translate || '');
		}
	};

	useEffect(() => {
		const initData = async () => {
			if (translateText) {
				const convertTranslit = translitEngine(transliterationMixed)(translateText);

				setGeorgianText(convertTranslit);

				if (country === 'geo') {
					setTranslateResult(convertTranslit)
				} else if (country === 'rus' || country === 'eng') {
					const response = await fetch('http://localhost:8000/api/v1/translate', {
						method: 'POST',
						headers: {
							Accept: 'application/json',
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							text: convertTranslit,
							fromLanguage: "ka",
							toLanguage: country.slice(0, 2),
						}),
					});

					const json = await response.json();
					setTranslateResult(json?.translate || '');
				}
			}
		}

		initData();
	}, [country]);

	return (
		<View style={textareaStyles.inputContainer}>
			<TouchableWithoutFeedback onPress={handleClear}>
				<View style={isAnyText ? textareaStyles.closeButton : textareaStyles.hideCloseButton}>
					<Close />
				</View>
			</TouchableWithoutFeedback>
			<TextInput
				onChange={handleChangeData}
				onChangeText={setTranslateText}
				multiline
				numberOfLines={10}
				style={textareaStyles.input}
				value={translateText}
			/>
		</View>
	);
};

export default Textarea;
