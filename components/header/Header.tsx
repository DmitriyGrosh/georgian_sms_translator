import { FC } from 'react';
import { Image, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

import { ILanguage } from '../../shared/types';
import { useAppTheme } from '../../shared/lib/theme';

import Georgia from '../../assets/svg/Georgia';
import Russia from '../../assets/svg/Russia';
import England from '../../assets/svg/England';

import { headerStyles } from './Header.style';

interface IHeader {
	country: string;
	handleSelect: (item: ILanguage) => void;
}

const Header: FC<IHeader> = ({ country, handleSelect }) => {
	const theme = useAppTheme();

	const languages: ILanguage[] = [
		{ label: 'Грузинский', value: 'geo' },
		{ label: 'Русский', value: 'rus' },
		{ label: 'Английский', value: 'eng' },
	];

	return (
		<View style={{
			...headerStyles.languageContainer,
			backgroundColor: theme.colors.primary
		}}>
			<View style={headerStyles.languageContainerView}>
				{country === 'geo' && <Georgia />}
				{country === 'rus' && <Russia />}
				{country === 'eng' && <England />}
			</View>
			<View style={headerStyles.languageContainerView}>
				<Image style={headerStyles.image} source={require('../../assets/exchange.png')} />
			</View>
			<View style={headerStyles.languageContainerView}>
				<SelectDropdown
					data={languages}
					defaultButtonText='Грузинский'
					onChangeSearchInputText={() => {}}
					buttonTextAfterSelection={(selectedItem) => selectedItem.label}
					rowTextForSelection={(item) => item.label}
					buttonTextStyle={{
						...headerStyles.buttonText,
						color: theme.colors.primary
					}}
					buttonStyle={{
						...headerStyles.button,
						backgroundColor: theme.colors.secondaryContainer
					}}
					rowTextStyle={{
						...headerStyles.rowText,
						color: theme.colors.primary
					}}
					rowStyle={{ backgroundColor: theme.colors.secondaryContainer }}
					onSelect={handleSelect}
				/>
			</View>
		</View>
	);
};

export default Header;
