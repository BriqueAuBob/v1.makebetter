import { defineEventHandler } from 'h3';
import axios from 'axios';

const message = defineEventHandler(async () => {
  const bot_token = "NzgxOTAxMDQ0OTQxNTg2NDMy.X8EYGA.sa2mE3c76YzlgG_RUgx9C8j9ZlA";
  const { data } = await axios.get("https://discord.com/api/v8/channels/802261784110694470/messages/971179872389054514", {
    headers: {
      Authorization: "Bot " + bot_token
    }
  });
  return { ...data, ...data.author };
});

export { message as default };
//# sourceMappingURL=message.mjs.map
