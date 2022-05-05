// Milk -40, Bread -20, Banana -10, Orange -5, Apple -6, Tomato -5

const product = "Tomato"

switch (product) {
    case 'Milk': {
        console.log('The price of Milk is 40 den.')
        break
    }

    case 'Bread': {
        console.log('The price of Bread is 20 den.')
        break
    }

    case 'Banana': {
        console.log('The price of Banana is 10 den.')
        break
    }

    case 'Orange':
    case 'Tomato': {

        let variable = 'I am buying some tomatoes'
        console.log(variable)
        console.log('The price of product is 5 den.')
        break
    }

    case 'Apple': {
        console.log('The price of Apple is 6 den.')
        break
    }

    default: {
        console.log('Unknown product')
        break
    }
}



const den = "Petok"

switch (den) {
    case 'Ponedelnik':
    case 'Vtornik':
    case 'Sreda':
    case 'Chetvrtok':
    case 'Petok':
     {
        console.log('Deneska e raboten den')
        break
    }
    
    case 'Sabota':
    case 'Nedela': {
        console.log('Deneska e vikend')
        break
    }
    
    default: {
        console.log('Unknown day')
        break
    }
}

const broj = 5467

if (broj % 5 === 0) {
  console.log("Brojot e deliv so 5")
} else {
  console.log("Brojot ne e deliv so 5")
}