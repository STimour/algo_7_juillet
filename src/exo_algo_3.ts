export const exo_algo_3 = () =>{

let foin_kg_800 = 800;
let foin_gr_800 = foin_kg_800 * 1000;
let quantite_mange_par_2_800 = 500

for (let jour = 0, quantite_mange_2_mouton = 0 ; jour <= 1000; jour++, quantite_mange_2_mouton+=quantite_mange_par_2_800){
    let foint_rest = foin_gr_800 - quantite_mange_2_mouton;
    
    let jours_nourri_mouton_2 = foint_rest/250; // nombre de jours pendant les quels, le deuxième mouton pourra être nourri      
    let total_jour = jour + jours_nourri_mouton_2
    console.log(`${quantite_mange_2_mouton/1000} kg seront manngé par deux moutons en ${jour}\n${jours_nourri_mouton_2} jours pourras manger le deuxième mouton apres la transformation du premier\n${total_jour} jours au total les moutons pourront être nourri, si on part du principe qu'un des moutons vas se transformer en gigot sous 1000 jours`);
}


let foin_kg_20 = 20;
let foin_gr_20 = foin_kg_20 * 1000;
let quantite_mange_par_2_20 = 500

for (let jour = 0, quantite_mange_2_mouton = 0 ; jour <= 1000; jour++, quantite_mange_2_mouton+=quantite_mange_par_2){
    let foint_rest = foin_gr_800 - quantite_mange_2_mouton;
    
    let jours_nourri_mouton_2 = foint_rest/250; // nombre de jours pendant les quels, le deuxième mouton pourra être nourri      
    let total_jour = jour + jours_nourri_mouton_2
    console.log(`${quantite_mange_2_mouton/1000} kg seront manngé par deux moutons en ${jour}\n${jours_nourri_mouton_2} jours pourras manger le deuxième mouton apres la transformation du premier\n${total_jour} jours au total les moutons pourront être nourri, si on part du principe qu'un des moutons vas se transformer en gigot sous 1000 jours`);
}

// for (let foin_rest = foin_gr-quantite_mange_2_mouton, jour=0; foin_rest = 0; jour++, foin_rest-=250){
//     var jours_total = 1000 + jour; 
//     
// }
   
}
