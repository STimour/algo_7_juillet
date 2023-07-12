"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.brief_2_deb = void 0;
const brief_2_deb = () => {
    let moyenne;
    let distnace_parcourue_100 = 0;
    let voyage = 0;
    const besoinVoyage = 100;
    while (voyage <= besoinVoyage) {
        if (voyage === besoinVoyage) {
            break;
        }
        else {
            voyage += 1;
            let distnace_parcourue = 0;
            let min = 0;
            let vitesse = 92;
            let patchoupi_wagons = Array(10).fill(0).map((_, index) => index + 3);
            let nb_passagers = patchoupi_wagons.map((index) => index * 3);
            while (nb_passagers.length > 0) {
                let wagon_alleatoir = Math.floor(Math.random() * nb_passagers.length);
                nb_passagers[wagon_alleatoir] = nb_passagers[wagon_alleatoir] - 1;
                if (nb_passagers[wagon_alleatoir] === 0) {
                    vitesse += 10;
                    nb_passagers = nb_passagers.filter((passager, i) => { return passager > 0; });
                }
                console.log(`wagon avec un nouveau passager de supprimé - ${wagon_alleatoir}, ${nb_passagers},\n vitesse est de ${vitesse}\nle temps que le train est en route est de ${min} minutes`);
                distnace_parcourue += vitesse / 60;
                console.log(voyage);
                console.log(`la distance parcourue, avant la disparition des passagers, est de ${distnace_parcourue}`);
                min += 1;
            }
            distnace_parcourue_100 += distnace_parcourue;
            moyenne = distnace_parcourue_100 / voyage;
        }
        console.log(`En ${voyage} voyage le train parcour ${distnace_parcourue_100} et la moyenne est égale à ${moyenne}`);
    }
};
exports.brief_2_deb = brief_2_deb;
