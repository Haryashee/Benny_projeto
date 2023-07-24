const { TextInputStyle } = require('discord.js')
const harydc = require('discord.js')

module.exports = {
    name: 'anuncio',
    description: '🔔 Enviar um anuncio [ Staff ]',
    type: harydc.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "chat",
            description: "📌 Mencione um canal para enviar o anuncio.",
            type: harydc.ApplicationCommandOptionType.Channel,
            required: true,
        }
    ],
    run: async (hary, interaction) => {

        if (!interaction.member.permissions.has(harydc.PermissionFlagsBits.ManageMessages))
            return interaction.reply({
                content: `**❌ | ${interaction.user}, Você não possui permissão para utilizar este comando!**`,
                ephemeral: true,
            })

        const modal = new harydc.ModalBuilder()
            .setCustomId('MyFirstModal')
            .setTitle('Envie um anuncio 🔪')

        const TítuloEmbed = new harydc.TextInputBuilder()
            .setCustomId('TítuloEmbed')
            .setLabel('Título da Embed')
            .setPlaceholder(`Insira o título da Embed.`)
            .setStyle(TextInputStyle.Short)
            .setRequired(true)

        const Descrição = new harydc.TextInputBuilder()
            .setCustomId('Descrição')
            .setLabel('Descrição da Embed')
            .setPlaceholder(`Insira a descrição da Embed`)
            .setStyle(TextInputStyle.Paragraph)
            .setRequired(true)

        const Thumbnail = new harydc.TextInputBuilder()
            .setCustomId('Thumbnail')
            .setLabel('Thumbnail da Embed')
            .setPlaceholder(`Insira a thumbnail da Embed`)
            .setStyle(TextInputStyle.Paragraph)
            .setRequired(false)

        const Image = new harydc.TextInputBuilder()
            .setCustomId('Image')
            .setLabel('Imagem da Embed')
            .setPlaceholder(`Insira a imagem da Embed`)
            .setStyle(TextInputStyle.Paragraph)
            .setRequired(false)

        const PrimeiraActionRow = new harydc.ActionRowBuilder().addComponents(TítuloEmbed);
        const SegundaActionRow = new harydc.ActionRowBuilder().addComponents(Descrição);
        const TerceiraActionRow = new harydc.ActionRowBuilder().addComponents(Thumbnail);
        const QuartaActionRow = new harydc.ActionRowBuilder().addComponents(Image);

        let chat = interaction.options.getChannel("chat")

        modal.addComponents(PrimeiraActionRow, SegundaActionRow, TerceiraActionRow, QuartaActionRow)

        await interaction.showModal(modal);

        hary.once('interactionCreate', async interaction => {
            if (!interaction.isModalSubmit()) return;

            if (interaction.customId === 'MyFirstModal') {

                const DescriçãoEmbed = interaction.fields.getTextInputValue('Descrição');
                const TítuloEmbed = interaction.fields.getTextInputValue('TítuloEmbed');
                let ThumbnailEmbed = interaction.fields.getTextInputValue('Thumbnail');
                let ImagemEmbed = interaction.fields.getTextInputValue('Image');

                if (!ThumbnailEmbed) ThumbnailEmbed = ("https://google.com");
                if (!ImagemEmbed) ImagemEmbed = ("https://google.com");

                let embedModal1 = new harydc.EmbedBuilder()
                    .setColor(`Red`)
                    .setTitle(`${TítuloEmbed}`)
                    .setDescription(`${DescriçãoEmbed}`)
                    .setThumbnail(`${ThumbnailEmbed}`)
                    .setImage(`${ImagemEmbed}`)

                interaction.reply({
                    content: `**✅ | O anuncio foi enviado com sucesso**`, ephemeral: true
                })


                chat.send({
                    embeds: [embedModal1]
                }).catch((e) => {
                    interaction.reply({ content: `❌ | Algo deu errado, por favor tente novamente...`, ephemeral: true })
                })

            }

        });


    }
}