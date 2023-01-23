// returns true is any of the array elements match the criteria

const ages = [11 ,21 , 33, 45, 51, 67]

const adult1 = ages.some( age => age > 18)

console.log(adult1)
// returns true