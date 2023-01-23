// .find()
// returns the first element matching criteria

const ages = [16, 19, 21 , 33, 45, 54, 63, 71]

function checkAge (age) {
    return age > 18
}

const ageAdult = ages.find(checkAge)
console.log(`ageAdult: ${ageAdult}`)

// Anonymous function
const ageAdult2 = ages.find( function (age) {
    return age > 18
})

console.log(`ageAdult2 ${ageAdult2}`)

// Arrow function
const ageAdult3 = ages.find(age => age > 18)
console.log(`ageAdult2 ${ageAdult3}`)