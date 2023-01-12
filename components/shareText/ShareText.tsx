import { FC } from 'react';
import {Button, Share, View, Alert, TouchableWithoutFeedback} from 'react-native';
import ShareIcon from "../../assets/svg/ShareIcon";

interface IShareText {
	text: string;
}

const ShareText: FC<IShareText> = ({ text }) => {
	const onShare = async () => {
		try {
			await Share.share({
				message: text
			});

			// if (result.action === Share.sharedAction) {
			// 	if (result.activityType) {
			// 		// shared with activity type of result.activityType
			// 	} else {
			// 		// shared
			// 	}
			// } else if (result.action === Share.dismissedAction) {
			// 	// dismissed
			// }

		} catch (error: any) {
			Alert.alert(error.message);
		}
	};

	return (
		<TouchableWithoutFeedback onPress={onShare}>
			<ShareIcon />
		</TouchableWithoutFeedback>
	);
};

export default ShareText;
