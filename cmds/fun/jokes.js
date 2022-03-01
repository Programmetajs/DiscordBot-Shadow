// a simple node-fetch command in embed
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")
const fetch = require("node-fetch")
module.exports = {
  name: "jokes",
  run: async (app, m, args, prefix, id, embed_default_color) => {
    const { joke } = await fetch("https://some-random-api.ml/joke").then((response) => response.json());
    m.react("✅");
    m.author.send(
      {
        embeds: [
          new MessageEmbed()
          .setColor(embed_default_color)
          .setTitle("Funny Jokes!")
          .setDescription(joke)
          .setFooter(
            {
              text: `[ ${prefix}jokes | ${m.author.tag} ] `,
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
    })
  }
}
