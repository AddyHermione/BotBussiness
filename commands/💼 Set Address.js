/*CMD
  command: ๐ผ Set Address
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button = [{ title : "๐ผ Set Wallet" , command : "Wallet" }]
var wallet = User.getProperty("wallet")
Bot.sendInlineKeyboard(button, "*๐น Account Settings โ\n\n๐คด๐ป User = "+user.first_name+"\n๐ User ID = "+user.telegramid+"\n๐ผ Wallet =* "+wallet+"\n\n*๐If Your Account Wallet Is Undefined Set It By Click In Below Button๐ป*")
