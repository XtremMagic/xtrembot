const {AkairoClient, CommandHandler, ListenerHandler} = require("discord-akairo");

module.exports = class goToClient extends AkairoClient{
    constructor(config = {}){
        super(
            {ownerID:['837654623665913887', '848493595971026945']},
            {
                allowedMentions: {
                    parse: ['everyone', 'roles', 'users'],
                    repliedUser: false
                },
                partials: ['CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER'],
                presence: {
                    status: 'dnd',
                    activities: [
                        {
                            name: 'XtremMagic',
                            type: 'WATCHING',
                            url: 'https://www.youtube.com/channel/UCx_Bo67Vs9G5E2zztArDsRg'
                        }
                    ]
                },
                intents: 32767
            }
        );

        this.commandHandler = new CommandHandler(this, {
            allowMention: true,
            prefix: config.prefix,
            defaultCooldown: 2000,
            directory: './src/commands/'
        });
        
        this.listenerHandler = new ListenerHandler(this, {
            directory: './src/listeners/'
        });

        this.commandHandler.loadAll();
        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.loadAll();
    }
}