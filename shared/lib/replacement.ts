import { IReplacementsMap } from '../types';

function getReplacement(integer: number): string {
	return '{' + integer.toString() + '}';
}

function replaceAndGetResult(text: string, words: string[], map: IReplacementsMap): string {
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

export function getTextWithRestoredWords(text: string, replacementsMap: IReplacementsMap): string {
	for (const [template, word] of Object.entries(replacementsMap))
		text = text.replace(template, word);

	return text;
}

export function replaceWordsToTemplates(text: string, regexPattern: RegExp, replacementsMap: IReplacementsMap): string {
	const matchedWords = text.match(regexPattern);
	if (matchedWords === null)
		return text;

	return replaceAndGetResult(text, matchedWords, replacementsMap);
}
