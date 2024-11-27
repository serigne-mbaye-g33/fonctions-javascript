// Fonction pour trouver la valeur maximale
function findMax(array) {
    if (array.length === 0) {
        throw new Error("Le tableau est vide.");
    }
    return Math.max(...array);
}

// Fonction pour trouver la valeur minimale
function findMin(array) {
    if (array.length === 0) {
        throw new Error("Le tableau est pas vide.");
    }
    return Math.min(...array);
}

//fonction qui calcule la somme de tous les éléments d'un tableau.
function sommeTableau(tableau) {
    if (!Array.isArray(tableau)) {
        throw new Error("L'entrée doit être un tableau.");
    }
    return tableau.reduce((accumulateur, valeurCourante) => accumulateur + valeurCourante, 0);
}

const tableau = [];
const somme = sommeTableau(tableau);
console.log("La somme des éléments du tableau est :", somme);

// fonction qui filtre les éléments d'un tableau en fonction d'une condition donnée
const videos = [


];
const shortSearch = videos.filter(function(videos){
    return videos.length < 10 ;
})

console.log(shortSearch);