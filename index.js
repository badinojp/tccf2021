const filter = function (field, operator, value) {

    let items = [
        {id: 1, product: "Drone A200", price: 56, inStock: true},
        {id: 2, product: "Drone A500", price: 72, inStock: false},
        {id: 3, product: "Drone A900", price: 82, inStock: true},
        {id: 4, product: "Smartphone TZ10", price: 40, inStock: true},
        {id: 5, product: "Smartphone TZ12", price: 63, inStock: true},
        {id: 6, product: "Smartphone TZ14", price: 152, inStock: false},
        {id: 7, product: "Camera XFO", price: 87, inStock: false},
        {id: 8, product: "Camera GHE", price: 20, inStock: true},
        {id: 9, product: "TV s100", price: 82, inStock: true},
        {id: 10, product: "TV s200", price: 186, inStock: true},
        {id: 11, product: "TV s300", price: 253, inStock: true},
        {id: 12, product: "TV s400", price: 325, inStock: false},
        {id: 13, product: "Computer II", price: 500, inStock: true},
        {id: 14, product: "Computer III", price: 680, inStock: true},
        {id: 15, product: "Computer IV", price: 720, inStock: true},
        {id: 16, product: "Computer V", price: 868, inStock: true},
    ]

    /* VALID OPERATORS */
    const EQUAL = 'EQUAL'
    const CONTAINS = 'CONTAINS'
    const GREATER_THAN = 'GREATER_THAN'
    const LESS_THAN = 'LESS_THAN'


    /* YOUR CODE HERE */
    var outputItems = [];
    if (operator == EQUAL) { // Tomo el operador como punto de partida para cada uno de los casos
            if (field == 'id') {
                for (var i = 0; i < items.length; i++) {
                    if (items[i].id == value) {
                        outputItems.push(items[i])
                    }
                }
                return outputItems;
        } else if 
            (field == 'product') { // Voy yendo uno por uno por los posibles valores que puede tener "field"
                for (var i = 0; i < items.length; i++) {
                    if (items[i].product == value) {
                        outputItems.push(items[i])
                    }
                }
                return outputItems;
        } else if
            (field == 'price') { // "" 
                for (var i = 0; i < items.length; i++) {
                    if (items[i].price == value) {
                        outputItems.push(items[i])
                    }
                }
                return outputItems;
        } else if 
            (field == 'inStock') { // ""
                for (var i = 0; i < items.length; i++) {
                    if (items[i].inStock == value) {
                        outputItems.push(items[i])
                    }
                }
                return outputItems;
        }
    } else if (operator == CONTAINS) { // Nuevamente tomo el operador como punto de partida, en este caso la opción "CONTAINS"
        for (var i = 0; i < items.length; i++) {
            if (items[i].product.search(value) !== -1) {
                outputItems.push(items[i])
            }
        }
        return outputItems;
    } else if (operator == GREATER_THAN) { // ""
        for (var i = 0; i < items.length; i++) {
            if (items[i].price > value) {
                outputItems.push(items[i]);
            }
        }
        return outputItems;
    } else if (operator == LESS_THAN) {// ""
        for (var i = 0; i < items.length; i++) {
            if (items[i].price < value) {
                outputItems.push(items[i]);
            }
        }
        return outputItems;
    }
    
}

module.exports = filter