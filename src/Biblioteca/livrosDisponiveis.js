function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const livrosDisponiveis = shuffleArray([
    { numero: 1, nome: '5 Aneis', description: 'dasjodasodj', capa:'/src/assets/5aneis.jpg', leitura: Math.random()},
    { numero: 2, nome: 'Arte da Guerra', capa:'/src/assets/artedaguerra.jpg', leitura: Math.random()},
    { numero: 3, nome: 'Biblia', capa:'/src/assets/biblia.jpg', leitura: Math.random()},
    { numero: 4, nome: 'Bushido', capa:'/src/assets/bushido.jpg', leitura: Math.random()},
    { numero: 5, nome: 'Corte', capa:'/src/assets/corte.jpg', leitura: Math.random()},
    { numero: 6, nome: 'Diário', capa:'/src/assets/diario.jpg', leitura: Math.random()},
    { numero: 7, nome: 'Harry', capa:'/src/assets/harry.jpg', leitura: Math.random()},
    { numero: 8, nome: 'Mitologia', capa:'/src/assets/mitologia.jpg', leitura: Math.random()},
    { numero: 9, nome: 'Nárnia', capa:'/src/assets/narnia.jpg', leitura: Math.random()},
    { numero: 10, nome: 'Nárnia', capa:'/src/assets/narnia2.jpg', leitura: Math.random()},
    { numero: 11, nome: 'Percy', capa:'/src/assets/percy.jpg', leitura: Math.random()},
    { numero: 12, nome: 'Sherlock', capa:'/src/assets/sherlock.jpg', leitura: Math.random()},
    { numero: 13, nome: 'Guerra', capa:'/src/assets/tronos.jpg', leitura: Math.random()},
]);
