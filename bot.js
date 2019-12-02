var tmi = require("tmi.js")
var fs = require("fs");


var contents = fs.readFileSync("settings.json");
var jsonContent = JSON.parse(contents);
var channel = jsonContent.channel;
var numOfPushups = jsonContent.pushups;

var config = {
    options: {
        debug: true
    }, 
    connection: {
        cluster: "aws", 
        reconnect: true
    },
    // get yours at http://twitchapps.com/tmi
    identity: {
        username: jsonContent.username,
        password: jsonContent.clientkey
    },
    channels: [jsonContent.channel]
}

var client = new tmi.client(config)


client.connect();

client.on("connected", (address, port) => {
    client.action(channel, "The bot has connected on" + address + ":" + port)
})

client.on("message", (channel, user, message, self) => {
	if(self) return;
	if(message.toLowerCase() === "!pushups") {
        client.say(channel, jsonContent.pushups + " pushups left!");
    }

    if (user.mod || user.username == "mbcrump") {
        if(message.toLowerCase() === "!add") {
            numOfPushups = numOfPushups + 10;
            savePushups();
        }
        if(message.toLowerCase() === "!remove") {
            numOfPushups = numOfPushups - 10;
            savePushups();
        }
        if(message.toLowerCase() === "!reset") {
            numOfPushups = 0;
            savePushups();
        }
        function savePushups() {
            
            client.say(channel, numOfPushups + " pushups left!");
            jsonContent.pushups = numOfPushups
            fs.writeFileSync(("settings.json"), JSON.stringify(jsonContent));
         } 
    }
    
    if(message.toLowerCase() === "!mod") {

        client.say(channel, "RadRidley is the mod!");
	}
})