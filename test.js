var eem = require('./eem')

eem.on('bye', name => {
  console.log(`Bye  ${name}!`)
})

eem.on(['hi', 'hello'], name => {
  console.log(`Hi ${name}!`)
})
 
eem.emit('hi', 'master')
eem.emit(['hi', 'bye'], 'master')
eem.remove('hi')

eem.emit('hi', 'brrr')
