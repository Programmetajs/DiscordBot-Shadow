// ping-pong command in embed command
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
module.exports = {
  name: "ping", // the command name - remember this is a file template for making a new command
  run: async (app, m, args, prefix, id) => {
    m.author.send(
      {
        embeds: [
          new MessageEmbed()
          .setColor("BLURPLE")
          .setDescription(":tada:Pong!")
          .setFooter(
            {
              text: `[ ${prefix}ping | ${m.author.tag} ] `,
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
