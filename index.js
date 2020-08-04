const Discord = require("discord.js");
const bot = new Discord.Client()
const prefix = "c!";

const player = "<:head:739022533918982174>"
const bodyH = "<:bodyH:739022604462981150>"
const bodyV = "<:bodyV:739022629415026810>"
var wallH = "<:wallH:739022697228402699>"
var wallV = "<:wallV:739022724113891409>"
var wallC = "<:wallC:739022656837517324>"
var BG = "<:BG:739022772457570355>"
var wall = "<:wall:739023283353288716>"

var mbsg

var games = {}

//levels

var levels = {
1:"wc wh wh wh wc w R wv bg bg bg wc wc R wv bg bg bg bg wv R wc wc bg P bg wv R w wv bg bg bg wv R w wc wh wh wh wc #0", 
2:"wc wh wh wh wh wc R wv bg bg bg bg wv R wv bg bg P bg wv R wv bg w w bg wv R wv bg bg bg bg wv R wc wh wh wh wh wc #0", 
3:"wc wh wh wh wh wc R wv bg bg bg bg wv R wc wc bg P bg wv R w wv bg bg bg wv R w wc wc bg bg wv R w w wc wh wh wc #0", 
4:"w w w wc wh wh wc R w wc wh wc bg bg wv R wc wc bg bg bg bg wv R wv P bg w w bg wv R wv bg bg w w bg wv R wc wc bg bg bg bg wv R w wc wh wh wh wh wc #0", 
5:"w w w wc wh wh wc R w w w wv bg bg wv R wc wh wh wc bg w wc R wv bg bg bg bg bg wv R wv bg P bg w bg wv R wv bg bg bg bg bg wv R wc wh wh wh wh wh wc #0", 

6:"w w wc wh wh wh wc R wc wh wc bg bg bg wv R wv bg bg bg bg bg wv R wv bg w w bg P wv R wv bg w w bg bg wv R wv bg bg bg bg bg wv R wc wh wh wh wh wh wc #1", 
7:"wc wh wh wh wc w w R wv bg bg bg wc wc w R wv bg w bg bg wc wc R wv bg P bg bg bg wv R wv bg bg bg w bg wv R wv bg bg bg bg bg wv R wc wh wh wh wh wh wc #1", 
8:"w wc wh wh wh wc w R wc wc bg bg bg wv w R wv bg bg w bg wc wc R wv bg bg bg bg bg wv R wv bg bg bg P bg wv R wv bg bg bg bg bg wv R wc wh wh wh wh wh wc #1", 
9:"wc wh wh wh wh wc w R wv bg bg bg P wc wc R wv bg w bg bg bg wv R wv bg bg bg w bg wv R wc wc bg bg bg bg wv R w wv bg bg wc wh wc R w wc wh wh wc w #1", 
10:"wc wh wh wh wh wh wc R wv bg bg bg bg bg wv R wv bg P bg w bg wv R wv bg w bg bg bg wv R wv bg bg bg bg bg wv R wc wc bg bg bg bg wv R w wc wh wh wh wh wc #1", 


11:"w w w wc wh wh wc R w w wc wc bg bg wv R wc wh wc bg bg bg wv R wv bg bg bg P bg wv R wc wc bg bg bg bg wv R w wv bg bg bg bg wv R w wc wh wh wh wh wc #2", 
12:"w wc wh wh wh wh wc R wc wc bg bg bg bg wv R wv bg bg bg P bg wv R wv bg w bg bg bg wv R wv bg bg bg bg wc wc R wv bg bg bg bg wv w R wc wh wh wh wh wc w #2", 
13:"wc wh wh wh wh wh wc R wv bg bg bg bg bg wv R wv bg bg bg w bg wv R wv bg bg bg bg bg wv R wv bg bg P w bg wv R wv bg bg bg bg bg wv R wc wh wh wh wh wh wc #2", 
14:"w wc wh wh wh wh wc R wc wc bg bg bg bg wv R wv bg bg bg P bg wv R wv bg w bg bg bg wv R wv bg bg w bg bg wv R wc wc bg bg bg wc wc R w wc wh wh wh wc w #2", 
15:"wc wh wh wh wh wh wc R wv bg bg bg bg bg wv R wv bg w w P bg wv R wv bg bg bg bg bg wv R wv bg w bg bg bg wv R wv bg bg bg bg bg wv R wc wh wh wh wh wh wc #2", 

16:"wc wh wh wh wh wh wc R wv bg bg bg bg bg wv R wv bg w bg P bg wv R wv bg w bg w bg wv R wv bg bg bg bg bg wv R wc wc bg bg wc wh wc R w wc wh wh wc w w #3", 
17:"wc wh wh wh wh wh wc R wv bg bg bg bg bg wv R wv bg bg bg bg bg wv R wv bg P bg bg bg wv R wv bg bg bg w bg wv R wv bg bg bg bg bg wv R wc wh wh wh wh wh wc #3", 
18:"w w wc wh wh wh wc w R wc wh wc bg bg bg wv w R wv bg bg bg w bg wc wc R wv bg w w w bg bg wv R wv bg P bg bg bg bg wv R wv bg w w w bg bg wv R wv bg bg bg bg bg bg wv R wc wh wh wh wh wh wh wc #3", 
19:"w wc wh wh wh wc wh wc R w wv bg bg bg w bg wv R wc wc bg w bg bg bg wv R wv bg bg bg bg bg bg wv R wv bg w bg bg P bg wv R wv bg bg bg w w bg wv R wc wh wc bg bg bg bg wv R w w wc wh wh wh wh wc #3", 
20:"wc wh wh wh wh wh wh wc R wv bg bg bg bg bg bg wv R wv bg bg bg bg bg bg wv R wv bg bg w P bg bg wv R wv bg bg bg bg bg bg wv R wv bg bg bg bg bg bg wv R wv bg bg bg bg bg bg wv R wc wh wh wh wh wh wh wc #3", 


21:"w wc wh wh wh wh wh wc R wc wc bg bg bg bg bg wv R wv bg bg w w w bg wv R wv bg bg bg bg w bg wv R wv bg w w bg w bg wv R wv bg bg bg bg bg bg wv R wc wh wh wc P bg wc wc R w w w wc wh wh wc w #4", 
22:"w wc wh wh wh wc w w R w wv bg bg bg wc wh wc R w wv bg P bg bg bg wv R w wv bg bg bg w bg wv R wc wc bg w bg bg bg wv R wv bg bg w bg bg w wc R wv bg bg bg bg bg bg wv R wc wh wh wh wh wh wh wc #4", 
23:"wc wh wh wh wh wh wh wc R wv bg bg bg bg bg bg wv R wv bg w w bg bg bg wv R wv bg w bg bg w bg wv R wv bg bg bg w w bg wv R wv bg bg bg P bg bg wv R wv bg bg bg bg bg wc wc R wc wh wh wh wh wh wc w #4", 
24:"w wc wh wh wh wc w w R w wv bg bg bg wc wc w R wc wc bg w bg bg wc wc R wv bg bg bg w bg bg wv R wv bg P bg w w bg wv R wv bg bg bg bg bg bg wv R wc wh wc bg bg wc wh wc R w w wc wh wh wc w w #4", 
25:"wc wh wh wh wc wh wh wc R wv bg bg bg w bg bg wv R wv bg w bg bg bg bg wv R wv bg bg bg bg bg bg wv R wv bg bg bg w bg bg wv R wv bg P bg bg bg bg wv R wv bg bg bg bg bg bg wv R wc wh wh wh wh wh wh wc #4", 

26:"wc wh wh wh wc wh wh wc R wv bg bg w wv bg bg wv R wv bg bg bg wc bg bg wv R wv bg w bg bg bg bg wv R wv bg bg bg bg bg bg wv R wv bg P bg bg bg bg wv R wv bg bg bg w bg bg wv R wc wh wh wh wc wh wh wc #0", 
27:"w wc wh wh wh wh wh wc R wc wc bg bg bg bg bg wv R wv bg bg bg bg w bg wv R wv bg w bg bg bg w wc R wv bg bg bg w bg bg wv R wv bg P w w w bg wv R wv bg bg bg bg bg bg wv R wc wh wh wh wh wh wh wc #0", 
28:"wc wh wh wc wh wh wh wc R wv bg bg w bg bg bg wv R wv bg bg bg bg P bg wv R wv bg bg bg bg bg bg wv R wv bg bg w bg w bg wv R wv bg bg bg bg w bg wv R wv bg bg bg bg bg bg wv R wc wh wh wh wh wh wh wc #0", 
29:"wc wh wh wc wc wh wh wc R wv bg bg w w bg bg wv R wv bg bg bg bg bg bg wv R wv bg bg bg P bg bg wv R wv bg bg bg bg bg bg wv R wv bg bg bg bg bg bg wv R wv bg bg bg bg bg bg wv R wc wh wh wh wh wh wh wc #0", 
30:"wc wh wh wh wh wh wh wc R wv bg bg bg bg bg bg wv R wv bg bg bg w w bg wv R wc w bg bg w P bg wv R wc w bg bg bg bg bg wv R wv bg bg w bg bg bg wv R wv bg bg bg bg bg bg wv R wc wh wh wh wh wh wh wc #0", 


31:"", 
32:"", 
33:"", 
34:"", 
35:"", 

36:"", 
37:"", 
38:"", 
39:"", 
40:"", 

41:"", 
42:"", 
43:"", 
44:"", 
45:"", 

46:"", 
47:"", 
48:"", 
49:"", 
50:"", 
}

