import { StyleSheet } from 'react-native';

export const settingsStyle = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 10
	},
	themeContext: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	themeText: {
		fontSize: 20
	}
});
