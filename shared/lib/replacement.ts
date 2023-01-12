function getReplacement(integer: number) {
	return '{' + integer.toString() + '}';
}

function replaceAndGetResult(text: any, words: any, map: any) {
	let i = 0;
	let replacement = getReplacement(i);

	words.forEach((word: any) => {
		while (text.indexOf(replacement) != -1) {
			i++;
			replacement = getReplacement(i);
		}
		text = text.replace(word, replacement); // replace first occurrence
		map[replacement] = word;
	});

	return text;
}

export function getTextWithRestoredWords(text: any, replacementsMap: any) {
	for (const [template, word] of Object.entries(replacementsMap))
		text = text.replace(template, word);

	return text;
}

export function replaceWordsToTemplates(text: any, regexPattern: any, replacementsMap: any) {
	const matchedWords = text.match(regexPattern);
	if (matchedWords === null)
		return text;

	return replaceAndGetResult(text, matchedWords, replacementsMap);
}
