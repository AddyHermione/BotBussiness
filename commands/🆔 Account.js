/*CMD
  command: ๐ Account
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
Bot.sendMessage("*๐ง๐ปโ๐ป User = "+user.first_name+"\n\n๐ฐ Balance = "+balance.value().toFixed(2)+" POINTS\n\nโ๏ธRefer And Earn More !*")
