import { useContext } from 'react';
import { View } from 'react-native';
import { Switch, Text } from 'react-native-paper';

import { ThemeContext } from '../../shared/context';

import { settingsStyle } from './Settings.style';

export default function Settings() {
	// const [isSwitchOn, setIsSwitchOn] = useState<boolean>(true);
	const { isDark, toggleTheme } = useContext(ThemeContext);

	const onToggleSwitch = () => {
		toggleTheme(!isDark);
		// setIsSwitchOn((prev) => !prev);
	}

	return (
		<View style={settingsStyle.container}>
			<View style={settingsStyle.themeContext}>
				<Text style={settingsStyle.themeText}>Тема</Text>
				<Switch value={isDark} onValueChange={onToggleSwitch} />
			</View>
		</View>
	);
}
