
function printCiao() {
    return "ciao"
}

function provaOperatoriDiUgugaglianza() {
    var frase = "10";
    var numero = 10;

    document.write("frase = " + frase);
    document.write("<br>");
    document.write("numero = " + numero);
    document.write("<br>");

    if(frase == numero) { // frase e numero contengono lo stesso valore?
        document.write("frase e numero contengono lo stesso valore");
    }

    document.write("<br>");

    if(frase === numero) { // frase e numero sono identici (anche nel tipo)?
        document.write("frase === numero");
    } else {
        document.write("frase e numero non sono esattamente identici sia nel tipo che nel valore");
    }
}

