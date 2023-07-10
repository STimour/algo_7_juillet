export function exo_algo_3(foin_kg: number, nb_mouton: number){

foin_kg;
const foin_gr = foin_kg * 1000;
let quantite_mange_mouton = 250 * nb_mouton;
let quantite_mange = 0;
let jours_nourri_mouton = 0;
let foint_rest;
let total_jour;
let jour;

if (foin_kg == 800 && nb_mouton == 2){

for (jour = 0, quantite_mange = 0;  jour < 1000;  jour++, quantite_mange+=quantite_mange_mouton ){
    foint_rest = foin_gr - quantite_mange;
    jours_nourri_mouton = foint_rest/250; // nombre de jours pendant les quels, le deuxième mouton pourra être nourri
    total_jour = jour + jours_nourri_mouton;
};
console.log(`${quantite_mange/1000} kg seront mangé par les moutons en ${jour}\n${jours_nourri_mouton} jours pourras manger les moutons qui restent apres la transformation du premier\n${total_jour} jours au total les moutons pourront être nourri, si on part du principe qu'un des moutons vas se transformer en gigot sous 1000 jours`);
}else if(foin_kg == 20){
    for(jour = 0; quantite_mange < foin_gr; jour++, quantite_mange+=quantite_mange_mouton){
    
};
console.log(`Les deux moutons pourrons manger pendant ${jour} si le stok du foin est égale à ${foin_gr/1000}`);
}else if (nb_mouton == 5){
    for(jour = 0, quantite_mange = 0; quantite_mange <= foin_gr; jour++, quantite_mange+=quantite_mange_mouton){
console.log(`les 5 moutons vont manger  pendant ${jour} jours`);
};

}

};
///////////// Corréction
//export function exo3(){
//    // On a un stock de foin qui contient 800kg de foin.
//    // On a 2 moutons qui mangent 500g de foin par jour.
//    // Un des mouton est transformé en gigot au bout de 1000 jours.
//    // Combien de temps le stock de foin va-t-il durer ?
//
//    // Même exercice si le stock est de 20 kg 
//    // Même exercice si le nombre de mouton est de 5.
//    console.log("2 moutons et 800KG foin", getNbJourOfFood(800, 2));
//    console.log("2 moutons et 20KG foin", getNbJourOfFood(20, 2));
//    console.log("5 moutons et 800KG foin", getNbJourOfFood(800, 5));
//}
//
//const PORTION_FOOD_BY_SHEEP = 0.25;
//const DAYS_BEFORE_LOSING_ONE_SHEEP = 1000;
//
//function getNbJourOfFood(foodInKg: number, nbSheep: number){
//    let nbJour = 0
//
//    while(foodInKg > 0){
//        if(nbJour === DAYS_BEFORE_LOSING_ONE_SHEEP){
//            nbSheep -= 1;
//        }
//        foodInKg -= PORTION_FOOD_BY_SHEEP * nbSheep
//        if(foodInKg >= 0){
//            nbJour++
//        }
//    }
//
//    return nbJour
//}