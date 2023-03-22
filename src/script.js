/**
 * Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico
 */


/**
 * creare nell'html un'intestazione 
 * creare un div dove andrà il nostro ciclo for
 * In questo esercizio useremo un modo diverso.
 * Dobbiamo soddisfare la nostra idea di recepire un messaggio più complesso ed articolato.
 * Grazie a questa funzione possiamo avere dei dati specifici.
 * Oggi dobbiamo prendere in considerazione nome cognome ruolo e dobbiamo aggiungere img
 * creiamo una variabile -> apriamo una parentesi graffa -> inseriamo una seria di coppie nome : valore
 * creare un ciclo for come nell'esercizio degli slider affinche possa ripetersi per gli array creati (prop o key (nome della proprietà))
 * const palla = { peso : 10} ricordare di usare graffe e due punti 
 * per l'array ourTeam = [
 * { 
 * }
 * ]
 * metterenelle quadre poi nelle graffe per lo specifico
 * 
 * Fine= creare un inner html collegato all'html appunto per poi ripotare tutte le informazioni del nostro array
 */

/*
Wayne    Barnett	Founder & CEO	          wayne-barnett-founder-ceo.jpg
Angela   Caroll	    Chief Editor	          angela-caroll-chief-editor.jpg
Walter   Gordon	    Office Manager	          walter-gordon-office-manager.jpg
Angela   Lopez	    Social Media Manager	  angela-lopez-social-media-manager.jpg
Scott    Estrada	Developer	              scott-estrada-developer.jpg
Barbara  Ramos	    Graphic Designer	      barbara-ramos-graphic-designer.jpg
 */


//Come prima cosa andiamo a creare gli array di oggetti 
const ourTeam = [
    {
        firstName: 'Wayne',
        lastName: 'Barnett',
        role: 'Founder & CEO',
        image:'wayne-barnett-founder-ceo.jpg'
    },
    {
        firstName: 'Angela',
        lastName: 'Caroll',
        role: 'Chief Editor',
        image:'angela-caroll-chief-editor.jpg'
    },
    {
        firstName: 'Walter',
        lastName: 'Gordon',
        role: 'Office Manager',
        image:'walter-gordon-office-manager.jpg',
    },
    {
        firstName: 'Angela',
        lastName: 'Lopez',
        role: 'Social Media Manager',
        image:'angela-lopez-social-media-manager.jpg',
    },
    {
        firstName: 'Scott',
        lastName: 'Estrada',
        role: 'Developer',
        image:'scott-estrada-developer.jpg',
    },
    {
        firstName: 'Barbara',
        lastName: 'Ramos',
        role: 'Graphic Designer',
        image:'barbara-ramos-graphic-designer.jpg',
    },
];

//  console.log(team);


// prendiamo la row da html
const row = document.querySelector('.row');

//creiamo un ciclo for
for(let prop = 0; prop < ourTeam.length; prop++){
    const info = ourTeam[prop];
    const text = `
    <div class="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
        <div class="card mb-5">
            <img src="./img/${info.image}" class="card-img-top" alt="${info.role}">
            <div class="card-body text-center">
                <h5 class="card-title">${info.firstName} ${info.lastName}</h5>
                <p class="card-text">${info.role}</p>
            </div>
        </div>
    </div>
    `
    row.innerHTML += text;
}

//console.log(row);