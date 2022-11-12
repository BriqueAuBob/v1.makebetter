import axios from 'axios';

export default defineEventHandler(async (event) => {
    const bot_token = 'OTgzMDk0NTI4NzkxNjgzMTgy.Gx_WPk.s6jYU2iQZmVE_zsblrNOc1mknpLVXj9N0QEpZM';
const url = event.context.params.url
    const { data } = await axios.get(url, {
        headers: {
            Authorization: 'Bot ' + bot_token
        }
    });
    return {...data, ...data.author};
})
