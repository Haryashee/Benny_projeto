const fs = require("fs")
const patch = require ("node:patch")

const cammandsPach = Peth.join(__dirname, "commands")
constcommandsFile = fs.readdirSync(cammandsPach).filter(file => file.endsWith(".js"))

for (const File of commandFiles){
    const  FilePatch = patch.join(commandPatch, file)
    if ("data" in  comnmand && "execute" in command){

      
    }
}


module.exports = async (hary) => {

  const SlashsArray = []

  fs.readdir(`./Comandos`, (error, folder) => {
    folder.forEach(subfolder => {
      fs.readdir(`./Comandos/${subfolder}/`, (error, files) => {
        files.forEach(files => {

          if (!files?.endsWith('.js')) return;
          files = require(`../Comandos/${subfolder}/${files}`);
          if (!files?.name) return;
          hary.slashCommands.set(files?.name, files);

          SlashsArray.push(files)
        });
      });
    });
  });
  jrm.on("ready", async () => {
    await hary.application.commands.set(SlashsArray)
  });
};