const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '#';
const adminprefix = `#`;


client.on('ready',  () => {
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~[ Team #bot           ]~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(`Logged in as  * [ "  Team #bot " ] servers! [ " ${client.guilds.size} " ] Users! [ " ${client.users.size} " ]`); 

});

client.on("message", message => {
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
   
**__COMMANDS BOT__**
――――――――――――――――――――――――――――
**MODERATION**
${prefix}ban - لاعطاء باند لشخص
${prefix}unban - لفك الباند عن شخص
${prefix}kick - لاعطاء طرد لشخص
${prefix}warn - تحذير شخص
${prefix}mute - اعطات اسكات لشخص

――――――――――――――――――――――――――――
**GENERAL**
${prefix}allbots -لعرض جميع البوتات الي بالسيرفر
${prefix}server - يعرض لك معلومات عن السيرفر
${prefix}bot - يعرض لك كل معلومات البوت
${prefix}mb - عرض لك عدد كل حالات الاشخاص وعدد البوتات وعدد الاشخاص
${prefix}id - معلومات عنك
${prefix}bans - عدد الاشخاص المبندة 
${prefix}embed - يكرر الي تقولو بشكل حلو
${prefix}say  -  يكرر الي تقولو
${prefix}emoji <any things>  -  لتحويل اي كلمه تقولها الي ايموجي
${prefix}inv - لدعوة البوت الى سيرفرك
${prefix}mutechannel - تقفيل الشات
${prefix}unmutechannel - فتح الشات
${prefix}make <number> - ينشا لك الوان مع كم الوان تبي
${prefix}obc - لأرسال برود كاست للكل
${prefix}bc  - لأرسال برود كاست للأونلاين
${prefix}adminbc - برودكاست لكل سيرفرات البوت
${prefix}uptime  - مدة التشغيل
**

――――――――――――――――――――――――――――
<a:111:594663474727223315>**__Games orders__**<a:111:594663474727223315>
${prefix}عواصم
${prefix}هل تعلم
${prefix}حب
${prefix}خواطر
${prefix}كت تويت
${prefix}لو خيروك
${prefix}صراحة
${prefix}ادكار
${prefix}quran/ قراءة القرآن 
${prefix}marry/ لعبة الزواج 
  
――――――――――――――――――――――――――――
**BOT By:Abu Hussien#0673**
   

   `)
   message.author.sendEmbed(embed)
   
   }
   });  
client.on('message', message => {
     if (message.content === (prefix + "help")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , "  تـم ارسال رسالة خاصة ياحـلو")
  message.channel.sendEmbed(embed);
    }
});

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

client.on('message', message => {
    if(!message.channel.guild) return;
               if(message.content.startsWith(prefix + 'allbots')) {

   
   if (message.author.bot) return;
   let i = 1;
       const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.tag, message.author.avatarURL)
         .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});

///////////////////////////////////////////////////////////////////

client.on('message', function(msg) {
  if(msg.content.startsWith (prefix  + 'server')) {
    let embed = new Discord.RichEmbed()
    .setColor('BLACK')
    .setAuthor(msg.guild.name, msg.guild.iconURL)
    .addField('🆔 Server ID:',`${msg.guild.id}`,true)
    .addField('📆 Created On',`${msg.guild.createdAt.toLocaleString()}`,true)
    .addField('👑 Owned By',`${msg.guild.owner}`,true)
      .addField(`:busts_in_silhouette: Members [${msg.guild.memberCount}]`,`**${msg.guild.members.filter(m=>m.presence.status == 'online').size}** Online`,true)
      .addField(`:speech_balloon: Channels  [${msg.guild.channels.size}]`,`**${msg.guild.channels.filter(m => m.type === 'text').size}** Text | **${msg.guild.channels.filter(m => m.type === 'voice').size}** Voice`,true)
    .addField('<a:bad4:603414004744060930>Others',`**Region:** ${msg.guild.region}\n**Verification Level:** ${msg.guild.verificationLevel}`,true)
    .addField(`:closed_lock_with_key: Roles [${msg.guild.roles.size}]`,`**  Bot By <@589175566457110534>**  `,true)
    msg.channel.send({embed:embed});
  }
});


client.on('message', message => {
    if (message.content === (prefix + "bot")) {
        if(!message.channel.guild) return;
    let embed = new Discord.RichEmbed()
 .setColor("#8650a7")
 .addField("** :white_check_mark: Servers: **" , client.guilds.size)
 .addField("** :white_check_mark: Users: **" , client.users.size)
 .addField("** :white_check_mark: Channels: **" , client.channels.size)
   .addField("** :rocket: Ping **" , Date.now() - message.createdTimestamp)
   .setTimestamp()
 message.channel.sendEmbed(embed);
   }
});

client.on('message', message => {
    if(message.content == (prefix + "mb")) {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info🔋
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart: idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
:black_heart: offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
:blue_heart:   all:  ${message.guild.memberCount}**`)         
         message.channel.send({embed});

    }
});



client.on('message' , function (message){
  var token = `NTU5MDA3OTUxOTA2NTM3NDcy.XQ7niA.prrM99OVdaqgZJUXHS7wOi7ZTjc` 
  if(message.content === '#restart') {
if(message.author.id !== '592489746727436308') return message.reply('**restart...**');
      client.destroy();
      client.login(token) 
var time = 7200000;
client.setInterval(function() {
client.destroy();
client.login(token) 
}, time);
}
})




client.on("message", msg => {
  if(msg.content === '-' + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField(":trident:|Username", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField(":id:|iD", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':name_badge:|Status', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField(':game_die:|Playing', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField(':medal:|Roles', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField(':name_badge:|Discriminator', `${msg.discriminator}`, true)
          .addField(':date:|Created At', `${msg.createdAt}`,true)
          .addField(':robot:|Bot', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});

client.on('message', message => {
    if (message.content.startsWith("#bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`Number of banned persons **${bans.size}** `))
}
});

client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
  
    let args = message.content.split(" ").slice(1);
  
  // -say
    if (command === "say") {
            message.delete()
      message.channel.sendMessage(args.join(" ")).catch(console.error);
    }
    
   
  
  if (command == "embed") {
      let say = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)  
    .setAuthor(message.author.username)
      .setDescription(args.join("  "))
      .setColor(0x06DF00)
      message.channel.sendEmbed(say);
      message.delete();
    }
    
  
  
});

client.on('message' , async (message) => {
    if(message.content.startsWith(prefix + "emoji")) {
       let args = message.content.split(" ").slice(1);
if (args.length < 1) {
 message.channel.send('You must provide some text to emojify!');
}

message.channel.send(
 args.join(' ')
     .split('')
     .map(c => mapping[c] || c)
     .join('')
);
};
});

client.on('message' , message => {
    if (message.content === (prefix + "invite")) {
        if(!message.channel.guild) return message.reply('This Command is Only For Servers');
     const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)
 .setAuthor(message.author.username, message.author.avatarURL)
 .setTitle('Click Here To Invite The Bot')
 .setURL('https://discordapp.com/oauth2/authorize?client_id=444182215476248576&scope=bot&permissions=9')
  message.channel.sendEmbed(embed);
   }
});
client.on('message' , message => {
    if (message.content === (prefix + "inv")) {
        if(!message.channel.guild) return message.reply('This Command is Only For Servers');
     const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)
 .setAuthor(message.author.username, message.author.avatarURL)
 .setTitle('Click Here To Invite The Bot')
 .setURL('https://discordapp.com/oauth2/authorize?client_id=444182215476248576&scope=bot&permissions=9')
  message.channel.sendEmbed(embed);
   }
});

client.on('message', message => {

    if (message.content === "#mutechannel") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم اغلاق الشات :white_check_mark: ")
           });
             }
if (message.content === "#unmutechannel") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات:white_check_mark:")
           });
             }  



});

