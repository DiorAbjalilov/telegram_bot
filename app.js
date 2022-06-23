import TelegramBot from "node-telegram-bot-api";
import { Controllers } from "./controller";

const TOKEN = `5523467167:AAFrkRYo0ypDutwhw-Limcor-udbJvt9_so`;
const chatId = 945592057;
// (async () => {
//   let response = await fetch(`https://api.telegram.org/bot${TOKEN}/getUpdates`);
//   response = await response.json();
//   console.log(response.result[0].message.chat);
// })();
// (async () => {
//   let response = await fetch(
//     `https://api.telegram.org/bot${TOKEN}/sendMessage`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         chat_id: chatId,
//         // text: "salom",
//         reply_markup: {
//           resize_keyboard: true,
//           keyboard: [
//             [
//               {
//                 text: "1-knopka",
//                 request_contact: true,
//               },
//             ],
//           ],
//         },
//       }),
//     }
//   );
//   response = await response.json();
//   console.log(response);
// })();

const option = {
  polling: true,
};
const bot = new TelegramBot(TOKEN, option);
bot.on("text", Controllers);
