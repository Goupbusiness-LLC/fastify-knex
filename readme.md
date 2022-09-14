# Fastify KnexJS Plugin

[![NPM](https://nodei.co/npm/fastify-knex-plugin.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/fastify-knex-plugin/)

## Installation

```bash
npm install fastify-knex-plugin
```
or
```bash
yarn add fastify-knex-plugin
```


## Usage

```javascript
const options = {
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    port : 3306,
    user : 'your_database_user',
    password : 'your_database_password',
    database : 'myapp_test'
  }
}

fastify.register(require('fastify-knex-plugin'), options, (err) =>
  console.error(err)
);

fastify.get('/', (request, reply) => {
  console.log(fastify.knex) // Knex DB instance
})

fastify.get('/getProgrammers', async(request, reply) => {
  // example get
  const programmers = await fastify.knex('users').select('name').where('isProgrammer', true)
  reply.send(programmers)
})
```

## Options

KnexJS DB configuration object:

<https://knexjs.org/guide/#configuration-options>

## Author

[Tarik BEYAZATLI](https://github.com/Beyazatli)

## License

Licensed under [MIT](./LICENSE).
