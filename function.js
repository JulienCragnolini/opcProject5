/* INTRODUCTION */

$(function() {
	let welcomeSection = $('.welcome-section'),
	enterButton = welcomeSection.find('.enter-button');

	setTimeout(function() {
	   	welcomeSection.removeClass('content-hidden');
	},800);
	   			
	enterButton.on('click', function(e) {
	   	e.preventDefault();
	   	welcomeSection.addClass('content-hidden').fadeOut();
	});
});

/* CRÉATION DE PHRASE */

const doSentence = () => {
	
	let themeCit = document.getElementById("themeCitation").value; /* récupère la valeur */
  	let nbr = document.getElementById("nbrCitation").value; /* récupère la valeur */
  	
	if (themeCit == 1) { /* if permettant de savoir quel thème de citation il s'agit */
	  	$('.citation').html(''); /* retire les anciennes citations pour avoir d'accumalation */
	  	for (let i = 0; i < nbr; i++) { /* boucle for générer le nombre de ciation demandé */
	  		$('.citation')[0].innerHTML+=sentencePres.buildSentence()+'<br><br>'; /* utilise instance et fonction cité pour la création de phrase et l'insérer à l'endroit pointé */
	  	}
	  	return true; /* passe à l'étape suivante si c'est égal à false */
	}
	$('.citation').html(''); /* retire les anciennes citations pour avoir d'accumalation */
	for (let i = 0; i < nbr; i++) { /* boucle for générer le nombre de ciation demandé */
	  	$('.citation')[0].innerHTML+=sentencePhilo.buildSentence()+'<br><br>'; /* utilise instance et fonction cité pour la création de phrase et l'insérer à l'endroit pointé */
	}
}

/* PARTAGER SUR TWITTER */

const twitter = () => {
	$('#btnTwitter').click(function(){
			window.open('https://twitter.com/intent/tweet?text=' + sentencePres.buildSentence());
		});
}

/* RECOMMENCER */

const reloadPage = () => {
	location.reload(); /* recharge la page */
}

/* INSTANCE DE CLASSE */

let sentencePres = new Sentence(presTab.adverbs, presTab.subjects, presTab.verbs, presTab.complements, presTab.authors);
let sentencePhilo = new Sentence(philoTab.adverbs, philoTab.subjects, philoTab.verbs, philoTab.complements, philoTab.authors);
