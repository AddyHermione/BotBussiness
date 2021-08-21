/*CMD
  command: 💼 Set Address
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button = [{ title : "💼 Set Wallet" , command : "Wallet" }]
var wallet = User.getProperty("wallet")
Bot.sendInlineKeyboard(button, "*🕹 Account Settings ⚙\n\n🤴🏻 User = "+user.first_name+"\n🆔 User ID = "+user.telegramid+"\n💼 Wallet =* "+wallet+"\n\n*🚀If Your Account Wallet Is Undefined Set It By Click In Below Button🔻*")
