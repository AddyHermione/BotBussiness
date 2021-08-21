/*CMD
  command: GHD
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "")

var total = 
Libs.ResourcesLib.userRes("totalwithdraw")
total.add(+message)

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
userPayment.add(+message)
  var user_link = Libs.commonLib.getLinkFor(user)
  var withdrawn = Bot.getProperty("totalWithdrawn")
  withdrawn = parseFloat(withdrawn)
  var lib = Libs.ReferralLib
  var refList = lib.currentUser.refList.get()
  var wallet = User.getProperty("wallet")
  var userPayment = Libs.ResourcesLib.anotherChatRes("totalPayment", "global")
  userPayment.add(+message)
  var balance = Libs.ResourcesLib.userRes("balance")
  if (isNaN(message)) {
    
  } else {
  }
  if (message < 10) {
    Bot.sendMessage("_❌ Minimum Withdraw 10 POINTS_")
  } else {
    if (message > balance.value()) {
      Bot.sendMessage(
        "_❌ Maximum Withdraw " + balance.value().toFixed(1) + " PHTG_"
      )
    } else {
      Bot.sendMessage(
       "*YOUR WITHDRAW DETAILS HAS SUMMITED TO OUR PAYMENT CHANNEL 🔥\nYOUR PAYMENT CHANNEL : @HermionePayMents\nYOU WILL GET PAYMENT WITHIN 5 MINUTES...*")
      balance.add(-message)
      Api.sendMessage({
        chat_id: "@HermionePayMents",
        text:
          "*✅ New Successful Withdraw !!\n\n▪️ Amount - " +
          message +
          " POINTS\n▪️ User - * " +
          user_link +
          "*\n▪️ User Referrals = " +
          refList.length +
          "\n▪️ ADDRESS =\n " +
          wallet +
          "\n\n▪️ Bot Link - @" +
          bot.name +
          "\n\nIF YOU DO FAKE REFER\nYOU WILL NOT GET PAYMENT*",
        parse_mode: "Markdown"
     })
    }
  }
}
Bot.runCommand("reflist")
