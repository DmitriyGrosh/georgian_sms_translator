import * as React from 'react';
import { SvgUri } from 'react-native-svg';

const Close = (props: any) => (
	<SvgUri
		width={25}
		height={25}
		uri="https://api.iconify.design/material-symbols:close-rounded.svg"
		{...props}
	/>
);
export default Close;
