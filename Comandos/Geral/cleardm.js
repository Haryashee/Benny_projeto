const harydc = require("discord.js")

module.exports = {
    name: "cleardm",
    description: `🔔 Limpe todas as minhas mensagens na sua DM`,
    type: harydc.ApplicationCommandType.ChatInput,

    run: async (hary, interaction) => {

        const dm = await interaction.member.createDM();
        await interaction.reply({
            content: `🔁 **| ${interaction.user}, Estou limpando sua dm, já estava ficando cansado de tantas mensagens**`,
            ephemeral: true,
        });

        setTimeout(() => {
            interaction.editReply({
                content: `**<a:certo:819237719296442368> | ${interaction.user}, Limpei sua DM com sucesso, agora estou bem mais leve.**`

            })
        }, 5000)

        setTimeout(() => {
            interaction.editReply({
                content: `📝 **| ${interaction.user}, para deletar essa mensagem clique em "Ignorar Mensagem".**`,
            })
        }, 15000);

        const deleteMessages = await hary.channels.cache
            .get(dm.id)
            .messages.fetch({ limit: 99 });

        await deleteMessages.map((msg) => {
            if (msg.author.bot) {
                msg.delete();
            }
        });
    }
}

