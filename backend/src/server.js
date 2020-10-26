require('dotenv').config();
require('./connectiondb');

const app = require('./app')

async function main() {
    await app.listen(app.get('PORT'));
    console.log('Server started on port', app.get('PORT'));
}

main();