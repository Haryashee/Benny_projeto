const {SlashCommanderBuider, InteractionResponse } = require ("discord.js")


module.exports = {
 
 data:   new SlashCommanderBuider()
.setName ("ping")
.setDescription ("Responde com Pong !"),

async execute(Interaction) {
    await Interaction.reply("Pong!")
}
}