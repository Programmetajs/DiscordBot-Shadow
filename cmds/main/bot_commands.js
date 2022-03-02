// a simple bot command list
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
module.exports = {
  name: "commands",
  run: async (app, m, args, prefix, id, embed_default_color) => {
    m.react("✅");
    m.author.send(
      {
        embeds: [
          new MessageEmbed()
          .setColor(embed_default_color)
          .setTitle(`${app.user.username} commands list!`)
          .setDescription(`__**Main Commands:**__\n> \`${prefix}ping\`\n\`${prefix}ws\`\n\`${prefix}commands\`\n\n__**Fun Command:**__\n> \`${prefix}jokes\`\n\n__**Slash (/) Command:**__\n> \`/ping\``)
          .setFooter(
            {
              text: `[ ${prefix}commands | ${m.author.tag} ] `,
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
            .setCustomId("sent-from")
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
    });
  }
}
