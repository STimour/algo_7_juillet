"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exo_algo_3 = void 0;
function exo_algo_3(foin_kg, nb_mouton) {
    foin_kg;
    const foin_gr = foin_kg * 1000;
    const quantite_mange_mouton = 250 * nb_mouton;
    let quantite_mange = 0;
    let jours_nourri_mouton = 0;
    let foint_rest;
    let total_jour;
    let jour;
    do {
        for (jour = 0, quantite_mange = 0; jour <= 1000; jour++, quantite_mange += quantite_mange_mouton) {
            foint_rest = foin_gr - quantite_mange;
            jours_nourri_mouton = foint_rest / 250; // nombre de jours pendant les quels, le deuxième mouton pourra être nourri
            total_jour = jour + jours_nourri_mouton;
        }
    } while (foin_kg == 800);
    console.log(`${quantite_mange / 1000} kg seront manngé par les moutons en ${jour}\n${jours_nourri_mouton} jours pourras manger les moutons qui restent apres la transformation du premier\n${total_jour} jours au total les moutons pourront être nourri, si on part du principe qu'un des moutons vas se transformer en gigot sous 1000 jours`);
    do {
        for (jour = 0; quantite_mange <= foin_gr; jour++, quantite_mange += quantite_mange_mouton) {
        }
    } while (foin_kg == 20);
    console.log(`Les deux moutons pourrons manger pendant ${jour} si le stok du foin est égale à ${foin_gr / 1000}`);
}
exports.exo_algo_3 = exo_algo_3;
;
