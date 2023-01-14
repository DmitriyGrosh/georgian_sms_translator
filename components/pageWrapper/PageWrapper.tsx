import {
	FC,
	PropsWithChildren,
	useCallback,
	useState,
} from 'react';
import {
	RefreshControl,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	View,
} from 'react-native';

import DismissKeyboard from '../../widgets/dismissKeyboard';

const PageWrapper: FC<PropsWithChildren> = ({ children }) => {
	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = useCallback(() => {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false);
		}, 2000);
	}, []);

	return (
		<SafeAreaView>
			<DismissKeyboard>
				<ScrollView
					contentContainerStyle={styles.scroll}
					refreshControl={
						<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
					}>
					<View style={styles.container}>
						{children}
					</View>
				</ScrollView>
			</DismissKeyboard>
		</SafeAreaView>
	);
}

export default PageWrapper;

const styles = StyleSheet.create({
	container: {
		paddingLeft: 10,
		paddingRight: 10
	},
	scroll: {
		width: '100%',
		height: '100%'
	}
});
