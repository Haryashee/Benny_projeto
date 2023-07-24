const harydc = require("discord.js")

module.exports = {
    name: "clear", 
    description: "🔔 Limpe o canal de texto [ Staff ]", 
    type: harydc.ApplicationCommandType.ChatInput,
    options: [
        {
            name: 'quantidade',
            description: '📌 Número de mensagens para serem apagadas.',
            type: harydc.ApplicationCommandOptionType.Number,
            required: true,
        }
    ],

    run: async (haryd, interaction) => {
        
        try {

        } catch (err) {
            console.log(err)
        }

        let numero = interaction.options.getNumber('quantidade')

        if (!interaction.member.permissions.has(harydc.PermissionFlagsBits.ManageMessages)) {
            interaction.reply({ content: `**<a:errado:1057749753133289554> | ${interaction.user}, Você não possui permissão para utilizar este comando!**`, ephemeral: true })
        } else {

            if (parseInt(numero) > 100 || parseInt(numero) <= 0) {

                let embed = new harydc.EmbedBuilder()
                    .setColor("Red")
                    .setDescription(`Você precisa escolher um numero entre **1 e 100** para apagar.\n\n**Exemplo:**\n\n\`/clear [1 - 100]\``);

                interaction.reply({ ephemeral: true, embeds: [embed] })

            } else {

                interaction.channel.bulkDelete(parseInt(numero))

                let embed = new harydc.EmbedBuilder()
                    .setColor("Red")
                    .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
                    .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
                    .setDescription(`<a:certo:819237719296442368> | O canal de texto ${interaction.channel} teve \`${numero}\` mensagens deletadas por <@${interaction.user.id}>.`);

                interaction.reply({ embeds: [embed] })

                let apagar_mensagem = "sim" 

                if (apagar_mensagem === "sim") {
                    setTimeout(() => {
                        interaction.deleteReply()
                    }, 5000)
                } else if (apagar_mensagem === "sim") {
                    return;
                }

            }

        }

    }
}