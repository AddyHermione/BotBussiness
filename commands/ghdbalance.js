/*CMD
  command: ghdbalance
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *⭐HOW MUCH YOU WANT TO SEND IN HIS BALANCE* 

  keyboard: 
  aliases: 
CMD*/

var tgid = User.getProperty("id")
let amount = 
Bot.setProperty("amount",message, "string") 
Bot.getProperty("amount") 
;Bot.sendMessage("*YOUR BALANCE HAS BEEN SENDED SUCCESSFULLY* \n👤 User: "+tgid+"\n💰 Amount:"+message);
var button = [{title : "CLAIM ✔️",command : "TakeBalance"}]
Bot.sendInlineKeyboardToChatWithId(tgid,button,"*🔥 You Have Been Received A Suprise From @"+user.username+" Claim It*")
