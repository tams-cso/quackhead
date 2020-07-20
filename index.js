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
    // move text to a seperate file

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
      case 'english':
        msg.reply(`
English: All TAMS Professors readily give out A’s and the only difference between professors is teaching style.
\`\`\`Markdown
**Schoolfield** -- Teaches similarly to a high school English teacher. Grades on participation and essays.

**Ibarra** -- Is known for releasing class early in addition to being really chill. Grades on discussion questions and essays.

**Christian** -- A combination of Schoolfield and Ibarra (more structured but still can get off-topic). Grades based on a “grading contract” which makes every assignment a completion grade (essentially).

**Steele** --Grades are mainly based on essays BUT you get infinite resubmissions in addition to great feedback. If you’re good at writing then this is the professor for you. She also gives a lot of extra credit and boosts :))\`\`\``)
        break
      case 'math':
        msg.reply(`
Math:
\`\`\`Markdown
# Precal Professors
**Iaia** -- Makes the first test super hard and has a math project.
**Brosovik** -- Gives lots of extra credit and is like a normal highschool math teacher
**Naresh** -- Gives out notes for chapters and is really chill
# Cal 1 Professors
**Mann** --The best math professor NA. Very clear both in and out of class and has some of the most memorable lectures (Ants). Gives lots of points for showing work but doesn’t give out lots of extra credit.
**Cherry** -- A new math professor. The only thing I know about him is that he taught high level math classes and so probably has high expectations for TAMS students.
# Cal 2 Professors
**Dulock** --I dunno bro\`\`\``)
        break
      case 'chem':
        msg.reply('')
        break
    }
  }
})

client.login(TOKEN)
