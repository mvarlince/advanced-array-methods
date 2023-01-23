// .map() fancier .forEach()

const numbers = [11 ,22, 33, 44 ,55 ,66, 77]

const numberMap = numbers.map( element => console.log(element))

const people = [
    {
        firstName: 'Varlince',
        lastName: 'Meran'
    },
    {
        firstName: 'Anthony',
        lastName: 'Style'
    },
    {
        firstName: 'Natasha',
        lastName: 'Narine'
    }
]

const peopleMap = people.map((element, index) => {
    const eachPerson = `${index} ${element.firstName} , ${element.lastName}`
    console.log(eachPerson)
    return element
})

console.table(peopleMap)