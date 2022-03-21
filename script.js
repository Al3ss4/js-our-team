console.log('JS OK!');

printCard();

//Aggiungere un file js in cui definire *un array di oggetti* che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: *Nome, Ruolo e Foto*.





//creo una funzione " getCard"

function getCard (){
    return teamCard = [
        {
            'nome': 'Angela Caroll',
            'ruolo': 'Chief Editor',
            'foto': 'img/angela-caroll-chief-editor.jpg',
        },
    
        {
            'nome': 'Angela Lopez',
            'ruolo': 'Social Media Manager',
            'foto': 'img/angela-lopez-social-media-manager.jpg',
            
        },
    
        {
            'nome': 'Barbara Ramos',
            'ruolo': 'Graphic Designer',
            'foto': 'img/barbara-ramos-graphic-designer.jpg', 
        },
    
        {
            'nome': 'Scott Estrada',
            'ruolo': 'Developer',
            'foto': 'img/scott-estrada-developer.jpg',
        },
    
        {
            'nome': 'Walter Gordon',
            'ruolo': 'Office Manager',
            'foto': 'img/walter-gordon-office-manager.jpg',
        },
    
        {
            'nome': 'Wayne Barnett',
            'ruolo': 'Founder & CEO',
            'foto': 'img/wayne-barnett-founder-ceo.jpg',
        }
    ];
    
}


//creo funzione per stampare le carte
function printCard(){
    //vado a richiamare la classe dove inserire le carte
    let container = document.querySelector('.team-container');
    // richiamo la mia funzione getCard
    let carte= getCard();
    //ciclo la mia funzione getCard e la inserisco nell'html per ogni carta che troverà
    for (let i=0; i < carte.length; i++){
        container.innerHTML +=
        //testo html che il ciclo inserirà
         `<div class="team-card">
         <div class="card-image">
           <img
             src= "${carte[i]['foto']}"
             />
         </div>
         <div class="card-text">
           <h3>${carte[i] ['nome']}</h3>
           <p>${carte[i]['ruolo']}</p>
         </div> 
       </div>`;

//console.log(carte[i]);
    
}}

