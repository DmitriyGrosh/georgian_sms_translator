import { StyleSheet } from 'react-native';

export const textContainerStyle = StyleSheet.create({
	container: {
		flex: 5,
		marginTop: 20,
		borderWidth: 1,
		borderColor: 'gray',
		borderRadius: 10,
	},
	textContainer: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
	},
	text: {
		flex: 1,
		padding: 10,
	},
	image: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		height: '100%',
	}
});
