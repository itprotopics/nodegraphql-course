const message = 'Some message from myModule.js'

const name = 'JLAM'

const location = 'Al sur de la ciudad'

const getGreeting = (name) => {
    return `Welcome to the course ${name}`
}

export { message, name, getGreeting, location as default }