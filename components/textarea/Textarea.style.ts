import { StyleSheet } from 'react-native';

export const textareaStyles = StyleSheet.create({
	inputContainer: {
		width: '100%',
		flex: 3,
		backgroundColor: '#ffffff',
		borderRadius: 10,
		marginTop: 30,
		display: 'flex',
		justifyContent: 'flex-start',
		position: 'relative'
	},
	closeButton: {
		position: 'absolute',
		top: 0,
		right: 0,
		marginRight: 10,
		marginTop: 5,
		zIndex: 10
	},
	hideCloseButton: {
		display: 'none',
	},
	input: {
		borderColor: 'gray',
		borderWidth: 1,
		height: '85%',
		paddingLeft: 10,
		paddingRight: 25,
		paddingTop: 25,
		borderRadius: 10,
	},
});
