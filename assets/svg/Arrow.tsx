import * as React from 'react';
import { SvgUri } from 'react-native-svg';

const Arrow = (props: any) => (
	<SvgUri
		width={60}
		height={60}
		uri="https://api.iconify.design/mdi:arrow-right-circle.svg"
		{...props}
	/>
);
export default Arrow;
