"use.strict"

var livre1 = {
    reference: "1",
    titre: "L'alchimiste",
    auteur: "Paolo Coelho"
};

var livre2 = {
    reference: "2",
    titre: "L'existentialisme est un humanisme",
    auteur: "Jean-Paul Sartre"
};

var livre3 = {
    reference: "3",
    titre: "Voyage au bout de la nuit",
    auteur: "Louis-Ferdinand Celine"
};

var livres = [livre1, livre2, livre3];
var conteneur = document.getElementById("liste");

console.log(livres);

var htmlString = "";

function mkHtml(liste) {

    for(var livre of liste) {
        htmlString += "<ul class=\"liste\">";
        htmlString += "<li class=\"livre\">\"" + livre.titre + "\", par \"" + livre.auteur + "\".</li>";
        htmlString += "</ul>";
    }
}
mkHtml(livres);
conteneur.innerHTML = htmlString;