client.on('message', message => {
  if(message.content === prefix + 'make') {
       if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**');
           if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "1",
                    color: "#FFB6C1",
                    permissions: []
     })
           message.guild.createRole({
                  name: "2",
                    color: "#FFC0CB",
                    permissions: []
     })
                message.guild.createRole({
                  name: "3",
                    color: "#FF69B4",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "4",
                    color: "#FF1493",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "5",
                    color: "#DB7093",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "6",
                    color: "#C71585",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "7",
                    color: "#E6E6FA",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#D8BFD8",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#DDA0DD",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "9",
                    color: "#DA70D6",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "10",
                    color: "#EE82EE",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "11",
                    color: "#FF00FF",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "12",
                    color: "#BA55D3",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "13",
                    color: "#9932CC",
                    permissions: []
     })
                          message.guild.createRole({
                  name: "14",
                    color: "#9400D3",
                    permissions: []
     })
                          message.guild.createRole({
                  name: "15",
                    color: "#8A2BE2",
                    permissions: []
     })
                               message.guild.createRole({
                  name: "16",
                    color: "#8B008B",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "17",
                    color: "#800080",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "18",
                    color: "#9370DB",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "19",
                    color: "#7B68EE",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "20",
                    color: "#6A5ACD",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "21",
                    color: "#483D8B",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "22",
                    color: "#663399",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "23",
                    color: "#4B0082",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "24",
                    color: "#FFA07A",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "25",
                    color: "#FA8072",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "26",
                    color: "#E9967A",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "27",
                    color: "#F08080",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "28",
                    color: "#CD5C5C",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "29",
                    color: "#DC143C",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "30",
                    color: "    #FF0000",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "31",
                    color: "#B22222",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "32",
                    color: "#8B0000",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "33",
                    color: "#FFA500",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "34",
                    color: "#FF8C00",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "35",
                    color: "#FF7F50",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "36",
                    color: "#FF6347",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "37",
                    color: "#FF4500",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "38",
                    color: "#FFD700",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "39",
                    color: "#FFFFE0",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "40",
                    color: "#FFFACD",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "41",
                    color: "#FAFAD2",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "42",
                    color: "    #FFEFD5",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "43",
                    color: "#FFE4B5",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "44",
                    color: "#FFDAB9",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "45",
                    color: "#EEE8AA",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "46",
                    color: "#F0E68C",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "47",
                    color: "#BDB76B",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "48",
                    color: "#ADFF2F",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "49",
                    color: "#7FFF00",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "50",
                    color: "#7CFC00",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "51",
                    color: "#00FF00",
                    permissions: []
     })  
     
                                         message.guild.createRole({
                  name: "52",
                    color: "#32CD32",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "53",
                    color: "#98FB98",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "54",
                    color: "#90EE90",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "55",
                    color: "#00FA9A",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "56",
                    color: "#00FF7F",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "57",
                    color: "#3CB371",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "58",
                    color: "#2E8B57",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "59",
                    color: "#2E8B57",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "60",
                    color: "#008000",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "61",
                    color: "#006400",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "62",
                    color: "#9ACD32",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "63",
                    color: "#6B8E23",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "64",
                    color: "#556B2F",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "65",
                    color: "#66CDAA",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "66",
                    color: "#8FBC8F",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "67",
                    color: "#20B2AA",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "68",
                    color: "#008B8B",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "69",
                    color: "#008080",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "70",
                    color: "#00FFFF",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "71",
                    color: "#E0FFFF",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "72",
                    color: "#AFEEEE",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "73",
                    color: "#7FFFD4",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "74",
                    color: "#40E0D0",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "75",
                    color: "#48D1CC",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "76",
                    color: "#00CED1",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "77",
                    color: "#5F9EA0",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "78",
                    color: "#4682B4",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "79",
                    color: "#B0C4DE",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "80",
                    color: "#ADD8E6",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "81",
                    color: "#B0E0E6",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "82",
                    color: "#87CEFA",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "83",
                    color: "#87CEEB",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "84",
                    color: "#6495ED",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "85",
                    color: "#00BFFF",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "86",
                    color: "#1E90FF",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "87",
                    color: "#4169E1",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "88",
                    color: "#0000FF",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "89",
                    color: "#0000CD",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "90",
                    color: "#00008B",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "91",
                    color: "#000080",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "92",
                    color: "#191970",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "93",
                    color: "#FFF8DC",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "94",
                    color: "#FFEBCD",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "95",
                    color: "#FFE4C4",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "96",
                    color: "#FFDEAD",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "97",
                    color: "#F5DEB3",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "98",
                    color: "#DEB887",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "99",
                    color: "#D2B48C",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "100",
                    color: "#BC8F8F",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "101",
                    color: "#F4A460",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "102",
                    color: "#DAA520",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "103",
                    color: "#B8860B",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "104",
                    color: "#CD853F",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "105",
                    color: "#D2691E",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "106",
                    color: "#808000",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "107",
                    color: "#8B4513",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "108",
                    color: "#A0522D",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "109",
                    color: "#A52A2A",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "110",
                    color: "#800000",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "111",
                    color: "#FFFFFF",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "112",
                    color: "#FFFAFA",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "113",
                    color: "#F0FFF0",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "114",
                    color: "#F5FFFA",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "115",
                    color: "#F0FFFF",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "116",
                    color: "#F0F8FF",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "117",
                    color: "#F8F8FF",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "118",
                    color: "#F5F5F5",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "119",
                    color: "#FFF5EE",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "120",
                    color: "#F5F5DC",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "121",
                    color: "#FDF5E6",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "122",
                    color: "#FFFAF0",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "123",
                    color: "#FFFFF0",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "124",
                    color: "#FAEBD7",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "125",
                    color: "#FAF0E6",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "126",
                    color: "#FFF0F5",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "127",
                    color: "#FFE4E1",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "128",
                    color: "#DCDCDC",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "129",
                    color: "#D3D3D3",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "130",
                    color: "#C0C0C0",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "131",
                    color: "#A9A9A9",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "132",
                    color: "#696969",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "133",
                    color: "#808080",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "134",
                    color: "#778899",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "135",
                    color: "#708090",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "136",
                    color: "#2F4F4F",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "137",
                    color: "#000000",
                    permissions: []
     })    
 
     
          message.channel.sendMessage({embed: new Discord.RichEmbed()
     .setColor('#502faf').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``الالوان قيد الانشاء ....``')});
   }
 });    

