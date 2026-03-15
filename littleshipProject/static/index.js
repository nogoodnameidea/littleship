let arrayAssuntos = [
    'Comidas', 'Músicas', 'Teorias', 'Jogos',
    'Curiosidades aleatórias','Filmes', 'Séries', 'Preferências dos E.T.s',
    'Memes'
];
let assuntoInt;


function gerarAssunto() {
    assuntoInt = Math.floor(Math.random() * arrayAssuntos.length);
    document.getElementById('assunto').textContent = `Porquê vocês não conversam sobre ${arrayAssuntos[assuntoInt]}?`;
    console.log(assuntoInt) // Debug
}