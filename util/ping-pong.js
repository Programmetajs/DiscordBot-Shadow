const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const { prefix, id, embed_default_color } = require("../src/config.json");
module.exports = (app) => {
  data: new SlashCommandBuilder()
  .setName("ping")
  .setDescription("WebSocket Ping Command."),
  async execute(interaction) {
    await interaction.reply(
      {
        content: `**${interaction.user.username}**#${interaction.user.discriminator}`,
        embeds: [
          new MessageEmbed()
          .setColor(embed_default_color)
          .setTitle(`${app.user.username} WebSocket Ping (/)`)
          .setDescription(`${app.user.username} current WebSocket Ping was \`${app.ws.ping}ms\``)
          .setTimestamp(Date.now())
        ],
        components: [
          new MessageActionRow()
          .addComponents(
            new MessageButton()
            .setStyle("SECONDARY")
            .setLabel(`Sent From: ${interaction.guild.name}`)
            .setCustomId("sent-from")
            .setDisabled(true)
          )
        ]
      }
    )
  }
}