const adkar = [
    '**اذكار  | **اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ.',
    '**اذكار  |  **اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى. ',
    '**اذكار  ‏|  **اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ، وَجِلَّهُ، وَأَوَّلَهُ، وَآخِرَهُ، وَعَلَانِيَتَهُ، وَسِرَّهُ. ',
    '**‏اذكار  |  **أستغفر الله .',     
    '**‏اذكار  | **الْلَّهُ أَكْبَرُ',
    '**‏اذكار  |  **لَا إِلَهَ إِلَّا اللَّهُ',
    '**اذكار  |  **اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ , وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ , اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.',
    '**اذكار  |  **سُبْحَانَ الْلَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا الْلَّهُ، وَالْلَّهُ أَكْبَرُ',
    '**اذكار  | **لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ.',
    '**اذكار  | **أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ',
    '**‏اذكار  | **سُبْحـانَ اللهِ وَبِحَمْـدِهِ. ',
    '‏**اذكار**|  لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.',
    '**اذكار  ‏|   **اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.',
    '**اذكار  | ‏ **يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ.',
    'اذكار    |  **أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ.**',
    '**‏اذكار  |  **اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.',
    '**‏اذكار  |  **اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد. ',
    '**‏اذكار  |  **أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق.',
    '**اذكار  |  **يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ. ',
    '**اذكار  |  **اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ.',
    '**‏اذكار  |  **اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ.',
    '**‏اذكار  |  **سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه. ',
    '**‏اذكار  |  **اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.',
    '**‏اذكار  |  **بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم. ',
    '**‏اذكار  |  **حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.',
    '**اذكار  |  **اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر.',
    '**‏اذكار  |  **اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك',
    '**‏اذكار  |  **رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً',
    '**‏اذكار  |  **اللهم إني أعوذ بك من العجز، والكسل، والجبن، والبخل، والهرم، وعذاب القبر، اللهم آت نفسي تقواها، وزكها أنت خير من زكاها. أنت وليها ومولاها. اللهم إني أعوذ بك من علم لا ينفع، ومن قلب لا يخشع، ومن نفس لا تشبع، ومن دعوة لا يستجاب لها',
    '**‏اذكار  |  **اللهم إني أعوذ بك من شر ما عملت، ومن شر ما لم أعمل',
    '**‏اذكار  |  **اللهم مصرف القلوب صرف قلوبنا على طاعتك',
  ]
  client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "ادكار")) {
    if(!message.channel.guild) return;
  var client= new Discord.RichEmbed()
  .setTitle("اذكار")
  .setThumbnail(message.author.avatarURL)
  .setColor('RANDOM')
  .setDescription(`${adkar[Math.floor(Math.random() * adkar.length)]}`)
                 .setTimestamp()
  message.channel.sendEmbed(client);
  message.react("??")
  }
  });
  
  const Sra7a = [
       'صراحه  |  صوتك حلوة؟',
       'صراحه  |  التقيت الناس مع وجوهين؟',
       'صراحه  |  شيء وكنت تحقق اللسان؟',
       'صراحه  |  أنا شخص ضعيف عندما؟',
       'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
       'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
       'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
       'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
       'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
       'صراحه  |  أشجع شيء حلو في حياتك؟',
       'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
       'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
       'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
       'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
       'صراحه  |  نظرة و يفسد الصداقة؟',
       'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
       'صراحه  |  شخص معك بالحلوه والمُره؟',
       'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
       'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
       'صراحه  |  وش تتمنى الناس تعرف عليك؟',
       'صراحه  |  ابيع المجرة عشان؟',
       'صراحه  |  أحيانا احس ان الناس ، كمل؟',
       'صراحه  |  مع مين ودك تنام اليوم؟',
       'صراحه  |  صدفة العمر الحلوة هي اني؟',
       'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
       'صراحه  |  صفة تحبها في نفسك؟',
       'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
       'صراحه  |  تصلي صلواتك الخمس كلها؟',
       'صراحه  |  ‏تجامل أحد على راحتك؟',
       'صراحه  |  اشجع شيء سويتة بحياتك؟',
       'صراحه  |  وش ناوي تسوي اليوم؟',
       'صراحه  |  وش شعورك لما تشوف المطر؟',
       'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
       'صراحه  |  ما اكثر شي ندمن عليه؟',
       'صراحه  |  اي الدول تتمنى ان تزورها؟',
       'صراحه  |  متى اخر مره بكيت؟',
       'صراحه  |  تقيم حظك ؟ من عشره؟',
       'صراحه  |  هل تعتقد ان حظك سيئ؟',
       'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
       'صراحه  |  كلمة تود سماعها كل يوم؟',
       'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
       'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
       'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
       'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
       '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
       'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
       '‏صراحه | هل تحب عائلتك ام تكرههم؟',
       '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
       '‏صراحه  |  هل خجلت من نفسك من قبل؟',
       '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
       '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
       '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
        '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
       '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
       '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
       'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
       '‏صراحه  |  ما هو عمرك الحقيقي؟',
       'صراحه | ما أكثر شي ندمت عليه؟',
       'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
  ]
     client.on('message', message => {
   if (message.content.startsWith(prefix + "صراحة")) {
       if(!message.channel.guild) return message.reply('** This command only for servers **');
    var client= new Discord.RichEmbed()
    .setTitle("لعبة صراحة ..")
    .setColor('RANDOM')
    .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
    .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                    .setTimestamp()
  
     message.channel.sendEmbed(client);
     message.react("??")
   }
  });

 
 
  
   client.on('message', message => {
     if (message.content.startsWith(prefix + "عقاب")) {
                  if(!message.channel.guild) return message.reply('** This command only for servers**');
    var embed = new Discord.RichEmbed()
    .setColor('RANDOM')
     .setThumbnail(message.author.avatarURL) 
   .addField('Ţħē ßattaliŏn ❆ الكّْـتيبـﮧ' ,
    `${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
    message.channel.sendEmbed(embed);
    console.log('[38ab] Send By: ' + message.author.username)
      }
  });
  
  var rebel = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
      client.on('message', message => {
          var args = message.content.split(" ").slice(1);
      if(message.content.startsWith(prefix + 'لو خيروك')) {
           var cat = new Discord.RichEmbed()
  .setImage(rebel[Math.floor(Math.random() * rebel.length)])
  message.channel.sendEmbed(cat);
      }
  });
  
   const cuttweet = [
       'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
       'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
       'كت تويت | الحرية لـ ... ؟',
       'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
       'كت تويت ‏| كلمة للصُداع؟',
       'كت تويت ‏| ما الشيء الذي يُفارقك؟',
       'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
       'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
       'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
       'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
       '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
       'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
       '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
       '‏كت تويت | وش يفسد الصداقة؟',
       '‏كت تويت | شخص لاترفض له طلبا ؟',
       '‏كت تويت | كم مره خسرت شخص تحبه؟.',
       '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
       '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
       '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
       '‏كت تويت |أقوى كذبة مشت عليك ؟',
       '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
       'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
       '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
       '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
       '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
       '‏كت تويت | مطلبك الوحيد الحين ؟',
       '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
  ]
  
   client.on('message', message => {
     if (message.content.startsWith(prefix + "كت تويت")) {
                  if(!message.channel.guild) return message.reply('** This command only for servers**');
    var embed = new Discord.RichEmbed()
    .setColor('RANDOM')
     .setThumbnail(message.author.avatarURL) 
   .addField('لعبه كت تويت' ,
    `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
    message.channel.sendEmbed(embed);
    console.log('[id] Send By: ' + message.author.username)
      }
  });
  
  const secreT = [
    "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
    "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
    "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
    "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
    "**ان تعالج ألمك بنفسك تلك هى القوة**.", 
    "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
    "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
    "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
    "**المناقشات العقيمة لا تنجب افكارا**.", 
    "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
    "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
  ]
  
  
   client.on('message', message => {
     if (message.content.startsWith(prefix + "خواطر")) {
                  if(!message.channel.guild) return message.reply('** This command only for servers**');
    var embed = new Discord.RichEmbed()
    .setColor('RANDOM')
  
     .setThumbnail(message.author.avatarURL) 
   .addField('لعبه خواطر' ,
    `${secreT[Math.floor(Math.random() * secreT.length)]}`)
    message.channel.sendEmbed(embed);
    console.log('[id] Send By: ' + message.author.username)
      }
  });
  
  const Love = [  "**احبك / عدد قطرات المـــطر والشجر وامواج البحر والنجوم الي تتزاحم مبهورة في جمال القمر**.",  "**ساعزفك وساجعلك لحنا تغني عليه جميع قصائد العشــق**.",  "**احبك موت... لاتسألني ما الدليل ارأيت رصاصه تسأل القتيل؟**.",  "**ربما يبيع الانسان شيئا قد شراه لاكن لا يبيع قلبا قد هواه**.",  "**و ما عجبي موت المحبين في الهوى ........... و لكن بقاء العاشقين عجيب**.",   "**حلفت / لاحشـــد جيوش الحب واحتلك مسكين ربي بلاك بعـــاشق ارهـــابي**.",   "**العيــن تعشق صورتك ... والقلب يجري فيه دمك وكل مااسمع صوتك ...شفايفي تقول احبك**.",   "**ياحظ المكان فيك..ياحظ من هم حواليك ...ياحظ الناس تشوفك ... وانا مشتاق اليك**.",   "**لو كنت دمعة داخل عيوني بغمض عليك وصدقي ما راح افتح...ولو كان الثمن عيوني**.",   "**سهل اموت عشانك لكن الصعب اعيش بدونك سهل احبك لكن صعب انساك**.",   "**أخشى ان انظر لعيناك وأنا فى شوق ولهيب لرؤياك**.",   "**أتمنى ان اكون دمعة تولد بعينيك واعيش على خديك واموت عند شفتيك**.",   "**أحياناً أرى الحياة لا تساوى إبتسامة لكن دائماً إبتسامتك هى كيانى**.",   "**من السهل أن ينسى الانسان نفسه .. لكن من الصعب ان ينسى نفساً سكنت نفسه !**.",   "**نفسى أكون نجمة سماك .. همسة شفاك .. شمعة مساك .. بس تبقى معايا وانا معاك**.",   "**أهنئ قلبى بحبك وصبر عينى فى بعدك وأقول إنك نور عينى يجعل روحى فدى قلبك**.", ]
   client.on('message', message => {
     if (message.content.startsWith(prefix + "حب")) {
                  if(!message.channel.guild) return message.reply('** This command only for servers**');
    var embed = new Discord.RichEmbed()
    .setColor('RANDOM')
     .setThumbnail(message.author.avatarURL) 
   .addField('Ţħē ßattaliŏn ❆ الكّْـتيبـﮧ' ,
    `${Love[Math.floor(Math.random() * Love.length)]}`)
    message.channel.sendEmbed(embed);
    console.log('[id] Send By: ' + message.author.username)
      }
  });
  

   client.on('message', message => {
   if (message.content.startsWith(prefix + "مريم")) {
    var mariam= new Discord.RichEmbed()
    .setTitle("لعبة مريم ..")
    .setColor('RANDOM')
    .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
    .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
     message.channel.sendEmbed(mariam);
     message.react("✨")
    }
  });
  
  var memes =["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
  client.on('message', message => {
  if(message.content.startsWith(prefix + 'هل تعلم')) {
       var embed = new Discord.RichEmbed()
  .setImage(memes[Math.floor(Math.random() * memes.length)])
  message.channel.sendEmbed(embed);
  }
  });
  
  var aoasm =[
      {q:"ما عاصمة **افغانستان**",a:"كبل"},
      {q:"ما عاصمة ** البانيا**",a:"تيران"},
      {q:"ما عاصمة **الجزائر **",a:"الجزائر"},
      {q:"ما عاصمة ** **",a:"الجزائر"},
      {q:"ما عاصمة **اندورا لا فيلا **",a:"اندورا"},
      {q:"ما عاصمة **انجولا**",a:"لواندا"},
      {q:"ما عاصمة **انتيجوا وباربودا**",a:"سان جونز"},
      {q:"ما عاصمة **الارجنتين**",a:"بوينس ايرس"},
      {q:"ما عاصمة **ارمينيا**",a:"يريفان"},
      {q:"ما عاصمة ** مصر**",a:"القاهرة"},
      {q:"ما عاصمة ** استراليا**",a:"كانبرا"},
      {q:"ما عاصمة **النمسا**",a:"فيينا"},
      {q:"ما عاصمة ** اذربيجان**",a:"باكو"},
      {q:"ما عاصمة **جزر البهاما**",a:"ناساو"},
      {q:"ما عاصمة **البحرين**",a:"المنامة"},
      {q:"ما عاصمة ** بنجلاديش**",a:"دكـا"},
      {q:"ما عاصمة **باربادوس **",a:"بريدجتاون"},
      {q:"ما عاصمة **بيلا روسيا**",a:"مينسك"},
      {q:"ما عاصمة ** بلجيكا**",a:"بروكسل"},
      {q:"ما عاصمة ** بيليز**",a:"بلوم بان"},
      {q:"ما عاصمة ** بنين**",a:"بورتو نوفو"},
      {q:"ما عاصمة ** بوتان**",a:"ثيمفو"},
      {q:"ما عاصمة **بوليفيا **",a:"لاباز"},
      {q:"ما عاصمة ** البوسنة والهرسك**",a:"سراييفو"},
      {q:"ما عاصمة ** بوتسوانا**",a:"جابورون"},
      {q:"ما عاصمة ** البرازيل**",a:"برازيليا"},
      {q:"ما عاصمة ** بروناى**",a:"بندر سرى بيجاوان"},
      {q:"ما عاصمة ** بلغاريا**",a:"صوفيا"},
      {q:"ما عاصمة ** بوركينا فاسو**",a:"واجادوجو"},
      {q:"ما عاصمة **بوروندى **",a:"بوجومبورا"},
      {q:"ما عاصمة **كمبوديا **",a:"بنوم بنـه"},
      {q:"ما عاصمة ** الكاميرون**",a:"ياوندى"},
      {q:"ما عاصمة ** كندا**",a:"اوتاوا"},
      {q:"ما عاصمة ** الرأس الاخضر**",a:"برايا"},
      {q:"ما عاصمة **تشاد **",a:"نجامينا"},
      {q:"ما عاصمة ** شيلى**",a:"سانتياجو"},
      {q:"ما عاصمة **الصين **",a:"بكين"},
      {q:"ما عاصمة ** **",a:"مورونى"},
      {q:"ما عاصمة **كوستاريكا **",a:"سان خوسيه"},
      {q:"ما عاصمة ** كوت ديفوار**",a:"ابيدجان"},
      {q:"ما عاصمة **كرواتيا **",a:"زغرب"},
      {q:"ما عاصمة ** كوبا**",a:"هافانا"},
      {q:"ما عاصمة ** قبرص**",a:" "},
      {q:"ما عاصمة ** جمهورية التشيك**",a:"براغ"},
      {q:"ما عاصمة **الدنمارك **",a:"كوبنهاجن"},
      {q:"ما عاصمة ** جيبوتى**",a:"جيبوتى"},
      {q:"ما عاصمة ** دومينيكا**",a:"روسيو"},
      {q:"ما عاصمة **الدومينيكان **",a:"سان دومينجو"},
      {q:"ما عاصمة **تيمور الشرقية **",a:"ديلى"},
      {q:"ما عاصمة **قطر  **",a:"الدوحة"},
      {q:"ما عاصمة **السعودية  **",a:"الرياض"},
      {q:"ما عاصمة **سوريا  **",a:"دمشق"},
      {q:"ما عاصمة **تركيا  **",a:"انقرة"},
      {q:"ما عاصمة **العراق  **",a:"بغداد"},
      {q:"ما عاصمة **البنان  **",a:"بيروت"},
      {q:"ما عاصمة **فلسطين  **",a:"القدس"},
      {q:"ما عاصمة **امريكا  **",a:"واشنطن"},
      {q:"ما عاصمة **الاردن  **",a:"عمان"},    
      {q:"ما عاصمة **السودان  **",a:"خرطوم"},
      {q:"ما عاصمة **المانيا  **",a:"برلين"},
      {q:"ما عاصمة **كندا  **",a:"اوتاوا"},
      {q:"ما عاصمة **البرازيل  **",a:"برازيليا"},
      {q:"**ما هي عاصمة**المغرب",a:"الرباط"},
  
      
      
     ];
     client.on("message", async message => {
      if(message.content == prefix+"عواصم"){
          if(UserBlocked.has(message.guild.id)) return message.channel.send("هناك جلسة .")
          UserBlocked.add(message.guild.id)
          var ask = aoasm[Math.floor(Math.random() * aoasm.length)];
          let embed = new Discord.RichEmbed()
          .setTitle('سؤال عواصم')
          .setAuthor(message.author.username, message.author.avatarURL)
          .setColor("RANDOM")
          .setDescription(ask.q);
          message.channel.sendEmbed(embed).then(msg=> msg.delete(20000))
          const msgs = await message.channel.awaitMessages(msg => msg.author.id !== client.user.id ,{maxMatches:1,time:10000});
              UserBlocked.delete(message.guild.id)
          msgs.forEach(result => {
             if(result.author.id == client.user.id) return;
             if(result.content == "عاصمة") return
             if(result.content == ask.a){
  
               let embeds = new Discord.RichEmbed()
               .setTitle(':white_check_mark: اجابة صحيحة')
               .setAuthor(message.author.username, message.author.avatarURL)
               .setColor("RANDOM")
               .setDescription(`**${result.author.username}** الإجابة صحيحة`);
                  message.channel.sendEmbed(embeds);                return;
             } else {
  
                                    var embedx = new Discord.RichEmbed()
                  .setTitle(':x:خطاء')
                  .setAuthor(message.author.username, message.author.avatarURL)
                  .setColor("RANDOM")
                  .setDescription(`**${result.author.username}** الإجابة خاطئة`);
                  message.channel.sendEmbed(embedx);
             }
       });
    }
});




client.on('message', message => {
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + "ping")) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms :signal_strength: ")
.addField('**WebSocket:**',api + " ms :signal_strength: ")
message.channel.send({embed:embed});
}
});

