/*CMD
  command: Wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send You Tronlink Pro Address
  keyboard: 
  aliases: 
CMD*/

var wallet = User.getProperty("wallet")
var wallet = User.setProperty("wallet", message, "string")
Bot.sendMessage("*🔥YOUR ADDRESS SET TO "+message+"*")
