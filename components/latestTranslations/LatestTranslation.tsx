import { ScrollView } from 'react-native';

import CardTranslate from '../cardTranslate';

import { latestTranslationStyle } from './LatestTranslation.style';

const LatestTranslation = () => {
	const cards = [
		{
			title: 'akjshdjkhasjkdhh kskfs hk ahfas hfkhfsakhsakfg khskjakjasf f fkjha fskjhkafs k',
			content: 'akjshdjkhasjkdhh kskfs hk ahfas hfkhfsakhsakfg khskjakjasf f fkjha fskjhkafs k'
		},
		{
			title: 'akjshdjkhasjkdhh kskfs hk ahfas hfkhfsakhsakfg khskjakjasf f fkjha fskjhkafs k',
			content: 'akjshdjkhasjkdhh kskfs hk ahfas hfkhfsakhsakfg khskjakjasf f fkjha fskjhkafs k'
		},
		{
			title: 'akjshdjkhasjkdhh kskfs hk ahfas hfkhfsakhsakfg khskjakjasf f fkjha fskjhkafs k',
			content: 'akjshdjkhasjkdhh kskfs hk ahfas hfkhfsakhsakfg khskjakjasf f fkjha fskjhkafs k'
		},
		{
			title: 'akjshdjkhasjkdhh kskfs hk ahfas hfkhfsakhsakfg khskjakjasf f fkjha fskjhkafs k',
			content: 'akjshdjkhasjkdhh kskfs hk ahfas hfkhfsakhsakfg khskjakjasf f fkjha fskjhkafs k'
		},
		{
			title: 'akjshdjkhasjkdhh kskfs hk ahfas hfkhfsakhsakfg khskjakjasf f fkjha fskjhkafs k',
			content: 'akjshdjkhasjkdhh kskfs hk ahfas hfkhfsakhsakfg khskjakjasf f fkjha fskjhkafs k'
		},
		{
			title: 'akjshdjkhasjkdhh kskfs hk ahfas hfkhfsakhsakfg khskjakjasf f fkjha fskjhkafs k',
			content: 'akjshdjkhasjkdhh kskfs hk ahfas hfkhfsakhsakfg khskjakjasf f fkjha fskjhkafs k'
		},
		{
			title: 'akjshdjkhasjkdhh kskfs hk ahfas hfkhfsakhsakfg khskjakjasf f fkjha fskjhkafs k',
			content: 'akjshdjkhasjkdhh kskfs hk ahfas hfkhfsakhsakfg khskjakjasf f fkjha fskjhkafs k akjshdjkhasjkdhh kskfs hk ahfas hfkhfsakhsakfg khskjakjasf f fkjha fskjhkafs k akjshdjkhasjkdhh kskfs hk ahfas hfkhfsakhsakfg khskjakjasf f fkjha fskjhkafs k akjshdjkhasjkdhh kskfs hk ahfas hfkhfsakhsakfg khskjakjasf f fkjha fskjhkafs k akjshdjkhasjkdhh kskfs hk ahfas hfkhfsakhsakfg khskjakjasf f fkjha fskjhkafs k'
		},
	];

	return (
		<ScrollView style={latestTranslationStyle.container}>
			{cards.map(({ title, content }, index) => (
				<CardTranslate title={title} content={content} key={index.toString(36)} />
			))}
		</ScrollView>
	);
};

export default LatestTranslation;
