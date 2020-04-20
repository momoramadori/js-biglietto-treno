//Calcolo prezzo del treno

//Numero chilometri che intende percorrere
var km = prompt('Quanti km devi percorrere?');

//Età del passeggero
var age = prompt('Quanti hanni hai?');

//Calcolo del prezzo del Biglietto

if ( age < 18 ) {
    var ticketPrice = (((km * 0.21) / 100) * 80);
} else if ( age > 65) {
    var ticketPrice = (((km * 0.21) / 100) * 60);
} else {
    var ticketPrice = (km * 0.21);
}

document.getElementById('prezzo').innerHTML = ( "Il prezzo del Biglietto è: € " + ticketPrice );
