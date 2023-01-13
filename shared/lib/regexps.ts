const wordsExcludedFromRetrans  = [
	'JYSK', 'Magti', 'MyMagti', 'Magticom', 'MyBeeline', 'Beeline', 'YouTube',
	'ENERGY', 'ENERGYS', 'Toyota', 'Odyssey', 'Aspria', 'sms', 'off', 'SMSOFF', 'NOSMS',
	'text', 'City', 'new', 'YORKER', 'Credo', 'VTB', 'TBC', 'Bank', 'Mastercard',
	'pcr', 'covid', 'facebook', 'Carrefour', 'Waikiki', 'web', 'info', 'email', '#OFF'
];

const regexMetachars = /[(){[*+?.\\^$|]/g;

export const getSpecialWords = (): string[] => {
	let result = [...wordsExcludedFromRetrans];

	wordsExcludedFromRetrans.forEach((el, index) => {
		result[index] = wordsExcludedFromRetrans[index].replace(regexMetachars, "\\$&")
	});

	return result;
}

export const excludeUrlRegex =/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
export const excludeWordsRegex = new RegExp("\\b(?:" + getSpecialWords().join("|") + ")\\b", "gi");
