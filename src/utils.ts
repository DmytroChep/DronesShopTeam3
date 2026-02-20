export function getSimilarity(str1: string, str2: string) {
	const s1 = str1.toLowerCase().trim();
	const s2 = str2.toLowerCase().trim();

	if (s1.length < 3 || s2.length < 3) return 0;

	const makeTrigrams = (text: string) => {
		const set = new Set();
		for (let i = 0; i <= text.length - 3; i++) {
			set.add(text.substring(i, i + 3));
		}
		return set;
	};

	const set1 = makeTrigrams(s1);
	const set2 = makeTrigrams(s2);

	let intersection = 0;
	for (const gram of set1) {
		if (set2.has(gram)) {
			intersection++;
		}
	}

	return (2 * intersection) / (set1.size + set2.size);
}
