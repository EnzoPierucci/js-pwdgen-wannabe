//Chiedi all’utente il suo nome, poi chiedi il suo cognome,
//poi chiedi il suo colore preferito
//Infine scrivi sulla pagina nomecognomecolorepreferito23



let nomeUtente = prompt("Inserisci il tuo nome")
let cognomeUtente = prompt("Inserisci il tuo cognome")
let coloreUtente = prompt("Inserisci il tuo colore preferito")

const numeroFisso = 23

console.log("Il nome è:", nomeUtente)
console.log("Il cognome è:", cognomeUtente)
console.log("Il colore è:", coloreUtente)

document.write(`<p>La tua password è: <strong>${nomeUtente + cognomeUtente + coloreUtente + numeroFisso}</strong></p>`)
