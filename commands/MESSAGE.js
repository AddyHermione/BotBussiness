/*CMD
  command: MESSAGE
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
 *🔥PLEASE SEND ANY MESSAGE AS YOU GIVE BALANCE TO THE USERS*
 
  ANSWER
  keyboard: 
  aliases: 
CMD*/

let giftmsg = 
Bot.setProperty("giftmsg",message, "string") 
Bot.getProperty("giftmsg") 
Bot.runCommand("ghdbalance")
