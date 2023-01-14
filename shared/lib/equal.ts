interface IEqual {
	[key: string]: any;
}

export const deepEqual = (firstValue: IEqual, secondValue: IEqual): boolean => {
	let isEqual = true;

	if (typeof firstValue === typeof secondValue) {
		const keys = Object.keys(firstValue);

		keys.forEach((key) => {
			if (firstValue[key] !== secondValue[key]) {
				isEqual = false;
			}
		});
	} else {
		isEqual = false;
	}

	return isEqual
};
