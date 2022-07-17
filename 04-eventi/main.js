const animati = [];

function creaAnimato(nom, cognom, dataNascita) {
    const animato = {
        // attributi
        nome: nom,
        cognome: cognom,
        nascita: dataNascita,
        // dichiaro anche una funzione toString per l'oggetto che sto creando
        toString: function () {
            var str = this.nome + " " + this.cognome;

            return str;
        }
    };

    // ritorno l'oggetto
    return animato;
}

function inserisciAnimato(nome, cognome, dataNascita) {
    const gianfranco = creaAnimato(nome, cognome, dataNascita);

    document.write("<tr>");
    document.write("<td headers=\"Nome\">" + gianfranco.nome + "</td>");
    document.write("<td headers=\"Cognome\">" + gianfranco.cognome + "</td>");
    document.write("<td headers=\"Data di nascita\">" + gianfranco.nascita + "</td>");
    document.write("</tr>");
}

function aggiungiGianfranco() {
    animati.push(creaAnimato('Gianfranco', 'Rossi', '2004-04-12'));
    console.log("aggiunto un Gianfranco, animati.length=" + animati.length);
}