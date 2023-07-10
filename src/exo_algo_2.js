"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exo_algo_2 = void 0;
var exo_algo_2 = function () {
    // 1.
    var tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log('voici le 1 tableau : ' + tableau);
    // 2.
    var tableau_boocle = [];
    for (var i = 1; i <= 10; i++) {
        tableau_boocle.push(i);
    }
    console.log('voici le 2 tableau : ' + tableau_boocle);
    // 3.
    var tableau_array = Array(10).fill(0).map(function (_, index) { return index + 1; });
    console.log('Voici le 3 tableau : ' + tableau_array);
    console.log('La longuer du tableau : ' + tableau.length);
    console.log('Le premier élément du tableau ' + tableau[0]);
    console.log('Le dernier élément du tableau : ' + tableau[9]);
    console.log('Le quatrième élément du tableau : ' + tableau[3]);
    var tableauBis = tableau_array.map(function (index) { return index * 2; });
    console.log('Voici le tableau Bis : ' + tableauBis);
};
exports.exo_algo_2 = exo_algo_2;