client.on('message',async message => {
    if(message.content.startsWith(prefix + "setCount")) {
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
    message.channel.send('✅| **Done successfully**');
    message.guild.createChannel(`Members Count : [ ${message.guild.members.size} ]` , 'voice').then(c => {
      console.log(`Count Members channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName(`Members Count : [ ${message.guild.members.size} ]`)
      },1000);
    });
    }
});

client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var Me = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle('**يوجد رسائل جديد فى خاص بوت ...**')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`من عند ${message.author.tag} (${message.author.presence.status.toUpperCase()})`)
    client.channels.get("591446346536321034").send({embed:Me});
    }
});

let room = "599140757760245791"

client.on("guildMemberAdd", member => {
    let guild = client.channels.get(room).guild.id

    if(member.guild.id != guild) return;
    client.channels.get(room).setName("Welcome "+member.user.username).then(m=> { setTimeout(() => {
        client.channels.get(room).setName(member.guild.name+" - "+member.guild.members.size)
    }, 3000)})
} )

client.on("guildMemberRemove", member => {
    let guild = client.channels.get(room).guild.id

    if(member.guild.id != guild) return;
    client.channels.get(room).setName("Member Left :(").then(m=> { setTimeout(() => {
        client.channels.get(room).setName(member.guild.name+" - "+member.guild.members.size)
    }, 3000)})
})

client.on("voiceStateUpdate" , (oldMember, newMember) => {
    let guild = client.channels.get(room).guild.id

    if(oldMember.guild.id != guild) return;
    let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel
  if(oldUserChannel === undefined && newUserChannel !== undefined) {
        client.channels.get(room).setName("Hi, "+oldMember.user.username).then(m=> { setTimeout(() => {
            client.channels.get(room).setName(oldMember.guild.name+" - "+oldMember.guild.members.size)
            }, 3000)})
  } else if(newUserChannel === undefined){
        client.channels.get(room).setName("Bye, "+oldMember.user.username).then(m=> { setTimeout(() => {
            client.channels.get(room).setName(oldMember.guild.name+" - "+oldMember.guild.members.size)
        }, 3000)})
  }
} )


client.on('message', (message) => {
    if(message.author.bot) return;
    if(message.content.startsWith(prefix + 'quran')) {
        let codes = message.content.split(' ').slice(1);
        let num;
        if(!codes[0] || isNaN(codes[0])) num = 1
        else num = parseInt(codes[0])
       
        // Embed Of Quran
        let embed = new Discord.RichEmbed()
        .setAuthor("Quran | القرآن", client.user.displayAvatarURL)
        .setTitle("صفحات القرآن الكريم")
        .setImage(getURLCodes(num))
        .setFooter(getFooterCodes(num))
        // Reactions
        let l = '➡';
        let p = '⏹';
        let r = '⬅';
        // Filters
        let lF = (reaction, user) => reaction.emoji.name == l && user.id == message.author.id;
        let pF = (reaction, user) => reaction.emoji.name == p && user.id == message.author.id;
        let rF = (reaction, user) => reaction.emoji.name == r && user.id == message.author.id;
        message.channel.send(embed).then(async msg => {
            await msg.react(r)
            await msg.react(p)
            await msg.react(l)
            // Collecters
            let lC = msg.createReactionCollector(lF)
            let pC = msg.createReactionCollector(pF)
            let rC = msg.createReactionCollector(rF)
            lC.on('collect', codes => {
                if(num == 604) return;
                num++;
                embed.setImage(getURLCodes(num))
                embed.setFooter(getFooterCodes(num))
                msg.reactions.forEach(reaction => {
                    reaction.fetchUsers().then(usersCodes => {
                        usersCodes.forEach(user => {
                            if(user.bot) return;
                            reaction.remove(user)
                        })
                    })
                })
                msg.edit(embed)
            })
            pC.on('collect', codes => {
                message.channel.send("سيتم اغلاق المصحف خلال 5 ثواني").then(codes => {
                    codes.delete(5000)
                    msg.delete(5000)
                    message.delete(5000)
                })
            })
            rC.on('collect', codes => {
                if(num == 1) return;
                num--;
                embed.setImage(getURLCodes(num))
                embed.setFooter(getFooterCodes(num))
                msg.reactions.forEach(reaction => {
                    reaction.fetchUsers().then(users => {
                        users.forEach(user => {
                            if(user.bot) return;
                            reaction.remove(user)
                        })
                    })
                })
                msg.edit(embed)
            })
        })
    }
})
function getURLCodes(num) {
    return `http://quran.ksu.edu.sa/ayat/safahat1/${num}.png`
}
function getFooterCodes(num) {
    return `الصفحة رقم ${num} من أصل 604 صفحة`
}


client.on('message',async message => {
  if(message.content.startsWith("#setvoice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('? **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('? **ليس معي الصلاحيات الكافية**');
  message.channel.send('?| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
    },1000);
  });
  }
});

/*
client.on('message', message => {
  if(message.content.startsWith ("#marry")) {
  if(!message.channel.guild) return message.reply('** This command only for servers **')
  var proposed = message.mentions.members.first()
 
  if(!message.mentions.members.first()) return message.reply(' ?? **لازم تطلب ايد وحدة**').catch(console.error);
  if(message.mentions.users.size > 1) return message.reply(' ?? **ولد ما يصحلك الا حرمة وحدة كل مرة**').catch(console.error);
   if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
    if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
          message.channel.send(`**${proposed} 
بدك تقبلي عرض الزواج من ${message.author} 
العرض لمدة 15 ثانية  
اكتبي موافقة او لا**`)

const filter = m => m.content.startsWith("موافقة");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
message.channel.send(` **${message.author} و ${proposed} الف الف مبروك الله , يرزقكم الذرية الصالحة** `);
})

const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
message.channel.send(`  **${message.author} تم رفض عرضك** `);
})
    
}
});

*/

client.on('message', message => {
    if(message.content.includes("<@559007951906537472>")) { 
    message.channel.startTyping()
    setTimeout(() => {
    message.channel.stopTyping() 
    }, 10000);
    } 
});



//bc

client.on("message", message => {
    if (message.content.startsWith("#obc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
  });


//bc online


  client.on("message", message => {
  
              if (message.content.startsWith(prefix + "bc")) {
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`);
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المستلمين `); 
   message.delete(); 
  };     
  });

client.on('message', message => {
    var  user = message.mentions.users.first() || message.author;
if (message.content.startsWith(".avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});

client.on('ready',  () => {
    console.log('تم تشغيل :Broadcast  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });

  client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('#adminbc')){
if(!message.author.id === '589175566457110534') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


const developers = ["589175566457110534","id"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});


client.on('message', message => {
    if (message.content.startsWith("#hack")) {
        if(!message.author.id === '') return;
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
 
                   let virusname = args.join(' ');
                 if (virusname < 1) { /// Edit By KillerFox
                     return message.channel.send("**```اكتب اسم الشخص الي تبي يتهكر```**");
                 }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
             }, 1000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓ ] 2%').setColor(0xFF0000)})
             }, 2000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓ ] 3%').setColor(0xFF0000)})
             }, 3000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓ ] 4%').setColor(0xFF0000)})
             }, 4000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓ ] 20%').setColor(0xFF0000)})
             }, 5000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 30%').setColor(0xFF0000)})
             }, 6000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 40%').setColor(0xFF0000)})
             }, 7000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 50%').setColor(0xFF0000)}) /// Edit By KillerFox
             }, 8000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 70%').setColor(0xFF0000)}) /// Edit By KillerFox
             }, 9000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 85%').setColor(0xFF0000)})
             }, 10000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 90%').setColor(0xFF0000)})
             }, 11000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 95%').setColor(0xFF0000)})
             }, 12000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 96%').setColor(0xFF0000)})
             }, 13000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 97%').setColor(0xFF0000)})
             }, 14000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 98%').setColor(0xFF0000)})
             }, 15000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 99%').setColor(0xFF0000)})
             }, 16000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%').setColor(0xFF0000)})
             }, 17000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:' + virusname + 'done it\'s going good 100.9%').setColor(0xFF0000)})
             }, 18000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: يتم تهكير ').setColor(0xFF0000)})
             }, 19000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: تحديث بسيط' + virusname + ".key").setColor(0xFF0000)})
             }, 22000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: يرجى انتضار ثواني 5...').setColor(0xFF0000)})
             }, 25000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: يرجى انتضار ثواني 4...').setColor(0xFF0000)})
             }, 26000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: يرجى انتضار ثواني 3...').setColor(0xFF0000)})
             }, 27000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: يرجى انتضار ثواني 2...').setColor(0xFF0000)})
             }, 28000)
                setTimeout(function() { /// Edit By KillerFox
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: يرجى انتضار ثواني 1...').setColor(0xFF0000)})
             }, 29000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 99%').setColor(0xFF0000)}) /// Edit By KillerFox
           }, 30000)
              setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]100% virus added').setColor(0xFF0000)}) /// Edit By KillerFox
           }, 31000)
              setTimeout(function() {
               m.delete() /// Edit By KillerFox
           }, 32000)
             setTimeout(function() {
               message.channel.send('** ! تمت عمليه التهكير بنجاح **')
           }, 33000)
           });
         }
 })




  
