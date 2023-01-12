import { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

interface INotification {
	visible: boolean;
	toggleVisible: (value: boolean) => void;
}

const Notification: FC<INotification> = ({ visible, toggleVisible }) => {
	const onDismissSnackBar = () => toggleVisible(false);

	return (
		<SafeAreaProvider>
			<View style={styles.container}>
				<Snackbar
					visible={visible}
					onDismiss={onDismissSnackBar}
					action={{
						label: 'Закрыть',
						onPress: () => {
							// Do something
						},
					}}>
					Перевод скопирован !
				</Snackbar>
			</View>
		</SafeAreaProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
	},
});

export default Notification;
