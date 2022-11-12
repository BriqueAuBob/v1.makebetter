import axios from "axios";
import { transformFileIntoBlob } from "./Blob";

/**
 * @param webhook
 * @returns object|boolean
 */
export const checkWebhookValidity = async (webhook: string) => {
  if (
    !webhook.match(/^(https:\/\/discord.com\/api\/webhooks\/\d{17,}\/.{10,})$/)
  )
    return false;
  try {
    const { data } = await axios.get(webhook);
    return data;
  } catch {
    return false;
  }
};

export const sendMessage = async (webhook: string, data: any) => {
  for (const message of data) {
    const form = new FormData();
    form.append(
      "payload_json",
      JSON.stringify({
        ...message,
        components:
          message.components[0].components.length !== 0 && message.components,
        embeds: message.embeds.map((embed) => ({
          ...embed,
          color: parseInt(embed.color.substr(1), 16),
        })),
      })
    );
    let i = 0;
    if (message.files) {
      for (const file of message.files) {
        form.append(`file${i}`, await transformFileIntoBlob(file), file.name);
        i++;
      }
    }
    await axios.post(webhook, form);
  }
};

export const fetchMessage = async (url: string) => {
  const { data } = await axios.get("/api/message?url=" + url);
  return data;
};
