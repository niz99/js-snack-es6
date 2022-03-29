const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

const min = parseInt( prompt('Inserisci un numero compreso tra 0 e 5') );
const max = parseInt( prompt('Inserisci un numero compreso tra 0 e 5') );

let newArray = [];
//con il foreach
myArray.forEach(
    ( elem, i ) => {
        if ( min <= i && max >= i ) {
            newArray.push( elem );
        }
    }
);
console.log( newArray);

//con il filter
const newArrayFilter = myArray.filter(
    ( element, index ) =>  {
        if ( min <= index && max >= index ){
            return true
        }
        return false
    }
);
console.log( newArrayFilter );