/////////////////////CONSTANTES/////////////////////
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`El Ping recibido es ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); 

const Discord = require("discord.js"); 
const client = new Discord.Client(); 
const config = require("./config.json"); 
/////////////////////PRESENCIA/////////////////////
function presence(){
    client.user.setPresence({
        status      : "online",
        activity    : {
            name    : "como ella te cambia por otro, F",
            type    : "WATCHING"
        }
    })
}

client.on("ready", () => {
   presence();
});

client.on("guildMemberAdd", miembro =>{
  var Canal = client.channels.cache.get("737127649276592138");
  Canal.send("Hey CPP <@" + miembro.id + "> , Bienvenido a :fire: :flag_pe: Cholo Army :flag_pe: :fire:!\n\nRecuerda usar el codigo `.help` para obtener la información de comandos de respuesta de nuestro bot.");

});



//debería funcar esta wbda de comando para dar el rol al entrar csm

//arreglar esta weaaaaa
/*
client.on('guildMemberAdd', miembro => {
  let rol = member.guild.roles.find("name","741454569959063618")//aqui busca el rol
  miembro.addRole(rol)//esto da el rol 
});
*/

/////////////////////VARIABLES/////////////////////
let prefix = config.prefix;
/////////////////////MENSAJES/////////////////////
client.on("message", (message) => {
    //Evitar bucle
if(message.author.bot) return;
if(!message.content.startsWith(prefix)) return;
    //Comandos
    const args = message.content.slice(prefix.length).trim().split(/ + /g);
    const command = args.shift().toLowerCase();

if(command === "hola"){
    message.channel.send("Habla pe kknero! GAAA")
}
if(command === "bais"){
    message.channel.send("Alamos pe causa!")
}
if(command === "jaja"){
    message.channel.send("jajjjajzZZZZZZZZZZZZZ")
}
if(command === "ok"){
    message.channel.send("YA PAPI CHVRE TU COMENTARIZZZZZZZZZZZZZZ")
}

/////////////////////EMBEDS/////////////////////


if(command === "help"){
    const embed = new Discord.MessageEmbed()
    .setTitle("Comandos")
    .setColor(0xB62EFF)
    .setDescription("Recuerda usar un `punto '.'` como prefijo para el comando")
    .addField("Comandos de Texto : ","`.hola`, `.bais`, `.jaja`, `.ok`", true)
    .addField("Comandos de Imagenes : ","`.jajaja` ,`.candia`, `.xd`, `.ya`, `.tusa`, `.austin`, `.decision`, `.achicando`, `.atencion`, `.follar`, `.zzzz`, `.detalle`, `.hacker`, `.culos`, `.asu`, `.patricio`, `.kgado`, `.chaufa`, `.patrona`, `.cachetada`, `.:o`, `.camara`, `.desahuevate`")
    .setAuthor(client.user.username, client.user.avatarURL())
    .setThumbnail("https://media.giphy.com/media/U7bo3ZBR8lcKSmGdlT/giphy.gif");
message.channel.send(embed);
  }


/////////////////////IMAGENES/////////////////////

if(command === "jajaja"){
    const img = new Discord.MessageAttachment("https://media.discordapp.net/attachments/738235429060345908/738249226357833778/IMG_20200729_231815.jpg?width=893&height=658")
    message.channel.send(img);
}
if(command === "candia"){
    const img = new Discord.MessageAttachment("https://media.discordapp.net/attachments/738235429060345908/738249897647669258/images_81.jpeg")
    message.channel.send(img);
}
if(command === "xd"){
    const img = new Discord.MessageAttachment("https://media.discordapp.net/attachments/738235429060345908/738250633550889090/FB_IMG_1589862534353.jpg")
    message.channel.send(img);
}
if(command === "ya"){
    var ya = ["https://media.discordapp.net/attachments/738235429060345908/738250633710403594/FB_IMG_1588879940063.jpg","https://media.discordapp.net/attachments/738538710777331732/743515600877387817/FB_IMG_1597206513658.jpg?width=683&height=658"]
  
     //variable "random" escoge un valor de acuerdo al tamaño en forma aleatoria del arreglo "ya" 
  var random = Math.floor(Math.random()*(ya.length));

      //envía una imagen aleatoria del arreglo 
  message.channel.send(ya[random]);
}

if(command === "tusa"){
    const img = new Discord.MessageAttachment("https://media.discordapp.net/attachments/738235429060345908/738250633936633947/FB_IMG_1588486789426.jpg?width=946&height=658")
    message.channel.send(img);
}
if(command === "austin"){
    const img = new Discord.MessageAttachment("https://media.discordapp.net/attachments/738235429060345908/738251576166318180/FB_IMG_1587477832824.jpg")
    message.channel.send(img);
}
if(command === "decision"){
    const img = new Discord.MessageAttachment("https://media.discordapp.net/attachments/738235429060345908/738251576313118786/FB_IMG_1586012280749.jpg")
    message.channel.send(img);
}

if(command === "bob"){
    var bob = ["https://media.discordapp.net/attachments/738235429060345908/738251576539349082/FB_IMG_1585755441108.jpg","https://media.discordapp.net/attachments/738235429060345908/738251576770297916/FB_IMG_1585755436066.jpg","https://media.discordapp.net/attachments/738235429060345908/738251577042665513/FB_IMG_1585755411021.jpg","https://media.discordapp.net/attachments/738235429060345908/738251577210568736/FB_IMG_1585755368752.jpg","https://media.discordapp.net/attachments/738235429060345908/738251577634193458/FB_IMG_1585755292195.jpg"]
  
     //variable "random" escoge un valor de acuerdo al tamaño en forma aleatoria del arreglo "bob" 
  var random = Math.floor(Math.random()*(bob.length));

      //envía una imagen aleatoria del arreglo 
  message.channel.send(bob[random]);
}

if(command === "achicando"){
    const img = new Discord.MessageAttachment("https://media.discordapp.net/attachments/738235429060345908/738251577432735814/FB_IMG_1585755324042.jpg")
    message.channel.send(img);
}
if(command === "atencion"){
    const img = new Discord.MessageAttachment("https://media.discordapp.net/attachments/738235429060345908/738251578045235260/FB_IMG_1585237173278.jpg")
    message.channel.send(img);
}
if(command === "follar"){
    const img = new Discord.MessageAttachment("https://media.discordapp.net/attachments/738235429060345908/738251577856622713/FB_IMG_1585752714821.jpg")
    message.channel.send(img);
}
//Enviando con el comando zzzz varias imagenes en orden aleatorio
if(command === "zzzz"){
  var zeta = ["https://media.discordapp.net/attachments/738538710777331732/738588610491842580/FB_IMG_1596163645285.jpg", "https://media.discordapp.net/attachments/749389967507062945/749392169705406535/52d4900d-51c2-4f43-9151-4848545a614b.jpeg","https://media.discordapp.net/attachments/749389967507062945/749392178991726622/9847e210-6b5e-4645-8aa2-01d861d4a119.jpeg", "https://media.discordapp.net/attachments/749389967507062945/749392182703816704/a09feb05-0dfc-4c97-b0bb-71cadd225d22.jpeg"]

  //variable "random" escoge un valor de acuerdo al tamaño en forma aleatoria del arreglo "zeta" 
  var random = Math.floor(Math.random()*(zeta.length));

  //envía una imagen aleatoria del arreglo 
  message.channel.send(zeta[random]);
}

if(command === "detalle"){
    const img = new Discord.MessageAttachment("https://media.discordapp.net/attachments/738486906945274018/738817319073218580/1.jpeg")
    message.channel.send(img);
}
if(command === "hacker"){
    const img = new Discord.MessageAttachment("https://media.discordapp.net/attachments/738486906945274018/738817332691861512/3.jpeg")
    message.channel.send(img);
}
if(command === "culos"){
    const img = new Discord.MessageAttachment("https://media.discordapp.net/attachments/738486906945274018/738817330921996308/2.jpeg")
    message.channel.send(img);
}
if(command === "asu"){
    const img = new Discord.MessageAttachment("https://media.discordapp.net/attachments/738486906945274018/738817334378233907/4.jpeg")
    message.channel.send(img);
}
if(command === "patricio"){
    const img = new Discord.MessageAttachment("https://media.discordapp.net/attachments/738486906945274018/738817337452658818/6.jpeg")
    message.channel.send(img);
}
if(command === "kgado"){
    const img = new Discord.MessageAttachment("https://media.discordapp.net/attachments/738486906945274018/738817335724343357/5.jpeg")
    message.channel.send(img);
}
if(command === "chaufa"){
    const img = new Discord.MessageAttachment("https://media.discordapp.net/attachments/738486906945274018/738817340640067584/8.jpeg")
    message.channel.send(img);
}
if(command === "patrona"){
    const img = new Discord.MessageAttachment("https://media.discordapp.net/attachments/738486906945274018/738817342976426054/9.jpeg?width=695&height=658")
    message.channel.send(img);
}
if(command === "cachetada"){
    const img = new Discord.MessageAttachment("https://media.discordapp.net/attachments/738486906945274018/738817344737902612/10.jpeg")
    message.channel.send(img);
}

if(command === ":o"){
    var sor = ["https://media.discordapp.net/attachments/738486906945274018/738817339344027648/7.jpeg?width=465&height=658",      "https://media.discordapp.net/attachments/738486906945274018/738817362341396630/11.jpeg", "https://media.discordapp.net/attachments/738486906945274018/738817374597152829/14.jpeg"]
  
     //variable "random" escoge un valor de acuerdo al tamaño en forma aleatoria del arreglo "sor" 
  var random = Math.floor(Math.random()*(sor.length));

      //envía una imagen aleatoria del arreglo 
  message.channel.send(sor[random]);
}

if(command === "camara"){
    const img = new Discord.MessageAttachment("https://media.discordapp.net/attachments/738486906945274018/738817368440176711/12.jpeg?width=887&height=658")
    message.channel.send(img);
}
if(command === "desahuevate"){
    const img = new Discord.MessageAttachment("https://media.discordapp.net/attachments/738486906945274018/738817371912929281/13.jpeg")
    message.channel.send(img);
}
if(command === "ya2"){
    const img = new Discord.MessageAttachment("https://media.discordapp.net/attachments/738538710777331732/743515600877387817/FB_IMG_1597206513658.jpg?width=683&height=658")
    message.channel.send(img);
}


});



client.login(process.env.TOKEN); 