var reacted

bot.on("ready", () =>{console.log("LongBot is online."); bot.user.setActivity("c!help", {type: "WATCHING"})});

var timer
bot.on("message", msg =>{
    if(msg.author.id == bot.user.id && msg.embeds[0].title.includes("•")){
        reacted = false
        timer = setTimeout(bebe = () =>{reacted = true}, 6000)
        msg.react("🔼"); msg.react("🔽"); msg.react("◀️"); msg.react("▶️"); msg.react("🔄"); msg.react("⏭️");
    }
    if(msg.author.bot) return;
    mbsg = msg
    let args = msg.content.substring(2).split(" ");

        // movement

    switch(msg.content.toLowerCase()){
        case "w":
            if(!games[msg.author.id] || !reacted) return;
            msg.channel.bulkDelete(2)
            games[msg.author.id].w()
            break;
        case "up":
            if(!games[msg.author.id] || !reacted) return;
            msg.channel.bulkDelete(2)
            games[msg.author.id].w()
            break;
        case "a":
            if(!games[msg.author.id] || !reacted) return;
            msg.channel.bulkDelete(2)
            games[msg.author.id].a()
            break;
        case "left":
            if(!games[msg.author.id] || !reacted) return;
            msg.channel.bulkDelete(2)
            games[msg.author.id].a()
            break;
        case "s":
            if(!games[msg.author.id] || !reacted) return;
            msg.channel.bulkDelete(2)
            games[msg.author.id].s()
            break;
        case "down":
            if(!games[msg.author.id] || !reacted) return;
            msg.channel.bulkDelete(2)
            games[msg.author.id].s()
            break;
        case "d":
            if(!games[msg.author.id] || !reacted) return;
            msg.channel.bulkDelete(2)
            games[msg.author.id].d()
            break;
        case "right":
            if(!games[msg.author.id] || !reacted) return;
            msg.channel.bulkDelete(2)
            games[msg.author.id].d()
            break;
    }

    if(!msg.content.startsWith(prefix)) return;

    // game start & level codes

    switch(args[0]){
        case "help":
            const helpembed = new Discord.MessageEmbed()
            .setTitle("LongBot - Longcat for Discord")
            .setColor(0xF5BA00)
            .addField("Commands", "-c!help - Posts this help board.\n-c!play (level) - Start a game at level 1 or specified level.\n-c!reset - Resets current level.\n-c!next - Continue to next level.")
            .addField("Notes", "Version 1.1\nBot created by Afely\nFancade & Longcat created by Martin Magni\nAfely's depression created by Javascript\nCheck out PolyMars' video where he created Sokobot, which\nwas my inspiration for this project!\nyoutu.be/0fWdU8JCT6Y\n\nIf you find any bugs, please post them in\nthe LongBot Discord server.")
            msg.channel.send(helpembed)
            break;
        case "play":
            if(!games[msg.author.id]){
            games[msg.author.id] = new game(msg.author.username, msg.author.id, msg)
            }
            games[msg.author.id].play()
            break;
        case "reset":
            if(!games[msg.author.id] || !reacted) return;
            games[msg.author.id].reset()
            break;
        case "next":
            if(!games[msg.author.id] || !reacted) return;
            games[msg.author.id].next()
    }
})

