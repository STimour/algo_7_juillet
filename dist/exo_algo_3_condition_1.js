"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exo_algo_3_condition_2 = exports.exo_algo_3_condition_1 = void 0;
const exo_algo_3_condition_1 = () => {
    let foin_kg_800 = 800;
    let quantite_mange_par_2_800 = 0.5;
    for (let jour = 0, quantite_mange_2_mouton = 0; jour <= 1000; jour++, quantite_mange_2_mouton += quantite_mange_par_2_800) {
        let foint_rest = foin_kg_800 - quantite_mange_2_mouton;
        let jours_nourri_mouton_2 = foint_rest / 0.25; // nombre de jours pendant les quels, le deuxième mouton pourra être nourri      
        let total_jour = jour + jours_nourri_mouton_2;
        console.log(`Condition 1.: \nFoin = 800kg \nMouton = 2\n${foint_rest}\n${quantite_mange_2_mouton} kg seront manngé par deux moutons en ${jour}\n${jours_nourri_mouton_2} jours pourras manger le deuxième mouton apres la transformation du premier\n${total_jour} jours au total les moutons pourront être nourri, si on part du principe qu'un des moutons vas se transformer en gigot sous 1000 jours`);
    }
    ;
};
exports.exo_algo_3_condition_1 = exo_algo_3_condition_1;
const exo_algo_3_condition_2 = () => {
    let foin_kg_800 = 800;
    let quantite_mange_par_2_800 = 0.5;
    for (let jour = 0, quantite_mange_2_mouton = 0; jour <= 1000; jour++, quantite_mange_2_mouton += quantite_mange_par_2_800) {
        let foint_rest = foin_kg_800 - quantite_mange_2_mouton;
        let jours_nourri_mouton_2 = foint_rest / 0.25; // nombre de jours pendant les quels, le deuxième mouton pourra être nourri      
        let total_jour = jour + jours_nourri_mouton_2;
        console.log(`Condition 1.: \nFoin = 800kg \nMouton = 2\n${foint_rest}\n${quantite_mange_2_mouton} kg seront manngé par deux moutons en ${jour}\n${jours_nourri_mouton_2} jours pourras manger le deuxième mouton apres la transformation du premier\n${total_jour} jours au total les moutons pourront être nourri, si on part du principe qu'un des moutons vas se transformer en gigot sous 1000 jours`);
    }
    ;
};
exports.exo_algo_3_condition_2 = exo_algo_3_condition_2;
