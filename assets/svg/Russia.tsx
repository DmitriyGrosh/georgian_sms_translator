import * as React from 'react';
import { SvgUri } from 'react-native-svg';

const Russia = (props: any) => (
	<SvgUri
		width={50}
		height={50}
		uri="https://api.iconify.design/circle-flags:ru.svg"
		{...props}
	/>
);
export default Russia;
