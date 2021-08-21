/*CMD
  command: /SendBot
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Bot Business Email To Send Bot !
  keyboard: 
  aliases: 
CMD*/

BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("Bot Send Successfully 😍")
