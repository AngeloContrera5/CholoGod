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


/////////////////////CONSTANTES2/////////////////////
const Discord = require("discord.js"); 
Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android"
const client = new Discord.Client(); 
const config = require("./config.json");

/////////////////////VARIABLES/////////////////////

let prefix = config.prefix;
/////////////////////PRESENCIA/////////////////////
function presence(){
    client.user.setPresence({
        status      : "online",
        activity    : {
            name    : "codigo lagarto",
            type    : "PLAYING"
        }
    })
}

client.on("ready", () => {
   presence();
});

client.on("guildMemberAdd", miembro =>{
  var Canal = client.channels.cache.get("737127649276592138");
  Canal.send("Hey CPP <@" + miembro.id + "> , Bienvenido a :fire: :flag_pe: Inca Nation :flag_pe: :fire:!\n\nRecuerda usar el comando `.help` para obtener la información de los comandos de respuesta de nuestro bot.");
});



  /////////////////////MENSAJES/////////////////////
  client.on("message", (message) => {

    //Evitar bucle
  if (message.author.bot) return

//comandos
  if(message.content.startsWith("hola")) {
   message.channel.send("Hola UwU")
  }
   if(message.content.startsWith("bye")) {
   message.channel.send("Yo también safo loco")
  }

  if(message.content.startsWith("jaja")) {
    var jaja = ["https://media.discordapp.net/attachments/738235429060345908/738249226357833778/IMG_20200729_231815.jpg?width=893&height=658","jajjjajzZZZZZZZZZZZZZ"]

  //variable "random" escoge un valor de acuerdo al tamaño en forma aleatoria del arreglo "ya" 
    var random = Math.floor(Math.random()*(jaja.length));
  
        //envía una imagen aleatoria del arreglo 
    message.channel.send(jaja[random]);

}

   if(message.content.startsWith("ok")) {
   message.channel.send("YA PAPI CHVRE TU COMENTARIZZZZZZZZZZZZZZ")
  }
  if(message.content === "ya"){
      var ya =   ["https://media.discordapp.net/attachments/738235429060345908/738250633710403594/FB_IMG_1588879940063.jpg",   "https://media.discordapp.net/attachments/738538710777331732/743515600877387817/FB_IMG_1597206513658.jpg?width=683&height=658"]
    
       //variable "random" escoge un valor de acuerdo al tamaño en forma aleatoria del arreglo "ya" 
    var random = Math.floor(Math.random()*(ya.length));
  
        //envía una imagen aleatoria del arreglo 
    message.channel.send(ya[random]);
  }
  if(message.content === ":0"){
      var sor =   ["https://media.discordapp.net/attachments/738486906945274018/738817339344027648/7.jpeg",        "https://media.discordapp.net/attachments/738486906945274018/738817362341396630/11.jpeg",   "https://media.discordapp.net/attachments/738486906945274018/738817374597152829/14.jpeg"]

       //variable "random" escoge un valor de acuerdo al tamaño en forma aleatoria del arreglo  "sor" 
    var random = Math.floor(Math.random()*(sor.length));

        //envía una imagen aleatoria del arreglo 
    message.channel.send(sor[random]);
  }

  if(message.content.startsWith("zzzz")) {
  var zeta = ["https://media.discordapp.net/attachments/738538710777331732/738588610491842580/FB_IMG_1596163645285.jpg", "https://media.discordapp.net/attachments/749389967507062945/749392169705406535/52d4900d-51c2-4f43-9151-4848545a614b.jpeg","https://media.discordapp.net/attachments/749389967507062945/749392178991726622/9847e210-6b5e-4645-8aa2-01d861d4a119.jpeg", "https://media.discordapp.net/attachments/749389967507062945/749392182703816704/a09feb05-0dfc-4c97-b0bb-71cadd225d22.jpeg"]

  //variable "random" escoge un valor de acuerdo al tamaño en forma aleatoria del arreglo "zeta" 
  var random = Math.floor(Math.random()*(zeta.length));

  //envía una imagen aleatoria del arreglo 
  message.channel.send(zeta[random]);
}


if(message.content.startsWith("xd")){
    const img = new Discord.MessageAttachment("https://media.discordapp.net/attachments/738235429060345908/738250633550889090/FB_IMG_1589862534353.jpg")
    message.channel.send(img);
}

if(message.content === "silencio"){
    const img = new Discord.MessageAttachment("https://media.discordapp.net/attachments/749389967507062945/824083978536747028/IMG-20210323-WA0006.jpg")
    message.channel.send(img);
}

if(message.content === "asu"){
    const img = new Discord.MessageAttachment("https://media.discordapp.net/attachments/738486906945274018/738817334378233907/4.jpeg")
    message.channel.send(img);
}

  

  if(!message.content.startsWith(prefix)) return;
    //Comandos
    const args = message.content.slice(prefix.length).trim().split(/ + /g);
    const command = args.shift().toLowerCase();

  /////////////////////EMBEDS/////////////////////


if(command === "help"){
    const embed = new Discord.MessageEmbed()
    .setTitle("Comandos")
    .setColor(0xB62EFF)
    .setDescription("Recuerda usar un `punto '.'` como prefijo para el comando")
    .addField("Comandos de Imagenes : ","`.candia`,`.tusa`, `.austin`, `.decision`, `.achicando`, `.atencion`, `.follar`, `.detalle`, `.hacker`, `.culos`, `.patricio`, `.kgado`, `.chaufa`, `.patrona`, `.cachetada`, `.camara`, `.desahuevate`")
    .addField("Streamers: ","[AckerBoy](https://www.facebook.com/gaming/ackerboytv)", true)
    .addField("Streamers: ","[AngeloContreras](https://www.facebook.com/gaming/AngeloContrerasss)", true)
    .setAuthor(client.user.username, client.user.avatarURL())
    .setThumbnail("https://media.giphy.com/media/U7bo3ZBR8lcKSmGdlT/giphy.gif");
message.channel.send(embed);
  }

  if(command === "ackerboy"){
    const embed = new Discord.MessageEmbed()
    .setTitle("AckerBoy - Directos")
    .setColor(0x2A80FB)
    .setDescription("Disfruta de los directos de AckerBoy en Facebook Gaming - @everyone")
    .addField("Facebook Gaming:","https://www.facebook.com/gaming/ackerboytv")
    .addField("Instagram: ","[@willi02](https://www.instagram.com/willii02/)", true)
    .setAuthor(client.user.username, client.user.avatarURL())
    .setImage("https://media.giphy.com/media/8DTnuPhxv0m4w/giphy.gif");
message.channel.send(embed);
  }

  if(command === "angelo"){
    const embed = new Discord.MessageEmbed()
    .setTitle("Angelo Contreras - Directos")
    .setColor(0x2A80FB)
    .setDescription("Disfruta de los directos de Angelo Contreras en Facebook Gaming - @everyone")
    .addField("Facebook Gaming", "https://www.facebook.com/gaming/AngeloContrerasss")
    .addField("Instagram: ","[@angelocontrera5](https://www.instagram.com/angelocontrera5/)", true)
    .setAuthor(client.user.username, client.user.avatarURL())
    .setImage("https://scontent.flim18-3.fna.fbcdn.net/v/t1.0-9/96780132_236101877808730_2260918673499750400_o.jpg?_nc_cat=108&ccb=3&_nc_sid=09cbfe&_nc_ohc=8WoGrtnbXuMAX_V_TaV&_nc_ht=scontent.flim18-3.fna&oh=fced357d34d0ecddd194e92008abfdec&oe=6061DF5F");
message.channel.send(embed);
  }

//link de invitación
 if(command === "invite"){
    message.channel.send("https://discord.gg/a7zGZH7BUE");
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

if(command === "camara"){
    const img = new Discord.MessageAttachment("https://media.discordapp.net/attachments/738486906945274018/738817368440176711/12.jpeg?width=887&height=658")
    message.channel.send(img);
}
if(command === "desahuevate"){
    const img = new Discord.MessageAttachment("https://media.discordapp.net/attachments/738486906945274018/738817371912929281/13.jpeg")
    message.channel.send(img);
}

if(message.content.startsWith(prefix + "eresonoeres")) {//definimos comando
  let porcentaje = ["10%", "12%", "13%", "21%", "22%", "31%", "32%", "50%", "51%", "54%", "53%", "101%", "81%", "56%", "78%", "74%", "99%", "101%", "102%", "150%", "200%", "201%"]//hacemos un let porcentaje para poner los posibles porcentajes
  var gay = porcentaje[Math.floor(Math.random() * porcentaje.length)]//un var gay para poner una respuesta random del let
    let userm = message.mentions.users.first()//let userm para no tener que poner todo eso
if (!userm) return message.reply("Mencione a quien medir el porcentaje para saber si es o no es :flushed:")//si no ha mencionado a nadie retorna
const embed = new Discord.MessageEmbed()//definimos embed
  .addField(`Porcentaje de ${userm.username}`, `${userm.username} es **${gay}** kbro :rainbow_flag:`)//hacemos addField si quieres puedes editarlo
  .setColor("RANDOM")//un color random
  message.channel.send(embed)//que envie el embed
}//cerramos ^^



//////////////////////  PRUEBAS  //////////////////////

/*

let mirol =  message.guild.roles.cache.find("738472058987479160");


if(command === 'rol'){

    if(!args) return message.channel.send('Ingrese nombre del rol.');
    let mirol = message.guild.roles.cache.find("name", args.join(" "));
    if(!mirol) return message.channel.send('Rol no encontrado en el servidor.');

    if(message.member.roles.has(mirol.id)) {
      message.channel.send('Si tienes el rol: `'+mirol.name+'`.');
    } else {
      message.channel.send('No tienes el rol: `'+mirol.name+'`.');
    }

  }
















if (command == "rol") {
let rol = message.guild.roles.cache.find(r => r.name === "Dueño del Servidor");
if(!rol) {
    message.channel.send('Rol no encontrado en el servidor.');

} else{
    message.channel.send('Si fue encontrado en el servidor.');
    
  }
};

if(message.content.startsWith(prefix + "addrol")) {
  let miembro = message.mentions.members.first();
  let nombrerol = args.slice(1).join(' ');

  let role = message.guild.roles.cache.find(r => r.name === nombrerol);
  let perms = message.member.hasPermission("MANAGE_ROLES");

  if(!perms) return message.channel.send("No tienes permisos suficientes, para agregar roles.");
  if(!miembro) return message.reply('Debe mencionar a un miembro.');
  if(!nombrerol) return message.channel.send('Escriba el nombre del rol a agregar.');
  if(!role) return message.channel.send('Rol no encontrado en el servidor.');

  miembro.roles.add(role).catch(console.error);
  message.channel.send(`El rol **${role.name}** fue agregado a **${miembro.user.username}**.`);
}
*/



////////////TODO CODIGO ARRIBA - CON ESTO CIERRA
});

client.login(process.env.TOKEN).catch(() => console.log("Invalid token."))