client.on('message', message => { 
    if(message.channel.type === 'dm') {
        var guildID = '583672965653069863';
        if(message.content.includes('discord.gg/')) {
            var member = client.guilds.find(g => g.id === guildID).members.find(m => m.id === message.author.id);
            member.kick({ reason: 'ADS In Private.' }).catch();
        }
    }
});



client.on('message', async message => {
    if(message.content.includes('discord.gg')){ 
        if(message.member.hasPermission("MANAGE_GUILD")) return;
if(!message.channel.guild) return;
message.delete()
  var command = message.content.split(" ")[0];
let muterole = message.guild.roles.find(`name`, "Muted");
if(!muterole){
try{
muterole = await message.guild.createRole({
  name: "Muted",
  color: "#000000",
  permissions:[]
})
message.guild.channels.forEach(async (channel, id) => {
  await channel.overwritePermissions(muterole, {
    SEND_MESSAGES: false,
    ADD_REACTIONS: false
  });
});
}catch(e){
console.log(e.stack);
}
}
   if(!message.channel.guild) return message.reply('** This command only for servers**');
message.member.addRole(muterole);
const embed500 = new Discord.RichEmbed()
.setTitle("Muted Ads")
    .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
    .setColor("c91616")
    .setThumbnail(`${message.author.avatarURL}`)
    .setAuthor(message.author.username, message.author.avatarURL)
.setFooter(`${message.guild.name} `)
message.channel.send(embed500)
message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');


}
})


