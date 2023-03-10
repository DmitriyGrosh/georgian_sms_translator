import { StyleSheet } from 'react-native';

export const translatorStyles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
	},
	contentWrapper: {
		flex: 6
	},
	titleContainer: {
		marginTop: 10,
		marginBottom: 10,
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'row'
	},
	title: {
		fontSize: 18,
	},
	descriptionContainer: {
		marginTop: 20,
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'row'
	}
});
