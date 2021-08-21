/*CMD
  command: TakeBalance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.deleteMessage({ message_id: request.message.message_id })
var giftmsg = Bot.getProperty("giftmsg")
var amount = Bot.getProperty("amount")
let balance = Libs.ResourcesLib.userRes("balance")
balance.add(+amount)
Bot.sendMessage(
  "*WOW🤗 , You Received " +
    amount +
    " BALANCE\n Message = " +
    giftmsg +
    "*"
)
