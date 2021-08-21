/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var button = [{ title: "✅ JOINED", command: "✅ check" }]
Bot.sendInlineKeyboard(
  button,
  "*👋🏻 Hello "+user.first_name+" Welcome To Our Bot Subscribe Our Channels To Start It And Earn Unlimited Money With This Bot *\n\n[🌷JOIN OFFICIAL CHANNEL](https://t.me/HermioneSellingZz)\n\n[🌺JOIN BEST OFFICIAL CHANNEL](https://t.me/HermioneNetWork)\n\n[😍JOIN PAYMENT CHANNEL](https://t.me/HermionePayMents)*\n▫️ Join Our All Channel Before Starting The Bot.......*",
  { disable_web_page_preview: true }
)

var user_link = Libs.commonLib.getLinkFor(user)

function hello(message) {
  var greetings = ""

  Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
  Bot.sendMessage("*❌You're Trying To Invite You're Self *")
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
  hello("")
  var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
  balance.add(2)
  Bot.sendMessageToChatWithId(
    refUser.chatId,
    "*💥 YOUR NEW REFERRAL IS SUCCESSFUL,GOT 2 POINTS🥰🥰🥰\nREFERAL USERS - *" +
      "[" +
      user.telegramid +
      "]" +
      "(" +
      "tg://user?id=" +
      user.telegramid +
      ")" +
      "*\nREFER MORE ❤️❤️❤️*"
  )
}

function doAlreadyAttracted() {
  Bot.sendMessage("*You Already Started The Bot ❌*")
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions)
var status = Libs.ResourcesLib.anotherChatRes("status", "global")
status.add(1)
var welco = User.getProperty("welco")
if (welco == undefined) {
  var user_link =
    "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  status.add(1)
  Bot.sendMessageToChatWithId(
    1741715659,
    "*👨🏻‍✈️New User🆕*\n\n*🤴🏻User = " +
      user.first_name +
      "\n\n👮🏻‍♂Username =* " +
      user_link +
      " \n\n*💳User Id =* " +
      user.telegramid +
      ""
  )
}
User.setProperty("welco", user.telegramid, "text")
