import * as React from 'react';
import { SvgUri } from 'react-native-svg';

const ShareIcon = (props: any) => (
	<SvgUri
		width={35}
		height={35}
		uri="https://api.iconify.design/ion:share-outline.svg"
		{...props}
	/>
);
export default ShareIcon;
