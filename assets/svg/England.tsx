import * as React from 'react';
import { SvgUri } from 'react-native-svg';

const England = (props: any) => (
	<SvgUri
		width={50}
		height={50}
		uri="https://api.iconify.design/circle-flags:gb.svg"
		{...props}
	/>
);
export default England;
