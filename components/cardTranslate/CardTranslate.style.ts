import { StyleSheet } from 'react-native';

export const cardTranslateStyle = StyleSheet.create({
	container: {
		height: '100%',
		marginTop: 30,
		paddingLeft: 5,
		paddingRight: 5,
	},
	card: {
		marginTop: 5,
		marginBottom: 3
	},
	cardContent: {
		display: 'flex',
		flexDirection: 'row'
	},
	textCard: {
		flex: 12,
	},
	imageCard: {
		flex: 1,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
	}
});
