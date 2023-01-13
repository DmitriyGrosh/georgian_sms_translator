import * as React from 'react';
import { SvgUri } from 'react-native-svg';

const FullStar = (props: any) => (
	<SvgUri
		width={25}
		height={25}
		uri="https://api.iconify.design/ic:baseline-star.svg?color=gold"
		{...props}
	/>
);
export default FullStar;
