import * as React from 'react';
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
	AppState,
	Clipboard
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
	translit: string;
	country: string;
}

const Textarea: FC<ITextarea> = ({ setTranslateText, translit, setTranslateResult, setGeorgianText, country }) => {
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
				const response = await fetch('https://groshidze.tech/api/v1/translate', {
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
			if (translit) {
				const convertTranslit = translitEngine(transliterationMixed)(translit);

				await updateLanguage(convertTranslit);
			}
		}

		initData();
	}, [country]);

	useEffect(() => {
		const initData = async () => {
			const data = await Clipboard.getString();

			if (data && data !== translit) {
				const convertTranslit = translitEngine(transliterationMixed)(data);

				setTranslateText(data);
				setIsAnyText(true);
				await updateLanguage(convertTranslit);
			}
		}

		AppState.addEventListener('change', (state) => {
			if (state === 'active') {
				initData();
			}
		})

		initData();
	}, [])

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
				value={translit}
			/>
		</View>
	);
};

export default Textarea;
