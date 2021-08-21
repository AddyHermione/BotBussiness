/*CMD
  command: main_menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user = User.getProperty("status");
if (user=="member" | user =="administrator" | user=="creator"){
var balance = Libs.ResourcesLib.userRes("balance");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");
Api.deleteMessage({
message_id : request.message.message_id
})
Bot.sendKeyboard("🆔 Account,\n👨‍💻REFERRAL,🎁 Daily Bonus,📤 Withdraw\n📊Statistics,💼 Set Address","*WELCOME TO OUR BOT🏠*")
}
if (user=="left"){
Bot.runCommand("/start");
}
