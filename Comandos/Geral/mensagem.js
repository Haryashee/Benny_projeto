/*const harydc = require('discord.js');

module.exports = {
  name: "send",
  description: "🔔 Enviar uma mensagem por hary [ Staff ]",
  type: harydc.ApplicationCommandType.ChatInput,
  run: async (hary, interaction) => {

    if (!interaction.member.permissions.has(harydc.PermissionFlagsBits.BanMembers)) {
      interaction.reply(`**<a:errado:1057749753133289554> | Você não possui poermissão para utilizar este comando.**`);
    } else {

      let embed = new harydc.EmbedBuilder()
        //.setTitle("[ Tabela de Preços Bennys Motor Work ]")
        .setColor("Red")
        //.setDescription("Cor dos Pipoco - **R$35000**\n\nRodas Nacionais - **R$6000**\n\nRodas Importadas - **R$8000**\n\nPintura de Rodas - **R$3000**\n\nSom de baixa potencia - **R$10000**\n\nSom de media potencia - **R$15000**\n\nSom de alta potencia - **R$20000**\n\n----------------------------------------------\n\n**Calibragem de rodas e suspensão**\n\nFolga do par dianteiro - **R$ 3000**\n\nÂngulo do par dianteiro - **R$ 3000**\n\nFolga do par traseiro - **R$ 3000**\n\nÂngulo do par traseiro - **R$ 3000**\n\nCalibragem suspensão -  **R$ 6000**\n\n----------------------------------------------\n\n**FRETE DE CARROS**\n\nCobrar **R$5%** do valor do veiculo\n\n----------------------------------------------\n\n**MAO DE OBRA**\n\nTunagem - **10%** do valor do servico\n\n----------------------------------------------\n\n**VALORES CONSERTOS**\n\nConserto simples - Valor **R$2000** do valor do veiculo na concessionaria\n\nConserto pesado (capotamento) - Valor **R$3000** do valor do veiculo na concessionaria\n\nReboque - R$**2000**\n\n----------------------------------------------\n\n**Observação**\n\nMáximo de 15% de desconto nos pagamentos, caso o cliente pergunte de desconto.\n\n----------------------------------------------\n\n`Venda de Kit's:`\nVenda de kit de reparo, carroceria e afins tratar com gerente ou dono.")
        .setDescription('> Para se verificar, coloque abaixo:\n\n> » Seu nome real:\n> » Sua idade real:\n> » Nome do seu personagem:')
        //.setThumbnail('https://media.discordapp.net/attachments/558441958771523596/1090686446681211033/Sem_Titulo-3.png?width=384&height=384')
        //.setFooter({ text: 'Adicione o bot em seu servidor clicando no botão abaixo' });

      let botao = new harydc.ActionRowBuilder().addComponents(
        new harydc.ButtonBuilder()
          .setLabel("Me-Convide")
          .setEmoji('📪')
          .setURL('https://discord.com/api/oauth2/authorize?client_id=1090454795833319496&permissions=8&scope=bot')
          .setStyle(harydc.ButtonStyle.Link)

      )

        interaction.reply({ content: `**<a:certo:819237719296442368> | Mensagem enviada com sucesso!**`, ephemeral: true })
      interaction.channel.send({ embeds: [embed] })
}
  }
}
*/