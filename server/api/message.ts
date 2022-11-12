import axios from 'axios';

export default defineEventHandler(async () => {
    const bot_token = 'OTgzMDk0NTI4NzkxNjgzMTgy.Gx_WPk.s6jYU2iQZmVE_zsblrNOc1mknpLVXj9N0QEpZM';

    const { data } = await axios.get('https://discord.com/api/v8/channels/802261784110694470/messages/971179872389054514', {
        headers: {
            Authorization: 'Bot ' + bot_token
        }
    });
    return {...data, ...data.author};
})
