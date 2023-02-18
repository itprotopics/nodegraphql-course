

const addFunction = (a,b) => {
    var sum = a + b
    return `Suma de ${a} + ${b} = ${sum}`
}

const substractFunction = (a, b) => {
    var res = a - b
    return `Resta de ${a} - ${b} = ${res}`
}

export {substractFunction, addFunction as default}
