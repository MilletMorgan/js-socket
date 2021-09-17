const fastify = require('fastify')()

fastify.register(require('fastify-socket.io'), {
  // put your options here
})

fastify.get('/', (req, reply) => {
  fastify.io.emit('hello')
})

fastify.listen(3000)