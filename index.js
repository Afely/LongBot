const Discord = require("discord.js");
const bot = new Discord.Client()
const prefix = "c!";

const player = "<:head:739022533918982174>"
const wallH = "<:wallH:739022697228402699>"
const wallV = "<:wallV:739022724113891409>"
const wallC = "<:wallC:739022656837517324>"
const BG = "<:BG:739022772457570355>"
const bodyH = "<:bodyH:739022604462981150>"
const bodyV = "<:bodyV:739022629415026810>"
const wall = "<:wall:739023283353288716>"

const reactions = new Discord.ReactionCollector(msg)
var mbsg

var games = {}

//levels

var levels = {
1:"wc wh wh wh wc w R wv bg bg bg wc wc R wv bg bg bg bg wv R wc wc bg P bg wv R w wv bg bg bg wv R w wc wh wh wh wc", 
2:"wc wh wh wh wh wc R wv bg bg bg bg wv R wv bg bg P bg wv R wv bg w w bg wv R wv bg bg bg bg wv R wc wh wh wh wh wc", 
3:"wc wh wh wh wh wc R wv bg bg bg bg wv R wc wc bg P bg wv R w wv bg bg bg wv R w wc wc bg bg wv R w w wc wh wh wc", 
4:"w w w wc wh wh wc R w wc wh wc bg bg wv R wc wc bg bg bg bg wv R wv P bg w w bg wv R wv bg bg w w bg wv R wc wc bg bg bg bg wv R w wc wh wh wh wh wc", 
5:"w w w wc wh wh wc R w w w wv bg bg wv R wc wh wh wc bg w wc R wv bg bg bg bg bg wv R wv bg P bg w bg wv R wv bg bg bg bg bg wv R wc wh wh wh wh wh wc", 

6:"w w wc wh wh wh wc R wc wh wc bg bg bg wv R wv bg bg bg bg bg wv R wv bg w w bg P wv R wv bg w w bg bg wv R wv bg bg bg bg bg wv R wc wh wh wh wh wh wc", 
7:"wc wh wh wh wc w w R wv bg bg bg wc wc w R wv bg w bg bg wc wc R wv bg P bg bg bg wv R wv bg bg bg w bg wv R wv bg bg bg bg bg wv R wc wh wh wh wh wh wc", 
8:"w wc wh wh wh wc w R wc wc bg bg bg wv w R wv bg bg w bg wc wc R wv bg bg bg bg bg wv R wv bg bg bg P bg wv R wv bg bg bg bg bg wv R wc wh wh wh wh wh wc", 
9:"wc wh wh wh wh wc w R wv bg bg bg P wc wc R wv bg w bg bg bg wv R wv bg bg bg w bg wv R wc wc bg bg bg bg wv R wv bg bg bg wc wh wc R w wc wh wh wc w w", 
10:"wc wh wh wh wh wh wc R wv bg bg bg bg bg wv R wv bg P bg w bg wv R wv bg w bg bg bg wv R wv bg bg bg bg bg wv R wc wc bg bg bg bg wv R w wc wh wh wh wh wc", 


11:"w w w wc wh wh wc R w w wc wc bg bg wv R wc wh wc bg bg bg wv R wv bg bg bg P bg wv R wc wc bg bg bg bg wv R w wv bg bg bg bg wv R w wc wh wh wh wh wc", 
12:"w wc wh wh wh wh wc R wc wc bg bg bg bg wv R wv bg bg bg P bg wv R wv bg w bg bg bg wv R wv bg bg bg bg wc wc R wv bg bg bg bg wv w R wc wh wh wh wh wc w", 
13:"wc wh wh wh wh wh wc R wv bg bg bg bg bg wv R wv bg bg bg w bg wv R wv bg bg bg bg bg wv R wv bg bg P w bg wv R wv bg bg bg bg bg wv R wc wh wh wh wh wh wc", 
14:"w wc wh wh wh wh wc R wc wc bg bg bg bg wv R wv bg bg bg P bg wv R wv bg w bg bg bg wv R wv bg bg w bg bg wv R wc wc bg bg bg wc wc R w wc wh wh wh wc w", 
15:"wc wh wh wh wh wh wc R wv bg bg bg bg bg wv R wv bg w w P bg wv R wv bg bg bg bg bg wv R wv bg w bg bg bg wv R wv bg bg bg bg bg wv R wc wh wh wh wh wh wc", 

16:"wc wh wh wh wh wh wc R wv bg bg bg bg bg wv R wv bg w bg P bg wv R wv bg w bg w bg wv R wv bg bg bg bg bg wv R wc wc bg bg wc wh wc R w wc wh wh wc w w", 
17:"wc wh wh wh wh wh wc R wv bg bg bg bg bg wv R wv bg bg bg bg bg wv R wv bg P bg bg bg wv R wv bg bg bg w bg wv R wv bg bg bg bg bg wv R wc wh wh wh wh wh wc", 
18:"w w wc wh wh wh wc w R wc wh wc bg bg bg wv w R wv bg bg bg w bg wc wc R wv bg w w w bg bg wv R wv bg P bg bg bg bg wv R wv bg w w w bg bg wv R wv bg bg bg bg bg bg wv R wc wh wh wh wh wh wh wc", 
19:"w wc wh wh wh wc wh wc R w wv bg bg bg w bg wv R wc wc bg w bg bg bg wv R wv bg bg bg bg bg bg wv R wv bg w bg bg P bg wv R wv bg bg bg w w bg wv R wc wh wc bg bg bg bg wv R w w wc wh wh wh wh wc", 
20:"wc wh wh wh wh wh wh wc R wv bg bg bg bg bg bg wv R wv bg bg bg bg bg bg wv R wv bg bg w P bg bg wv R wv bg bg bg bg bg bg wv R wv bg bg bg bg bg bg wv R wv bg bg bg bg bg bg wv R wc wh wh wh wh wh wh wc", 


21:"", 
22:"", 
23:"", 
24:"", 
25:"", 

26:"", 
27:"", 
28:"", 
29:"", 
30:"", 


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

bot.on("ready", () =>{console.log("LongBot is online."); bot.user.setActivity("c!help", {type: "WATCHING"})});

bot.on("message", msg =>{
    if(msg.author.bot) return;
    mbsg = msg
    if(msg.author.id = bot.user.id){
        msg.react("🔼"); msg.react("🔽"); msg.react("◀️"); msg.react("▶️"); msg.react("🔄"); msg.react("⏭️")
    }
    let args = msg.content.substring(2).split(" ");

        // movement

    switch(msg.content.toLowerCase()){
        case "w":
            if(!games[msg.author.id]) return;
            games[msg.author.id].w()
            break;
        case "up":
            if(!games[msg.author.id]) return;
            games[msg.author.id].w()
            break;
        case "a":
            if(!games[msg.author.id]) return;
            games[msg.author.id].a()
            break;
        case "left":
            if(!games[msg.author.id]) return;
            games[msg.author.id].a()
            break;
        case "s":
            if(!games[msg.author.id]) return;
            games[msg.author.id].s()
            break;
        case "down":
            if(!games[msg.author.id]) return;
            games[msg.author.id].s()
            break;
        case "d":
            if(!games[msg.author.id]) return;
            games[msg.author.id].d()
            break;
        case "right":
            if(!games[msg.author.id]) return;
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
            .addField("Commands", "-c!help - Gee, I dunno\n-c!play (level) - Start a game at level 1 or specified level.\n-c!reset - Resets current level.\n-c!next - Continue to next level.")
            .addField("Notes", "Version 1.1\nBot created by Afely\nFancade & Longcat created by Martin Magni\nAfely's depression created by Javascript\nCheck out PolyMars' video where he created Sokobot, which\nwas my inspiration for this project!\nyoutu.be/0fWdU8JCT6Y\n\nIf you find any bugs, please tell me.")
            msg.channel.send(helpembed)
            break;
        case "play":
            if(!games[msg.author.id]){
            games[msg.author.id] = new game(msg.author.username, msg.author.id, msg)
            }
            games[msg.author.id].play()
            break;
        case "reset":
            if(!games[msg.author.id]) return;
            games[msg.author.id].reset()
            break;
        case "next":
            if(!games[msg.author.id]) return;
            games[msg.author.id].next()
    }
})

bot.on("messageReactionAdd", () =>{
    if(!reactions) return;
    let zeez = reactions.users.array()
    let x
    for(x = 0; zeez.length > x; x += 1){
        if(!games[zeez[x].id]) return;
            games[zeez[x].id].next()
        
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

// level generation

read = (code, mesg, lvl) =>{
    let spaces = 0
    let bode
    let level = []
    let x
    let plr = mesg.author.username
    // levelcode reading
    for(x = 0, bode = code.split(" "); x < bode.length; x += 1){
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
    .setDescription(level + "\n\nWASD/up down left right to move")
    .setFooter("Created by Afely\nThanks to Martin Magni & Fancade")
    // win detection
    if(spaces == 0) lvlembed.setDescription(level + "\n\n**YOU WIN!**\nc!next to continue")
    if(code.length = 0){mesg.channel.send("This level does not exist."); return;}
    mesg.channel.send(lvlembed)
}

bot.login(process.env.token)