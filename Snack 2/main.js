var teams = [{
    nome: 'PSG',
    punti_fatti: 0,
    falli_subiti: 0
},
{
    nome: 'Ajax',
    punti_fatti: 0,
    falli_subiti: 0
},
{
    nome: 'Manchester City',
    punti_fatti: 0,
    falli_subiti: 0
},
{
    nome: 'Real Madrid',
    punti_fatti: 0,
    falli_subiti: 0
}
];

const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//inserire numeri random al posto di punti_fati e falli_subiti
for(let i = 0; i < teams.length; i++){
    const element = teams[i];

    element.punti_fatti = randomNumber(0, 100);
    element.falli_subiti = randomNumber(0, 100);

}

console.log(teams);

//creare un nuovo array con dentro gli oggetti con chiavi solo: nomi e falli subiti

const newArrayTeams = [];

for(let i = 0; i < teams.length; i++){
    const element = teams[i];

    //destrutturare
    const {nome, falli_subiti} = element;

    newArrayTeams.push(
        {
            nome,
            falli_subiti
        }
    );
}

console.log(newArrayTeams);