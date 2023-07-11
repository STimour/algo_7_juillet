export const brief_2_deb = () =>{


const PATCHOUPI_WAGON =  Array(10).fill(0).map((_, index) => index + 3);
let  nb_passagers = PATCHOUPI_WAGON.map((index) => index*3);
const TOTAL_PASSAGERS = nb_passagers.reduce((a,b)=>a+b,0);

let vitesse = 92;
let distnace_parcourue = 0;


    for (let minute = 0; minute <= TOTAL_PASSAGERS ; minute++ ){
        
            let wagon_alleatoir = Math.floor(Math.random()*PATCHOUPI_WAGON.length)

            while (nb_passagers[wagon_alleatoir] > 0){
                nb_passagers[wagon_alleatoir] = nb_passagers[wagon_alleatoir] - 1;
                
                if(nb_passagers[wagon_alleatoir] == 0){
                    vitesse +=10                  
                }
            distnace_parcourue +=vitesse/60;
            }
            console.log(`train avec un nouveau passager de supprimé ${wagon_alleatoir}, ${nb_passagers}, vitesse est de ${vitesse}`)
            
            console.log(`la distance parcourue ${distnace_parcourue}`)

        }
       
   

}
    