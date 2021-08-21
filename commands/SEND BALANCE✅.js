/*CMD
  command: SEND BALANCE✅
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: PLEASE SEND TELEGRAM ID WHICH YOU WANT TO SEND BALANCE AMOUNT✅✅✅
  keyboard: 
  aliases: 
CMD*/

if ((user.telegramid == "1741715659")) {
var msg = message;
User.setProperty("id", msg, "integer");
Bot.runCommand("MESSAGE");
}else{
  Bot.sendMessage("*YOU CAN'T DO THIS \nSORRY*")
}
