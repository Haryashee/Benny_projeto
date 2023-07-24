//----------------------------------------------DEPENDENCIAS-----------------------------------------
require('dotenv').config();
const harycfg = require('./config.json');
const harydc = require('discord.js');
const moment = require("moment");
const { ChannelType } = require('discord.js');
const { adminChannelId } = require('./config.json');
const discordTranscripts = require('discord-html-transcripts');

const hary = new harydc.Client({
	intents: [
		harydc.GatewayIntentBits.DirectMessages,
		harydc.GatewayIntentBits.Guilds,
		harydc.GatewayIntentBits.GuildBans,
		harydc.GatewayIntentBits.GuildMessages,
		harydc.GatewayIntentBits.MessageContent,
		harydc.GatewayIntentBits.GuildMembers,
	],
	partials: [harydc.Partials.Channel],
});
//----------------------------------------------DEPENDENCIA------------------------------------------
//--------------------------------------------------DM-----------------------------------------------
hary.on("messageCreate", (message) => {
	if (message.author.bot) return; {
		if (message.channel.type === ChannelType.DM) {
			const dmMessage = new harydc.EmbedBuilder()
				.setDescription(`🔔 **Olá, tudo bem?**\n*Infelizmente não fui configurado para responder as pessoas no privado!*\n\n*Atenciosamente,*\nEquipe **BENNYS!**`)
				.setColor('Red')
				.setFooter({ text: `Desenvolvido por: haryashee_` });

			message.reply({ embeds: [dmMessage] });
		}
	}
});
//--------------------------------------------------DM-----------------------------------------------
//-------------------------------------------------MSGDEL--------------------------------------------
hary.on("messageDelete", async (message) => {

	let haryDellogs = "1092147699815555073"

	if (message.author.bot) return;

	let user = message.author;
	let channel = message.channel;
	let haryDel = message.content;

	let embed = new harydc.EmbedBuilder()
		.setTitle(`🗑 Nova mensagem deletada`)
		.setColor("Red")
		.addFields(
			{
				name: `Autor da mensagem:`,
				value: `${user}`,
				inline: false,
			},

		)
		.addFields(
			{
				name: `Deletada no canal:`,
				value: `${channel}`,
				inline: false,
			},
		)
		.addFields(
			{
				name: `Mensagem deletada:`,
				value: `\`\`\`${haryDel}\`\`\``,
				inline: false,
			}
		)
		.setTimestamp()
		.setThumbnail(message.author.displayAvatarURL({ dynamic: true }));

	try {

		message.guild.channels.cache.get(haryDellogs).send({ embeds: [embed] })

	} catch (e) { }
});
//-------------------------------------------------MSGDEL--------------------------------------------
//------------------------------------------------MSGEDIT--------------------------------------------
hary.on("messageUpdate", async (message, newMessage) => {

	let haryEditlogs = "1092147699815555073"

	if (message.author.bot) return;

	let user = message.author;
	let channel = message.channel;
	let haryAntiga = message.content;
	let haryNew = newMessage.content;

	let embed = new harydc.EmbedBuilder()
		.setTitle(`📝 Mensagem editada`)
		.setColor("Red")
		.addFields(
			{
				name: `Autor da mensagem:`,
				value: `${user}`,
				inline: false,
			},

		)
		.addFields(
			{
				name: `Editada no canal:`,
				value: `${channel}`,
				inline: false,
			},
		)
		.addFields(
			{
				name: `Mensagem antes de editar:`,
				value: `\`\`\`${haryAntiga}\`\`\``,
				inline: false,
			}
		)
		.addFields(
			{
				name: `Mensagem editada:`,
				value: `\`\`\`${haryNew}\`\`\``,
				inline: false,
			},
		)
		.setTimestamp()
		.setThumbnail(message.author.displayAvatarURL({ dynamic: true }));

	try {

		message.guild.channels.cache.get(haryEditlogs).send({ embeds: [embed] })

	} catch (e) { }
});
//------------------------------------------------MSGEDIT--------------------------------------------
//------------------------------------------------WELCOME--------------------------------------------
hary.on("guildMemberAdd", (member) => {
	let canal_logs = "1092148500134887464";
	if (!canal_logs) return;

	let embed = new harydc.EmbedBuilder()
		.setColor("Red")
		.setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
		.setTitle("✈️ | Boas Vindas!")
		.setDescription(`Olá ${member}, você acabou de pousar na **BENNYS**!`)
		.setImage('https://cdn.discordapp.com/attachments/763483235962585098/1092143288246620170/1636785409_Como-obter-veiculos-personalizados-de-Benny-no-GTA-5.png')
		.setFooter({ text: `Atualmente estamos com ${member.guild.memberCount} pessoas no discord.` });

	member.guild.channels.cache.get(canal_logs).send({ embeds: [embed] })
});
//------------------------------------------------WELCOME--------------------------------------------
//-------------------------------------------------LEAVE---------------------------------------------
hary.on("guildMemberRemove", (member) => {
	let canal_logs = "1092147858821619863";
	if (!canal_logs) return;

	let embed = new harydc.EmbedBuilder()
		.setColor("#FF0000")
		.setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
		.setTitle(`🛩 - Bye Bye!`)
		.setDescription(`${member} acabou de sair da mecanica **BENNYS**.`)
		.setFooter({ text: `Atualmente estamos com ${member.guild.memberCount} pessoas no discord.` });

	member.guild.channels.cache.get(canal_logs).send({ embeds: [embed] })
});
//-------------------------------------------------LEAVE---------------------------------------------
//------------------------------------------------COMMANDS-------------------------------------------
hary.slashCommands = new harydc.Collection()
require('./handler')(hary)

hary.on('interactionCreate', (interaction) => {

	if (interaction.type === harydc.InteractionType.ApplicationCommand) {

		const cmd = hary.slashCommands.get(interaction.commandName);

		if (!cmd) return interaction.reply(`Error`);

		interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);

		cmd.run(hary, interaction)

	}
});
//------------------------------------------------COMMANDS-------------------------------------------
//-------------------------------------------------STATUS--------------------------------------------
hary.on("ready", () => {
	console.log('🤖 | O ' + hary.user.username + ' Foi iniciado com sucesso\n🤖 | Framework: hary\n🤖 | Id do bot: [ ' + hary.user.id + ' ]\n🤖 | Desenvolvido totalmente por: haryashee_');

	const activities = [
		{ name: `a melhor mecanica 👀`, type: 3 },
		{ name: `todos os clientes 🤖`, type: 2 }
	];

	const status = [
		'online'
	];

	let i = 0;
	setInterval(() => {
		if (i >= activities.length) i = 0
		hary.user.setActivity(activities[i])
		i++;
	}, 15 * 1000);

	let s = 0;
});
//-----------------------------------------------ANTI-CRASH------------------------------------------
process.on('uncaughtException', async (error, origin) => {
	console.log(`\n❗ Novo erro\n\n${error}\n[${origin}]`)
});

process.on('unhandRejection', async (reason, promise) => {
	console.log(`\n❗ Novo erro\n\n${reason}\n[${promise}]`)
});
//-----------------------------------------------ANTI-CRASH------------------------------------------
//-------------------------------------------------TOKEN---------------------------------------------
hary.login(harycfg.harytkn);
//-------------------------------------------------TOKEN---------------------------------------------
