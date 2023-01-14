interface IEqual {
	[key: string]: any;
}

export const deepEqual = (firstValue: IEqual, secondValue: IEqual): boolean => {
	const keys = Object.keys(firstValue);
	let isEqual = true;

	keys.forEach((key) => {
		if (firstValue[key] !== secondValue[key]) {
			isEqual = false;
		}
	});

	return isEqual
};
