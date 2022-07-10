
function creaAnimato(nom, cognom, dataNascita) {
    var animato = {
        // attributi
        nome: nom,
        cognome: cognom,
        nascita: dataNascita,
        // dichiaro anche una funzione toString per l'oggetto che sto creando
        toString: function() {
            var str = this.nome + " " + this.cognome;

            return str;
        }
    }

    // ritorno l'oggetto
    return animato;
}