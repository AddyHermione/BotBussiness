/*CMD
  command: Reflink
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban*");
}else{
let reflink = Libs.ReferralLib.currentUser.getRefLink(""+bot.name+"","Bot")
Bot.sendMessage("*🔍 Your Refferal Link - \n"+reflink+"*")
}
