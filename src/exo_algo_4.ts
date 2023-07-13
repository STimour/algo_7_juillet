export const exo_algo_4 = () => {

const candidats = ["lepeigne", "melangeons", "macreau", "varousselle", "paicvaissrelle", "poutoutout", "hidalgogo"];
const votes = Array(candidats.length).fill(0);
const nb_votes_total = 1000;
const candidats_votes:{[key: string]: number} = {};
let nb_votes = 0;

let pourcentage_moyen = nb_votes_total/votes.length

    for (let index = 0; index < nb_votes_total; index++) {
        let vote_all = Math.floor(Math.random()*candidats.length)
        votes[vote_all] +=1
        
    }
    
    for(let i = 0; i < candidats.length; i++){
        const key = candidats[i];
        const value = votes[i];
        candidats_votes[key] = value;
    }
    
    // 1.a
    for(const[key, value] of Object.entries(candidats_votes)){
        console.log(`Candidat: ${key} - nombre de votes : ${value}`)
    }

    //console.log(votes);
    
    // 1.b 
    
    
    let vote_max = Object.keys(candidats_votes).reduce((nbVotesMax, candidat) => candidats_votes[candidat] > nbVotesMax ? candidats_votes[candidat] : nbVotesMax, 0);
    // on trouve le chiffre le plus grand   
    let vainqueur = Object.keys(candidats_votes).filter((candidat) => candidats_votes[candidat] === vote_max);
    // on trouve LE candidat associé au chiffre         
    

    

    //const perdant = Object.values(candidats_votes).filter((candidat) => candidats_votes[candidat] != vote_max);
    let vote_max_perdant;

    for (let index = 0; index < perdant.length; index++) {
        
        vote_max_perdant = Object.keys(perdant).reduce((nbVotesMax, candidat) => perdant[candidat] > nbVotesMax ? perdant[candidat] : nbVotesMax, 0);
        
    }
    
    let deux_tour = [];
    deux_tour.push(vote_max, vote_max_perdant)


    console.log(perdant)
    console.log("-------------------");
    console.log(vote_max_perdant)
    console.log("-------------------");
    console.log(deux_tour)
    
    
    console.log("-------------------");
    console.log(`candidat ayant obtenu plus de vote : ${vote_max}`, vainqueur);
    console.log("-------------------");    
    



}