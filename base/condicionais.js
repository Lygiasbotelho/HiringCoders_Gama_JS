var nome = 'Lygi';

//Usando if
/* if (nome === 'Lyh') {
    console.log('Legal! Seu nome é este mesmo');

} else if (nome === 'Lygia') {
    console.log('Tudo bem! É a mesma pessoa');
} else {
    console.log('Que pena! Você não é quem estou procurando');
}
 */
switch (nome) {
    case 'Lyh':
        console.log('Legal! Seu nome é este mesmo');
        break;
    case 'Lygia':
        console.log('Tudo bem! É a mesma pessoa');
        break;
    default:
        console.log('Que pena! Você não é quem estou procurando');
        break;
}