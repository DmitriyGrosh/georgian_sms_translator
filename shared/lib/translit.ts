import { getTextWithRestoredWords, replaceWordsToTemplates } from './replacement';
import { excludeUrlRegex, excludeWordsRegex } from './regexps';
import { IReplacementsMap } from '../types';

export function translitEngine(table: IReplacementsMap) {
	let keys: string[] | undefined = undefined;
	let specialCases = '';
	let singleLetter = '';
	let searchPattern: RegExp;
	let lookupTable: (input: any) => any;
	let i = 0;

	// If no transliteration table is given, return a function that will
	// return the input.
	if (!table) {
		return function (subject: any) {
			return subject;
		};
	}

	// Function used by the resulting replace function
	lookupTable = function (input: any) {
		return input in table ? table[input] : input;
	};


	// Fetch and sort the keys in the transliteration table object, to
	// ensure the longest keys in the table is first in the array. Then
	// it will find the position of the first one-letter index and split
	// the keys into single letter indexes and longer 'specialCases.'
	keys = Object.keys(table).sort(function (a,b) {
		return b.length - a.length;
	});

	for (; keys[i]; i += 1) {
		if (keys[i].length === 1) {
			break; // first one-letter index has been found, break out
		}
	}

	specialCases = keys.slice(0,i).join('|');
	singleLetter = keys.slice(i).join('');
	keys = undefined; // reset keys


	// Compile a regular expression using the keys found in the given
	// transliteration object.
	//
	// specialCases are joined together with a pipe; `|`
	// singleLetters joined together and wrapped in square brackets so
	// that the resulting regular expressing have the following format:
	//
	//     /aa|bb|cc|[abc]/g
	//
	// This should create a working regular expression that will look
	// for every key in the transliteration table.
	searchPattern = new RegExp([
		specialCases,
		singleLetter ? '[' + singleLetter + ']' : ''
	].join(singleLetter && specialCases ? '|' : ''), 'g');

	return function (subject: string | number) {
		// input sanity check, we expect a string
		if (typeof subject !== 'string') {
			// Try to run toString, if it exist
			if (subject && typeof subject.toString === 'function') {
				subject = subject.toString();
			}
			// Return an empty string on empty and falsy input values
			else {
				return '';
			}
		}

		const replacementsMap = {};
		subject = replaceWordsToTemplates(subject, excludeUrlRegex, replacementsMap);
		subject = replaceWordsToTemplates(subject, excludeWordsRegex, replacementsMap);

		// Replace letters in the input using the lookup table and the compiled search pattern.
		let reTransliteratedText = subject.replace(searchPattern, lookupTable);

		return getTextWithRestoredWords(reTransliteratedText, replacementsMap);
	};
}
