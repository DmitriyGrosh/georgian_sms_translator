import * as React from 'react';
import { SvgUri } from 'react-native-svg';

const GoogleTranslate = (props: any) => (
	<SvgUri
		width={35}
		height={35}
		uri="https://api.iconify.design/mdi:google-translate.svg"
		{...props}
	/>
);
export default GoogleTranslate;
