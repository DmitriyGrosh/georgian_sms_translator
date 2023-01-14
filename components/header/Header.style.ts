import { StyleSheet } from 'react-native';

export const headerStyles = StyleSheet.create({
	languageContainer: {
		width: '100%',
		flex: 1,
		borderRadius: 10,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingLeft: 10,
		paddingRight: 10
	},
	languageContainerView: {
		flex: 1,
		display: "flex",
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		width: 20,
		height: 20
	},
	buttonText: {
		fontSize: 9,
	},
	rowText: {
		fontSize: 10
	},
	button: {
		width: 85,
		borderRadius: 5
	},
});
