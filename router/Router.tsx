import { FC, useState } from 'react';
import { StyleSheet } from 'react-native';
import { BottomNavigation } from 'react-native-paper';

import PageWrapper from '../components/pageWrapper';
import Translator from '../pages/translator';

const TranslatorRoute: FC = () => (
	<PageWrapper>
		<Translator />
	</PageWrapper>
);

const Router: FC = () => {
	const [index, setIndex] = useState(0);
	const [routes] = useState([
		{
			key: 'translator',
			title: 'Переводчик',
			focusedIcon: 'home',
			unfocusedIcon: 'home-outline',
		},
		{
			key: 'list',
			title: 'Список',
			focusedIcon: 'heart',
			unfocusedIcon: 'heart-outline',
		},
		{
			key: 'settings',
			title: 'Настройки',
			focusedIcon: 'account',
		},
	]);

	const renderScene = BottomNavigation.SceneMap({
		translator: TranslatorRoute,
		list: TranslatorRoute,
		settings: TranslatorRoute
	});

	return (
		<BottomNavigation
			navigationState={{ index, routes }}
			onIndexChange={setIndex}
			renderScene={renderScene}
			barStyle={styles.navigation}
		/>
	);
};

export default Router;

const styles = StyleSheet.create({
	navigation: {
		height: 90
	},
});
