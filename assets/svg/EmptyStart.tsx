import * as React from 'react';
import { SvgUri } from 'react-native-svg';

const EmptyStar = (props: any) => (
	<SvgUri
		width={25}
		height={25}
		uri="https://api.iconify.design/ic:baseline-star-border.svg?color=%23888888"
		{...props}
	/>
);
export default EmptyStar;
