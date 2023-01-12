import { FC, PropsWithChildren } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

const DismissKeyboard: FC<PropsWithChildren> = ({ children }) => {
	const dismiss = () => {
		Keyboard.dismiss();
	};

	return (
		<TouchableWithoutFeedback onPress={dismiss}>
			{children}
		</TouchableWithoutFeedback>
	)
};

export default DismissKeyboard;
