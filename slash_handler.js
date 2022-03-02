const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require("fs");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9'); // objects for registering slash commands
const ch = require("chalk");  // console  color :D
module.exports = (app) => {
  const files = fs.readdirSync('./util').filter(file => file.endsWith('.js')); // folder of your slash (/) commands
  const stores = []; // this is where we are going to store all the slash (/) data/s
  for (var i of files) {
      const util = require(`./util/${i}`);
      stores.push(util.data.toJSON());
      app.commands.set(util.data.name, util);
  } // slash handler
  const rest = new REST({version: '9'}).setToken(process.env["token"]); // registering the slash (/) commands to your app/bot
  app.on('interactionCreate', async (interaction) => {
      if (!interaction.isCommand()) return;
      const cmd_name = app.commands.get(interaction.commandName);
      if (!cmd_name) return;
      try {
          await cmd_name.execute(interaction);
      } catch {
          await interaction.reply(
            {
              embeds: [
                new MessageEmbed()
                .setColor("RED")
                .setDescription("Failed to execute the application :(")
              ],
              ephemeral: true
            }
          );
      }
  });
  try {
    const { prefix, id, embed_default_color } = require("./src/config.json");
    app.on("ready", async (r) => {
      (async () => {
        try {
            console.log(ch.redBright("> Regestering Slash (/) commands."))

            await rest.put(
              Routes.applicationCommands(id),
              { body: stores },
             );

            console.log(ch.greenBright("> Successfully Slash (/) commands."))
            console.log(ch.greenBright(ch.bold(`> Registered (${app.commands.size})`) + ` commands in the bot`))
        } catch (err) {
            if (err) console.loh(ch.redBright(err));
        }
      })();
    })
  } catch (err) {
    if (err) return;
  }
}
