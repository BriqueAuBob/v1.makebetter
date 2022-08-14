import axios from 'axios';

export default defineEventHandler(async (event) => {
    const bot_token = 'OTgzMDk0NTI4NzkxNjgzMTgy.Gx_WPk.s6jYU2iQZmVE_zsblrNOc1mknpLVXj9N0QEpZM';
    const guild_id = event.context.params.id;
    const role_id = event.context.params.role;
    const body = await useBody(event);

    try {
        const { data } = await axios.patch(`https://discord.com/api/v8/guilds/${guild_id}/roles/${role_id}`, {
            icon: body.icon,
        }, {
            headers: {
                Authorization: `Bot ${bot_token}`,
            }
        });
        
        return data
    } catch (error) {
        return error.response.data
    }
})