class game{
    constructor(plr, plrID, msg){
        this.plr = plr
        this.plrID = plrID
        this.msg = msg
        this.args = msg.content.substring(2).split(" ");
        this.lvlcode = ""
        this.lvl
        this.lvlview
        this.lvlsize
        this.timeout
        this.playing
    }
            d(){
                if(!this.playing || this.msg.author.id != this.plrID) return;
                this.lvlview = this.lvlcode.split(" ")
                while(this.lvlview[this.lvlview.indexOf("P") + 1] == "bg"){
                    this.lvlview[this.lvlview.indexOf("P") + 1] = "P"
                    this.lvlview[this.lvlview.indexOf("P")] = "bh"
                }
                this.lvlcode = this.lvlview.toString()
                this.lvlcode = this.lvlcode.replace(/,/g, " ")
                read(this.lvlcode, this.msg, this.lvl)
            }
            a(){
                if(!this.playing || this.msg.author.id != this.plrID) return;
                this.lvlview = this.lvlcode.split(" ")
                while(this.lvlview[this.lvlview.indexOf("P") - 1] == "bg"){
                    this.lvlview[this.lvlview.indexOf("P") - 1] = "P"
                    this.lvlview[this.lvlview.lastIndexOf("P")] = "bh"
                }
                this.lvlcode = this.lvlview.toString()
                this.lvlcode = this.lvlcode.replace(/,/g, " ")
                read(this.lvlcode, this.msg, this.lvl)
            }
            w(){
                if(!this.playing || this.msg.author.id != this.plrID) return;
                this.lvlview = this.lvlcode.split(" ")
                this.lvlsize = this.lvlcode.substr(0, this.lvlview.indexOf("R")).length + 1
                while(this.lvlview[this.lvlview.indexOf("P") - this.lvlsize] == "bg"){
                    this.lvlview[this.lvlview.indexOf("P") - this.lvlsize] = "P"
                    this.lvlview[this.lvlview.lastIndexOf("P")] = "bv"
                }
                this.lvlcode = this.lvlview.toString()
                this.lvlcode = this.lvlcode.replace(/,/g, " ")
                read(this.lvlcode, this.msg, this.lvl)
            }
            s(){
                if(!this.playing || this.msg.author.id != this.plrID) return;
                this.lvlview = this.lvlcode.split(" ")
                this.lvlsize = this.lvlcode.substr(0, this.lvlview.indexOf("R")).length + 1
                while(this.lvlview[this.lvlview.indexOf("P") + this.lvlsize] == "bg"){
                    this.lvlview[this.lvlview.indexOf("P") + this.lvlsize] = "P"
                    this.lvlview[this.lvlview.indexOf("P")] = "bv"
                }
                this.lvlcode = this.lvlview.toString()
                this.lvlcode = this.lvlcode.replace(/,/g, " ")
                read(this.lvlcode, this.msg, this.lvl)
            }

