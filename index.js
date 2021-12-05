const goToClient = require('./src/structures/goToClient');

let client = new goToClient({
    prefix: '.'
});
client.login('process.env.TOKEN')