client.on('message', message => {
        if (message.content.startsWith(prefix + "uptime")) {
    let ms = client.uptime;
    let cd = 24 * 60 * 60 * 1000; // Calc days
    let ch = 60 * 60 * 1000; // Calc hours
    let cm = 60 * 1000; // Calc minutes
    let cs = 1000; // Calc seconds
    let days = Math.floor(ms / cd);
    let dms = days * cd; // Days, in ms
    let hours = Math.floor((ms - dms) / ch);
    let hms = hours * ch; // Hours, in ms
    let minutes = Math.floor((ms - dms - hms) / cm);
    let mms = minutes * cm; // Minutes, in ms
    let seconds = Math.round((ms - dms - hms - mms) / cs);
    if (seconds === 60) {
        minutes++; // Increase by 1
        seconds = 0;
    }
    if (minutes === 60) {
        hours++; // Inc by 1
        minutes = 0;
    }
    if (hours === 24) {
        days++; // Increase by 1
        hours = 0;
    }
    let dateStrings = [];

    if (days === 1) {
        dateStrings.push('**1** day');
    } else if (days > 1) {
        dateStrings.push('**' + String(days) + '** days');
    }

    if (hours === 1) {
        dateStrings.push('**1** hour');
    } else if (hours > 1) {
        dateStrings.push('**' + String(hours) + '** hours');
    }

    if (minutes === 1) {
        dateStrings.push('**1** minute');
    } else if (minutes > 1) {
        dateStrings.push('**' + String(minutes) + '** minutes');
    }

    if (seconds === 1) {
        dateStrings.push('**1** second');
    } else if (seconds > 1) {
        dateStrings.push('**' + String(seconds) + '** seconds');
    }

    let dateString = '';
    for (let i = 0; i < dateStrings.length - 1; i++) {
        dateString += dateStrings[i];
        dateString += ', ';
    }
    if (dateStrings.length >= 2) {
        dateString = dateString.slice(0, dateString.length - 2) + dateString.slice(dateString.length - 1);
        dateString += 'and ';
    }
    dateString += dateStrings[dateStrings.length - 1];
    message.channel.send(dateString);
}
});

