const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
module.exports = {
  name: "ping", // the command name - remember this is a file template for making a new command
  run: async (app, m, args, prefix, id) => {
    m.reply(
      {
        content: "Content - Pong!"
      }
    ).then(() => {
      m.channel.send(
        embeds: [
          new MessageEmbed()
          .setColor("BLURPLE")
          .setDescription("Embed - Pong!")
        ]
      );
      setTimeout(() => {
        m.channel.send(
          embeds: [
            new MessageEmbed()
            .setColor("BLUE")
            .setDescription("Button Embed - Pong!")
          ],
          components: [
            new MessageActionRow()
            .addComponents(
              new MessageButton()
              .setStyle("SUCCESS")
              .setLabel("ws")
              .setDisabled(true)
            )
          ]
        )
      }, 1000);
    })
  }
}
