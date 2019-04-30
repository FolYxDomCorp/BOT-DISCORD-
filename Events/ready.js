module.exports = async(client) => {

    client.user.setPresence({
        game:{
            name: `Faite !aide pour avoir des infos !`
        }
    });
};