import { FC, useState } from 'react';
import { BottomNavigation } from 'react-native-paper';

import Translator from '../components/translator';
import PageWrapper from '../components/pageWrapper';
import {StyleSheet} from "react-native";

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
			focusedIcon: 'heart',
			unfocusedIcon: 'heart-outline',
		},
		{
			key: 'list',
			title: 'Список',
			focusedIcon: 'bell',
			unfocusedIcon: 'bell-outline',
		},
	]);

	const renderScene = BottomNavigation.SceneMap({
		translator: TranslatorRoute,
		list: TranslatorRoute
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
