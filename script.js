console.log('JS OK!');

printCardArrayIniziale();

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
function printCardArrayIniziale(){
    //debugger

    // richiamo la mia funzione getCard
    let carte= getCard();

    //funzione printNewCard


    // for (let i=0; i < carte.length; i++){
    //     container.innerHTML +=
    //     //testo html che il ciclo inserirà
    //      `<div class="team-card">
    //      <div class="card-image">
    //        <img
    //          src= "${carte[i]['foto']}"
    //          />
    //      </div>
    //      <div class="card-text">
    //        <h3>${carte[i] ['nome']}</h3>
    //        <p>${carte[i]['ruolo']}</p>
    //      </div> 
    //    </div>`;
    printNewCard(carte);
}

    




//Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un *nuovo oggetto*, il quale viene *inserito nell'array iniziale* e viene stampata una nuova card con tutte le informazioni inserite dall'utente.

//richiamo l'id del btn "add"
const btnAdd = document.getElementById("addMemberButton");
//creo un evento con il click 
btnAdd.addEventListener('click', function(){
   //richiamo i miei id per nome ruolo e immagine e aggiungo il .value
    let nuovoNome = document.getElementById("name").value;
    let nuovoRuolo = document.getElementById("role").value;
    let nuovaFoto = document.getElementById("image").value;
    let teamNewCard = getCard();
//commentato, soluzione più rapida nel .value riga 95-96-97
    // let newNameMember = nuovoNome.value;
    // let newRoleMember = nuovoRuolo.value;
    // let newImgMember = nuovaFoto.value;

// pusho i nuovi elementi nell'array iniziale 
    teamNewCard.push({
        'nome': nuovoNome,
        'ruolo': nuovoRuolo,
        'foto': nuovaFoto,
    });
    //debugger
    //console.log(teamCard);
    
    printNewCard(teamNewCard)

});


//funzione per stampare ruolo nome e immagine nell'html
function printNewCard(teamNewCard){
    let container = document.querySelector('.team-container');
    container.innerHTML="";
    for (let i=0; i < teamNewCard.length; i++){
        
        container.innerHTML +=
        //testo html che il ciclo inserirà
         `<div class="team-card">
         <div class="card-image">
           <img
             src= "${teamNewCard[i]['foto']}"
             />
         </div>
         <div class="card-text">
           <h3>${teamNewCard[i] ['nome']}</h3>
           <p>${teamNewCard[i]['ruolo']}</p>
         </div> 
       </div>`;
}
}