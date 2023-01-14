import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-paper';

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
			content: 'akjshdjkhasjkdhh kskfs hk ahfas hfkhfsakhsakfg khskjakjasf f fkjha fskjhkafs k'
		},
	];

	return (
		<ScrollView style={latestTranslationStyle.container}>
			{cards.map(({ title, content }, index) => (
				<Card style={latestTranslationStyle.card} key={index.toString(36)}>
					<Card.Title title={title} />
					<Card.Content>
						<Text>{content}</Text>
					</Card.Content>
				</Card>
			))}
		</ScrollView>
	);
};

export default LatestTranslation;
