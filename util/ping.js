const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
  data: new SlashCommandBuilder()
  .setName("ping")
  .setDescription("WebSocket Ping Command."),
  async execute(interaction) {}
}
