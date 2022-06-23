import fetch from "node-fetch";

const chatId = 945592057;
const TOKEN = `5523467167:AAFrkRYo0ypDutwhw-Limcor-udbJvt9_so`;
// (async () => {
//   let response = await fetch(`https://api.telegram.org/bot${TOKEN}/getUpdates`);
//   response = await response.json();
//   console.log(response.result[0].message.chat);
// })();
(async () => {
  let response = await fetch(
    `https://api.telegram.org/bot${TOKEN}/sendChatAction`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        action: "upload_photo",
      }),
    }
  );
  response = await response.json();
  console.log(response);
})();
