export const exo_algo_2 = () =>{

// 1.

let tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('voici le 1 tableau : ' + tableau);
// 2.

let tableau_boocle = [];
for(let i = 1 ; i <= 10 ; i++ ){
    tableau_boocle.push(i);
}
console.log('voici le 2 tableau : ' + tableau_boocle);

// 3.

let tableau_array = Array(10).fill(0).map((_, index) => index + 1);
console.log('Voici le 3 tableau : ' + tableau_array);


console.log('La longuer du tableau : ' + tableau.length);
console.log('Le premier élément du tableau ' + tableau[0]);
console.log('Le dernier élément du tableau : ' + tableau[9]);
console.log('Le quatrième élément du tableau : ' + tableau[3])

let tableauBis = tableau_array.map((index)=> index*2);
console.log('Voici le tableau Bis : ' + tableauBis);

}


