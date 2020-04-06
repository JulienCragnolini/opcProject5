/* class pour la construction de phrase */

class Sentence {
	constructor(adverbs, subjects, verbs, complements, authors) {
		this.adverbs = adverbs;
		this.subjects = subjects;
		this.verbs = verbs;
		this.complements = complements;
		this.authors = authors;
	}

	getRandomWord(citations) { /* floor arrondit, random fait l'aléatoire de longueur d'un tableau */ 
		return citations[Math.floor(Math.random() * citations.length)];
	}

	buildSentence() {
		return this.getRandomWord(this.adverbs) + " " + this.getRandomWord(this.subjects) + " " + this.getRandomWord(this.verbs) + " " + this.getRandomWord(this.complements) + " " + this.getRandomWord(this.authors);
	}
}