const goToClient = require('./structures/goToClient');

let client = new goToClient({
    prefix: '.'
});
client.login(process.env.TOKEN)