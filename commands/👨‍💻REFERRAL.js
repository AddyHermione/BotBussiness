/*CMD
  command: 👨‍💻REFERRAL
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get()
var button = [
  [{ text: "🔍 My Refferal Link", callback_data: "Reflink" }],
  [
    { text: "🎓Top Refferal", callback_data: "🎖Top Referals" },
    { text: "📑Detailed Report📑", callback_data: "🏅 Refferal Detail" }
  ]
]
Api.sendPhoto({
  photo: "https://t.me/GINIBASH_HACKS_ID/6990",
  caption:
    "*🏡 Welcome To Refer And Earn\n\n🎙Per Referral - 2 POINTS\n🔥MINIUM WITHDRAW : 10 POINTS\n10 POINTS = 1 NETFLIX ACCOUNT 🤩🤩🤩\n\n🔥 Total Invites : " +
    refList.length +
    " Users*",
  reply_markup: { inline_keyboard: button }, 
parse_mode: "Markdown"})
