const Discord = require('discord.js')
const client = new Discord.Client()
const TOKEN = process.env.TOKEN
const PREFIX = '!'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`)
})

client.on('message', (msg) => {
  if (msg.content[0] === PREFIX) {
    const command = msg.content.slice(1)

    // TODO organize this better?
    // move functions to a seperate file

    switch (command) {
      case 'cso':
        msg.reply('The TAMS Computer Science Organization (CSO for short) is a club dedicated to introducing the wonders of computer science to both novices and experts alike! We host a wide range of activities and cover many different topics from cybersecurity to videogames. If you want more info, then ask an exec or check out our website here: cso.tams.club')
        break

      case 'execs':
        msg.reply(`\`\`\`Ben Wnag - President
Pranoy Dutta - Treasurer
Jeongwoo Choi - Volunteering Coordinator
Micheal Zhao - Secretary
Anthony Zhou - Competitions Director
\`\`\``)
        break

      case 'schedule':
        msg.reply('Check out: https://tams.unt.edu/academics/courseschedule/computer-scienceengineering')
        break
      case 'classes':
        msg.reply('Some classes might not show up in your VSB and that’s okay! Try to look at the room your classes will be in and that’ll tell you everything! If the room is REMOTE then you’ll have lectures and tests over zoom. INET is a fully internet course and there are no designated times. These courses will not show up on your blocky schedule. If it says PARTIAL or something else, then it’s in person.')
        break
      case 'hacktams':
        msg.reply('hackTAMS is a biannual hackathon hosted by us! We host these events in order to introduce hackathons to the TAMS community in addition to providing yet another opportunity for students to try something new.')
        break
      case '':
        break
    }
  }
})

client.login(TOKEN)