            play(){
                this.msg = mbsg
                this.args = mbsg.content.substring(2).split(" ");
                if(this.msg.author.id != this.plrID) return;
                if(this.args[1]) this.lvl = Number(this.args[1])
                else this.lvl = 1
                this.lvlcode = ""
                this.lvlcode = levels[this.lvl]
                this.playing = true
                read(this.lvlcode, this.msg, this.lvl)
            }
            reset(){
                if(!this.playing || this.msg.author.id != this.plrID) return;
                this.lvlcode = ""
                this.lvlcode = levels[this.lvl]
                read(this.lvlcode, this.msg, this.lvl)
            }
            next(){
                if(!this.playing || this.msg.author.id != this.plrID) return;
                this.lvl += 1
                this.lvlcode = ""
                this.lvlcode = levels[this.lvl]
                read(this.lvlcode, this.msg, this.lvl)
            }
        }

bot.on("messageReactionAdd", (react, user) =>{
    if(!games[user.id] || !react.message.embeds[0].title.startsWith(user.username) || react.message.author.id != bot.user.id || !reacted) return;

    switch(react.emoji.name){
        case "🔼":
            games[user.id].w()
            break;
        case "🔽":
            games[user.id].s()
            break;
        case "◀️":
            games[user.id].a()
            break;
        case "▶️":
            games[user.id].d()
            break;
        case "🔄":
            games[user.id].reset()
            break;
        case "⏭️":
            games[user.id].next()
            break;
    }
    react.message.delete()
})

