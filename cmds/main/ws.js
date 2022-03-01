// WebSocket Ping or speed in embed command.
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
module.exports = {
  name: "ws",
  run: async (app, m, args, prefix, id, embed_default_color) => {
    m.react("✅");
    m.author.send(
      {
        embeds: [
          new MessageEmbed()
          .setColor(embed_default_color)
          .setTitle(`${app.user.username} WebSocket Ping!`)
          .setDescription(`My Current WebSocket Ping is \`${app.ws.ping}ms\``)
          .setFooter(
            {
              text: `[ ${prefix}ws | ${m.author.tag} ] `,
              iconURL: app.user.avatarURL()
            }
          )
          .setTimestamp(Date.now())
        ],
        components: [
          new MessageActionRow()
          .addComponents(
            new MessageButton()
            .setStyle("SECONDARY")
            .setLabel(`Sent From: ${m.guild.name}`)
            .setCustomId("send-from")
            .setDisabled(true)
          )
        ]
      }
    ).catch(() => {
      m.reply(
        {
          content: ":herb:Please Open your DMs to execute this command!"
        }
      )
    })
  }
}
