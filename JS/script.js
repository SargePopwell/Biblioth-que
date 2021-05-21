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

var conteneur = document.getElementById("liste")

var lenLivres = livres.length;

console.log(livres);



function mkHtml(liste) {
    var htmlString = "";
    for(var livre of liste) {
        htmlString += "<ul class=\"liste\">";
        htmlString += "<li class=\"livre\">\"" + livre.titre + "\", par \"" + livre.auteur + "\".</li>";
        htmlString += "</ul>";
        
    }
    return htmlString;
}

conteneur.innerHTML = mkHtml(livres);

var formulaire = document.getElementById("formulaire");
formulaire.addEventListener("submit", (e) => {
    e.preventDefault();

    var titre = document.getElementById("titre").value;
    var auteur = document.getElementById("auteur").value;
    console.log(titre);

    var livreX = {
        reference: "",
        titre: "",
        auteur: ""
    }

    livreX.reference = lenLivres + 1;
    livreX.titre = titre;
    livreX.auteur = auteur;

    livres.push(livreX);
    
    conteneur.innerHTML = mkHtml(livres);
});
