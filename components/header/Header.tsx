import { FC } from 'react';
import { Image, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

import { ILanguage } from '../../shared/types';

import Georgia from '../../assets/svg/Georgia';
import Russia from '../../assets/svg/Russia';
import England from '../../assets/svg/England';

import { headerStyles } from './Header.style';

interface IHeader {
	country: string;
	handleSelect: (item: ILanguage) => void;
}

const Header: FC<IHeader> = ({ country, handleSelect }) => {
	const languages: ILanguage[] = [
		{ label: 'Английский', value: 'eng' },
		{ label: 'Русский', value: 'rus' },
		{ label: 'Грузинский', value: 'geo' },
	];

	return (
		<View style={headerStyles.languageContainer}>
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
					onChangeSearchInputText={(test) => {}}
					buttonTextAfterSelection={(selectedItem) => selectedItem.label}
					rowTextForSelection={(item) => item.label}
					buttonTextStyle={headerStyles.buttonText}
					buttonStyle={headerStyles.button}
					rowTextStyle={headerStyles.rowText}
					onSelect={handleSelect}
				/>
			</View>
		</View>
	);
};

export default Header;
