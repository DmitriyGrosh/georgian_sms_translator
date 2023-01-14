import {
	Dispatch,
	FC,
	SetStateAction,
	useState,
	useEffect,
	useContext,
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
import { theme } from '../../shared/lib/theme';
import { ThemeContext } from '../../shared/context';

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
	const { isDark } = useContext(ThemeContext);

	const handleClear = () => {
		setTranslateText('');
		setTranslateResult('');
		setIsAnyText(false);
	};

	const updateLanguage = async (convertTranslit: string) => {
		setGeorgianText(convertTranslit)

		if (country === 'geo') {
			setTranslateResult(convertTranslit)
		} else if (country === 'rus' || country === 'eng') {
			try {
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
			} catch (e: unknown) {
				setTranslateResult('error');
				console.log('==========>e', e);
			}
		}
	}

	const handleChangeData = async (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
		const { text } = event.nativeEvent;
		const convertTranslit = translitEngine(transliterationMixed)(text || '');

		if (text) {
			setIsAnyText(true);
		} else {
			setIsAnyText(false);
		}

		await updateLanguage(convertTranslit);
	};

	useEffect(() => {
		const initData = async () => {
			if (translateText) {
				const convertTranslit = translitEngine(transliterationMixed)(translateText);

				await updateLanguage(convertTranslit);
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
				style={{
					...textareaStyles.input,
					color: isDark? theme.colors.background : theme.colors.onBackground
			}}
				value={translateText}
			/>
		</View>
	);
};

export default Textarea;
