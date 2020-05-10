// BY IFROST

const Discord = require('discord.js')
const bot = new Discord.Client()
const prefix = 'hypesquad '
const hypesquad = require('hypesquad-changer')
const token = 'NzA0NzEzMjI2MjQ3NzMzMzYw.XqhKJQ.qrRcAmAxI6L0G56DgM0_g4UrOts'
const color = require('cli-color')

bot.on('ready', async () => {
    console.log(color.magentaBright(`
    
██╗░░██╗██╗░░░██╗██████╗░███████╗░██████╗░██████╗░██╗░░░██╗░█████╗░██████╗░
██║░░██║╚██╗░██╔╝██╔══██╗██╔════╝██╔════╝██╔═══██╗██║░░░██║██╔══██╗██╔══██╗
███████║░╚████╔╝░██████╔╝█████╗░░╚█████╗░██║██╗██║██║░░░██║███████║██║░░██║
██╔══██║░░╚██╔╝░░██╔═══╝░██╔══╝░░░╚═══██╗╚██████╔╝██║░░░██║██╔══██║██║░░██║
██║░░██║░░░██║░░░██║░░░░░███████╗██████╔╝░╚═██╔═╝░╚██████╔╝██║░░██║██████╔╝
╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░░░░╚══════╝╚═════╝░░░░╚═╝░░░░╚═════╝░╚═╝░░╚═╝╚═════╝░

░█████╗░██╗░░██╗░█████╗░███╗░░██╗░██████╗░███████╗██████╗░
██╔══██╗██║░░██║██╔══██╗████╗░██║██╔════╝░██╔════╝██╔══██╗
██║░░╚═╝███████║███████║██╔██╗██║██║░░██╗░█████╗░░██████╔╝
██║░░██╗██╔══██║██╔══██║██║╚████║██║░░╚██╗██╔══╝░░██╔══██╗
╚█████╔╝██║░░██║██║░░██║██║░╚███║╚██████╔╝███████╗██║░░██║
░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░╚══════╝╚═╝░░╚═╝
`))
console.log('')
console.log(color.blueBright('Logged in as ' + bot.user.tag))
})


exports.changer = function(house, token) {
    const request = require("request")
    var RandomSquad = [1,2,3]
    request({method: "POST",
    url: "https://discordapp.com/api/v6/hypesquad/online",
    body: { "house_id": house == "Bravery" ? 1 : house == "Brilliance" ? 2 : house == "Balance" ? 3 : house == "Random" ? RandomSquad[Math.floor(Math.random() * RandomSquad.length)] : undefined },
    json: true,
    headers: { "Authorization": token }})

}

bot.on('message', async m => {

    let args = m.content.substring(prefix.length).split(" ");


    if (m.content === prefix + 'bravery'){
        m.delete()
        m.channel.send('Successfully changed your hypesquad house to bravery!') .then(m => {
            m.delete()
        }, 4500)
        console.log(hypesquad.changer("Bravery", token))
        console.log(color.greenBright("Your house has been changed to bravery!"))
    }

    if (m.content === prefix + 'balance'){
        m.delete()
        m.channel.send('Successfully changed your hypesquad house to balance!') .then(m => {
            m.delete()
        }, 4500)
        console.log(hypesquad.changer("Balance", token))
        console.log(color.magentaBright("Your house has been changed to balance!"))
    }

    if (m.content === prefix + 'brilliance'){
        m.delete()
        m.channel.send('Successfully changed your hypesquad house to brilliance!') .then(m => {
            m.delete()
        }, 4500)
        console.log(hypesquad.changer("Brilliance", token))
        console.log(color.redBright("Your house has been changed to brilliance!"))
    }

    if (m.content === prefix + 'random'){
        m.delete()
        m.channel.send('Successfully randomized your hypesquad house!') .then(m => {
            m.delete()
        }, 4500)
        console.log(hypesquad.changer("Random", token))
        console.log(color.yellowBright("Your house has been randomized!"))
    }
})

bot.login(token)