client.on('message', message => {
  
if (message.content.startsWith(prefix + 'perm')) {
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var zPeRms = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(':tools: Permissions')
         .addField('Your Permissions:',perms)
                  message.channel.send({embed:zPeRms});

    }
});





client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command === "&mute") {
          if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');
                  if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **");
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'ℓσg');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (!modlog) return message.reply("**لا يوجد الروم المراد ارسال المعلومات له 'α∂мιηѕ'**");
  if (message.mentions.users.size < 1) return message.reply("**:rolling_eyes: I can't find this member**");
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField(' Mute ', ' | :white_check_mark: |')
    .addField('تم اعطاء الميوت ل', `${user.username}#${user.discriminator} `)
    .addField('السبب', '**تعكير نظام الشات**')
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   message.channel.send({embed: embed});

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  }

};
    if (command === "&unmute") {
          if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **");
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'ℓσg');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **");
  if (!modlog) return message.reply("**لا يوجد الروم المراد ارسال المعلومات له 'α∂мιηѕ'**");
  if (message.mentions.users.size < 1) return message.reply("**:rolling_eyes: I can't find this member**");
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField('UnMute ', ' | :white_check_mark: |')
    .addField('تم فك الميوت عن', `${user.username}#${user.discriminator} `)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   message.channel.send({embed: embed});

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **');

  if (message.guild.member(user).removeRole(muteRole.id)) {
      client.channels.get(modlog.id).send({embed});
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed});
    });
  }

};


});

client.on("guildDelete", guild => {
console.log(`**The King Bot** Leave From Server -- = ${guild.name} = -- , Server Owner -- = ${guild.owner.user.username} = --`)
client.channels.get("591446346536321034").send('**Ţħē ßattaliŏn Bot** ``Kicked`` From Server - -- = '+`**${guild.name}**`+' = -- '+'**Server Owner** -- =' +`**${guild.owner.user.username}**` +'= --')
});

client.on("guildCreate", guild => {
client.channels.get("591446346536321034").send(`**Ţħē ßattaliŏn Bot** has been **added** ❤ from this server **(${guild.name})** , Server Owner 👑 **(${guild.owner.user.username})**`)
});

client.on("guildDelete", guild => {
client.channels.get("591446346536321034").send(`**Ţħē ßattaliŏn Bot** has been **removed** 😔 from this server **(${guild.name})** , Server Owner 👑 **(${guild.owner.user.username})**`)
});

client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
      guild.owner.send(embed)
});

client.on('message', message => {
    var prefix = "#"
    if (message.content === prefix + "date") {
        var currentTime = new Date(),
            السنة = currentTime.getFullYear(),
            الشهر = currentTime.getMonth() + 1,
            اليوم = currentTime.getDate();
        message.channel.sendMessage( "التاريخ : " + اليوم + "-" + الشهر + "-" +السنة)
    }
});

