// .filter() filters array

const ages = [11,21,33,45,55,67]

const adults = ages.filter(age => age > 18)

// console.log(adults)

(adults.length >= 1) ? console.log(true) : console.log(false)