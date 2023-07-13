"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exo_algo_4 = void 0;
const exo_algo_4 = () => {
    const candidats = ["lepeigne", "melangeons", "macreau", "varousselle", "paicvaissrelle", "poutoutout", "hidalgogo"];
    const votes = Array(7).fill(0);
    const candidats_votes = {};
    let nb_votes = 0;
    while (nb_votes < 1000) {
        let vote_all = Math.floor(Math.random() * candidats.length);
        votes[vote_all] += 1;
        nb_votes += 1;
    }
    for (let i = 0; i < candidats.length; i++) {
        const key = candidats[i];
        const value = votes[i];
        candidats_votes[key] = value;
    }
    // 1.a
    for (const [key, value] of Object.entries(candidats_votes)) {
        console.log(`Candidat: ${key} - nombre de votes : ${value}`);
    }
    console.log(votes);
    // 1.b 
    let vote_max = Object.keys(candidats_votes).reduce((a, b) => candidats_votes[a] > candidats_votes[b] ? a : b);
    console.log(`candidat ayant obtenu plus de vote : ${vote_max}`);
    // 1.c
    let deuxieme_tour = Object.values(candidats_votes);
    console.log(deuxieme_tour);
};
exports.exo_algo_4 = exo_algo_4;
