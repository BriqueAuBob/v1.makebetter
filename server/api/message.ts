import axios from 'axios';

export default defineEventHandler(async (event) => {
    const bot_token = 'OTgzMDk0NTI4NzkxNjgzMTgy.Gx_WPk.s6jYU2iQZmVE_zsblrNOc1mknpLVXj9N0QEpZM';
const query = getQuery(event)
const url = query.url
const elements = url.split("/")
const urlApi = ˋhttps://discord.com/api/v9/channels/${elements[5]}/messages/${elements[6]}`
    const { data } = await axios.get(urlApi, {
        headers: {
            Authorization: 'Bot ' + bot_token,
"Content-Type": "application/json"
        }
    });
    return {...data, ...data.author};
})
