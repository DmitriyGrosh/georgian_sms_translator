import {
	useState,
	useEffect,
	FC,
	Dispatch,
	SetStateAction,
} from 'react';
import { SegmentedButtons } from 'react-native-paper';
import { translitEngine } from '../../shared/lib/translit';
import {
	transliterationCC,
	transliterationNational,
	transliterationUnofficial,
	transliterationMixed,
} from '../../shared/lib/words';

import { buttonGroupStyle } from './ButtonGroup.style';

interface IButtonGroup {
	setTranslateResult: Dispatch<SetStateAction<string>>;
	text: string;
}

const ButtonGroup: FC<IButtonGroup> = ({ setTranslateResult, text }) => {
	const [typeOfTranslate, setTypeOfTranslate] = useState<string>('mixed');

	const buttons = [
		{
			value: 'mixed',
			label: 'Mixed',
		},
		{
			value: 'cc',
			label: 'Translit'
		},
		{
			value: 'unofficial',
			label: 'Unofficial'
		},
		{
			value: 'national',
			label: 'National',
		},
	];

	useEffect(() => {
		if (typeOfTranslate === 'national') {
			const result = translitEngine(transliterationNational)(text);

			setTranslateResult(result);
		} else if (typeOfTranslate === 'unofficial') {
			const result = translitEngine(transliterationUnofficial)(text);

			setTranslateResult(result);
		} else if (typeOfTranslate === 'cc') {
			const result = translitEngine(transliterationCC)(text);

			setTranslateResult(result);
		} else {
			const result = translitEngine(transliterationMixed)(text);

			setTranslateResult(result);
		}
	}, [typeOfTranslate]);

	return (
		<SegmentedButtons
			value={typeOfTranslate}
			onValueChange={setTypeOfTranslate}
			buttons={buttons}
			density="small"
			style={buttonGroupStyle.button}
		/>
	);
};

export default ButtonGroup;
