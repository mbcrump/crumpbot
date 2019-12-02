
## Crumpbot for Twitch

What is it? It is a simple bot to use in your Twitch chat to track pushups! Your viewers can always see how much pushups that you have left to do on stream and your moderator can add/remove/reset pushups to the queue. 

![](/chatbot-demo.gif)

### Instructions

1. Run `git clone https://github.com/mbcrump/crumpbot.git` on your local machine and change directories into it.
2. Create your own [Twitch account](https://twitch.tv/signup) if you don't already have one.
3. Use Incognito mode or log out of your primary account to create an [account](https://twitch.tv/signup) for your bot.
4. Stay logged in to the bot account and continue to the next step.
5. Visit [TwitchApps/TMI](https://twitchapps.com/tmi/) to generate your oauth token
6. Create a `settings.json` file add the following information:

```json
{
    "clientkey":"oauth:yourkey",
    "channel":"yourchannel",
    "username":"yourbotusername",
    "pushups":0
}
```
7. Run `node bot.js` and after a moment or so you should see your bot join the chatroom.
8. You can now type:
* `!pushups` to see the number of pushups left to do
* `!add` to add 10 pushups
* `!remove` to remove 10 pushups
* `!reset` to reset back to 0 pushups