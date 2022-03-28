const bici = [
    {
        nome: 'Pinarello',
        peso: 10
    },
    {
        nome: 'Bianchi',
        peso: 8
    },
    {
        nome: 'Scott',
        peso: 11
    }
];

//otteniamo il primo oggetto dell'array
let biciLeggera = bici[0];

//metodo con il for
for( let i = 0; i < bici.length; i++){
    if( bici[i]['peso'] < biciLeggera['peso'] ){

        biciLeggera = bici[i];
    }
}

console.log(biciLeggera);

//destructuring dell'oggetto
const{ nome, peso } = biciLeggera;
const biciLeggeraContainer = document.getElementById('biciLeggera');

biciLeggeraContainer.innerHTML =
`
<div>
    <span>${nome}</span>
    <span>${peso}</span>
</div>
`