// level generation

read = (code, mesg, lvl) =>{
    let spaces = 0
    let bode
    if(code != undefined) bode = code.split(" ")
    let level = []
    let x
    let plr = mesg.author.username
    let loss

    // error message
    if(code == undefined){
        let title = Math.floor(Math.random() * 6)
        let errorembed = new Discord.MessageEmbed()
        .setColor(0xF5BA00)
        if(title < 1) errorembed.setTitle("Uh oh!")
        else if(title < 2) errorembed.setTitle("Whoops!")
        else if(title < 3) errorembed.setTitle("Rats!")
        else if(title < 4) errorembed.setTitle("Oops!")
        else errorembed.setTitle("Well dang!")
        errorembed.setDescription("Looks like that isn't a valid level!")
        mesg.channel.send(errorembed)
        return;
    }

    // loss detection
    let lvlsize = code.substr(0, bode.indexOf("R")).length + 1
    if(bode[bode.indexOf("P") - 1] != "bg" && bode[bode.indexOf("P") + 1] != "bg" && bode[bode.indexOf("P") + lvlsize] != "bg" && bode[bode.indexOf("P") - lvlsize] != "bg") loss = true

    // theme picker
    switch(bode[bode.length - 1]){
        case "#0":
            wallH = "<:wallH:739022697228402699>"
            wallV = "<:wallV:739022724113891409>"
            wallC = "<:wallC:739022656837517324>"
            BG = "<:BG:739022772457570355>"
            wall = "<:wall:739023283353288716>"
            break;
        case "#1":
            wallH = "<:wall1H:739851273666560041>"
            wallV = "<:wall1V:739851301847957545>"
            wallC = "<:wall1C:739851195778203728>"
            BG = "<:BG:739022772457570355>"
            wall = "<:wall1:739851336283062353>"
            break;
        case "#2":
            wallH = "<:wall2H:739851495368949770>"
            wallV = "<:wall2V:739851516151595140>"
            wallC = "<:wall2C:739851468055511120>"
            BG = "<:wall1:739851336283062353>"
            wall = "<:wall2:739851544551489576>"
            break;
        case "#3":
            wallH = "<:wall3H:739851645755588621>"
            wallV = "<:wall3V:739851686058786977>"
            wallC = "<:wall3C:739851617142308904>"
            BG = "<:BG:739022772457570355>"
            wall = "<:wall3:739851709232185425>"
            break;
        case "#4":
            wallH = "<:wall4H:739851909850071100>"
            wallV = "<:wall4V:739852050900320298>"
            wallC = "<:wall4C:739851832343396492>"
            BG = "<:BG2:739852087034118234>"
            wall = "<:wall4:739852068596088942>"
            break;
    }

    // levelcode reading
    for(x = 0; x < bode.length; x += 1){
        if(bode[x] == "wv") level.push(wallV)
        if(bode[x] == "wh") level.push(wallH)
        if(bode[x] == "bg"){level.push(BG); spaces += 1}
        if(bode[x] == "P") level.push(player)
        if(bode[x] == "bh") level.push(bodyH)
        if(bode[x] == "bv") level.push(bodyV)
        if(bode[x] == "w") level.push(wall)
        if(bode[x] == "wc") level.push(wallC)
        if(bode[x] == "R") level.push("\n")
    }

    level = level.toString().replace(/,/g, "")

    // embed compiling
    const lvlembed = new Discord.MessageEmbed()
    .setColor(0xF5BA00)
    .setTitle(plr + " • LEVEL " + lvl)
    .setDescription(level + `\n\nWASD/"up", "down", "left", "right"/reactions to move`)
    .setFooter("Created by Afely\nThanks to Martin Magni & Fancade")

    // win/loss detection
    if(loss) lvlembed.setDescription(level + "\n\n**YOU LOSE**\nc!reset or 🔄 to reset")
    if(spaces == 0) lvlembed.setDescription(level + "\n\n**YOU WIN!**\nc!next or ⏭️ to continue")
    mesg.channel.send(lvlembed)
}

bot.login(process.env.token)