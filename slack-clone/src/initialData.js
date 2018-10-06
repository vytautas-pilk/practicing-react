let channelMessages = {
  "general": [
    {
      channel: "general",
      user: "Dracula",
      time: new Date("2018-09-30 08:11").toLocaleString('lt-LT', {timeZone: 'Europe/Vilnius'}),
      message: "I am Dracula!"
    },
    {
      channel: "general",
      user: "Harry Potter",
      time: new Date("2018-09-30 08:12").toLocaleString('lt-LT', {timeZone: 'Europe/Vilnius'}),
      message: "Oh, hi, Dracula. I'm obviously Harry Potter :)"
    }, 
    {
      channel: "general",
      user: "Dracula",
      time: new Date("2018-09-30 08:15").toLocaleString('lt-LT', {timeZone: 'Europe/Vilnius'}),
      message: "It is nice to meet you!"
    },
    {
      channel: "general",
      user: "Harry Potter",
      time: new Date("2018-09-30 08:16").toLocaleString('lt-LT', {timeZone: 'Europe/Vilnius'}),
      message: "Yes, you too. Sorry, I have to go to my Charms class. See you later."
    },
    {
      channel: "general",
      user: "Dracula",
      time: new Date("2018-09-30 14:41").toLocaleString('lt-LT', {timeZone: 'Europe/Vilnius'}),
      message: "See you tomorrow!"
    },
  ],
  "help": [
    {
      channel: "help",
      user: "Gandalf",
      time: new Date("2018-09-30 07:01").toLocaleString('lt-LT', {timeZone: 'Europe/Vilnius'}),
      message: "Help, please..."
    },
  ],
  "react": [
    {
      channel: "react",
      user: "Luke Skywalker",
      time: new Date("2018-09-30 09:58").toLocaleString('lt-LT', {timeZone: 'Europe/Vilnius'}),
      message: "React is soooo interesting!"
    },
    {
      channel: "react",
      user: "Harry Potter",
      time: new Date("2018-09-30 10:00").toLocaleString('lt-LT', {timeZone: 'Europe/Vilnius'}),
      message: "Agree"
    },
  ],
  "dark arts": [
    {
      channel: "dark arts",
      user: "Harry Potter",
      time: new Date("2018-09-30 08:11").toLocaleString('lt-LT', {timeZone: 'Europe/Vilnius'}),
      message: "I don't know anything about this thing"
    },
    {
      channel: "dark arts",
      user: "Lord Voldemort",
      time: new Date("2018-09-30 08:13").toLocaleString('lt-LT', {timeZone: 'Europe/Vilnius'}),
      message: "Wait 'til you learn it, buddy."
    }
  ],
  "flying": [],
  "traveling": [
    {
      channel: "traveling",
      user: "Dracula",
      time: new Date("2018-09-30 08:11").toLocaleString('lt-LT', {timeZone: 'Europe/Vilnius'}),
      message: "I just came back from my cave"
    }
  ]
}

let users = ["Dracula", "Harry Potter", "Gandalf", "Luke Skywalker", "Lord Voldemort"];

export { users, channelMessages };