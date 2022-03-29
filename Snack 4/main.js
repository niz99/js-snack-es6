let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
  ];

//con foreach
const targhe = [];

students.forEach(
    ( element ) => {
        targhe.push( element.name.toUpperCase() );
    } 
);
console.log(taghe);

//con il map
const newTarghe = students.map(
    ( element ) => element.name.toUpperCase()
);
console.log( newTarghe );

const nerds = students.filter(
    ( element ) => {
        if ( element.grades > 70 ){
            return true
        }
    }
);
console.log( nerds );

const nerds2 = students.filter(
    ( element ) => element.grades > 70 && element.id > 120
);
console.log( nerds2 );