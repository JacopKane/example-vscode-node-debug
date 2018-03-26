const test = ' test '

const pipe = (...functions) =>
    value =>
      functions
        .reduce((accumulator, next) =>
          next(accumulator),value)

const server = require('net').createServer()


pipe(
  test => test.trim(),
  test => test.toUpperCase(),
  () => server.listen()
)(test)
