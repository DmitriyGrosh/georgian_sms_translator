import {
	Dispatch,
	FC,
	SetStateAction,
	useState,
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

	const handleChangeData = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
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
		}
	};

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