client.on("message", (message) => {
if (message.content.startsWith("#ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});


client.on("message", (message) => {
if (message.content.startsWith("#cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});

client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`عضو جديد`)
    .setDescription(`اهلا بك في السيرفر`)
    .addField(' :bust_in_silhouette:  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('GREEN')
    .setFooter('Ţħē ßattaliŏn Bot', 'https://cdn.discordapp.com/icons/390551815072251904/418fa2788d8115808951c9881ba8f190.jpg')

var channel =member.guild.channels.find('name', 'ℓσg')
if (!channel) return;
channel.send({embed : embed});
});

client.on('guildMemberRemove', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`خرج عضو`)
    .setDescription(`الى اللقاء...`)
    .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('RED')
    .setFooter(`Ţħē ßattaliŏn Bot`, '')

var channel =member.guild.channels.find('name', 'ℓσg')
if (!channel) return;
channel.send({embed : embed});
});


client.on('message', message => {
    var prefix = "#"
    let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);


if(command == "draw") {
    var Canvas = require('canvas')
  , Image = new Canvas.Image
  , canvas = new Canvas(450, 170)
  , ctx = canvas.getContext('2d');
  ctx.font = '30px Impact';
  let args = message.content.split(" ").slice(1);
  
Image.src = canvas.toBuffer();

    console.log(Image);
ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
ctx.fillText(args.join("  "),110, 70);


ctx.beginPath();
ctx.lineTo(50, 102);
ctx.stroke();

message.channel.sendFile(canvas.toBuffer());
}
}).on('ready', () => {

});


client.on('message', message => {
         if (message.content === prefix + "dt") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');  
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            } 
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
 

                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                .setTitle( "『التاريخ  والوقت』")
                .setColor('RANDOM')
                .setFooter(message.author.username, message.author.avatarURL)
                .addField('الامارات',
                "『"+ hours + ":" + minutes +":"+ seconds + "』")
                 .addField('مكه المكرمه',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』") 
                .addField('مصر',
                "『"+ hours3 + ":" + minutes +":"+ seconds  + "』") 
                
                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year +  "』")

                 message.channel.sendEmbed(Date15);
        }
    });

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

client.on('message',async message => {
  var room;
  var title;
  var duration;
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
     //return message.channel.send(':heavy_multiplication_x:| **هذا الامر معطل حاليا.. ``حاول في وقت لاحق``**');
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **من فضلك اكتب اسم الروم**`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **لم اقدر على ايجاد الروم المطلوب**');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit(':eight_pointed_black_star:| **اكتب مدة القيف اواي بالدقائق , مثال : 60**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':eight_pointed_black_star:| **واخيرا اكتب على ماذا تريد القيف اواي**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, message.guild.iconURL)
                  .setTitle(title)
                  .setDescription(`المدة : ${duration / 60000} دقائق`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('💖');
                     setTimeout(() => {
                       let users = m.reactions.get("💖").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**لم يتم التحديد**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('انتهى القيف اواي !',`الفائز هو : ${gFilter}`)
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`:heavy_check_mark:| **تم اعداد القيف اواي**`);
                } catch(e) {
                  msgg.edit(`:heavy_multiplication_x:| **لم اقدر على اعداد القيف اواي بسبب نقص الخصائص**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});




client.on('message',async message => {
  if(message.content.startsWith(prefix + "setTime")) {
  if(!message.guild.member(message.author).hasPermission('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermission(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **Done successfully**');
  message.guild.createChannel("🕐 - Time  00", 'voice').then((c) => {
    console.log(`Time channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
        setInterval(function() {
 
      var currentTime = new Date(),
      hours = currentTime.getHours() + 3 ,
      minutes = currentTime.getMinutes(),
      seconds = currentTime.getSeconds(),
      years = currentTime.getFullYear(),
      month = currentTime.getMonth(),
      day = currentTime.getDate(),
      week = currentTime.getDay();
 
      if (minutes < 10) {
          minutes = "0" + minutes;
      }
      var suffix = "AM";
      if (hours >= 12) {
          suffix = "PM";
          hours = hours - 12;
      }
      if (hours == 0) {
          hours = 12;
      }
 
      c.setName("🕐 - Time   「" + hours + ":" + minutes  +" " + suffix + "」");
    },1000);
  });
  }
});
 
 
 
client.on('message',async message => {
  if(message.content.startsWith(prefix + "setDate")) {
      var currentTime = new Date(),
      years = currentTime.getFullYear(),
      month = currentTime.getMonth() + 1,
      day = currentTime.getDate(),
      week = currentTime.getDay();
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **Done successfully**');
  message.guild.createChannel("📅 - Date " + "「" + day + "-" + month + "-" + years + "」" , 'voice').then(c => {
    console.log(`Date channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(function() {
      c.setName("📅 - Date " + "「" + day + "-" + month + "-" + years + "」")
    },1000);
  });
  }
});




client.on("ready", () => { 
  const channel = client.channels.get("599140757760245791"); 
  if (!channel) return console.error("The channel does not exist!");
  channel.join().then(connection => {
    console.log("Successfully connected.");
  }).catch(e => { 
    console.error(e);
  });
});








client.on('ready', function(){
    var ms = 10000 ;
    var setGame = [' #help','Ţħē ßattaliŏn','الكّْـتيبـﮧ',' Ţħē ßattaliŏn ',' #help'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/iXMiDo`);
    }, ms);
});

client.on('message', msg => {
  if(msg.content === 'اخفاء') {
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: false,
        READ_MESSAGES: false
      })
    })
    msg.channel.send('.')
  }
})  

//اضهار
client.on('message', msg => {
  if(msg.content === 'اضهار') {
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true
      })
    })
    msg.channel.send('.')
  }
})


 client.on('message', message => {
    if (message.content.startsWith("رابط")) {
 
  message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
---------------------
-هذا الرابط صالح للأستخدام 5 مرات 
---------------------
-هذا الرابط صالح لمده 24 ساعه 
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
}); 

client.on('message', message => {

 

    if (message.content === "ابو حسين يكول سد الشات ") {

                        if(!message.channel.guild) return message.reply(' This command only for servers');

 

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');

           message.channel.overwritePermissions(message.guild.id, {

         SEND_MESSAGES: false

 

           }).then(() => {

               message.reply("تم تقفيل الشات :white_check_mark: ")

           });

             }

 

if (message.content === "ابو حسين سد الشات") {

    if(!message.channel.guild) return message.reply(' This command only for servers');

 

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');

           message.channel.overwritePermissions(message.guild.id, {

         SEND_MESSAGES: true

 

           }).then(() => {

               message.reply("تم فتح الشات:white_check_mark:")

           });

             }

 

 

 

});






client.on('message', message => {
  
  if (!message.guild) return;

 
  if (message.content.startsWith('#kick')) {
    
    
    const user = message.mentions.users.first();
    
    if (user) {
      
      const member = message.guild.member(user);
      
      if (member) {
       
        member.kick('Optional reason that will display in the audit logs').then(() => {
         
          message.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {
          
          message.reply(':rolling_eyes:  You can\'t kick this member!');
          
          console.error(err);
        });
      } else {
        
        message.reply(':rolling_eyes: I can\'t find this member!');
      }
    
    } else {
      message.reply(':rolling_eyes: I can\'t find this member!');
    }
  }
});





client.on('message', message => {
  
  if (!message.guild) return;

  
  if (message.content.startsWith('#ban')) {
    
    const user = message.mentions.users.first();
    
    if (user) {
      
      const member = message.guild.member(user);
      
      if (member) {
       
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          
          message.reply(`Successfully banned ${user.tag}`);
        }).catch(err => {
          
          message.reply('I was unable to ban the member');
          
          console.error(err);
        });
      } else {
        
        message.reply('That user isn\'t in this guild!');
      }
    } else {
    
      message.reply(':rolling_eyes: I can\'t find this member!');
    }
  }
});










const clinet = new Discord.Client(); // فتح حساب جديد في المكتبه


var token = '"NDI5OTY2MzMyMDA0NjYzMjk2.XTgvCg.n-KifE6J8rGJRMQ4XO3tTZFaMMg"' // توكن البوت


client.on('ready', () => { // عند تشغيل البوت
    console.log('Login as '+ client.user.tag) // اضهار اسم البوت والتاق في الكونسول
    
}); // نهاية كود البدء


client.on('guildMemberAdd', member => {

        if (member.guild.id === "604228161064009729")  {  // ايدي سيرفرك

  client.channels.get("604273871264284675").send(`Welcome ${member} To ${member.guild.name}`) // وضع ايدي الروم المراد الترحيب به
}
   });
   
/*

*/


client.login("NjA0MjE4ODMzMDE1Nzk5ODA5.XTqxAg.s5dk8Du9sfwHiy6n6E4QjWlnUqI")
