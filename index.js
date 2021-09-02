/////////////////////CONSTANTES/////////////////////
const express = require('express');
const app = express();
app.get('/', (request, response) => {
	const ping = new Date();
	ping.setHours(ping.getHours() - 3);
	console.log(
		`El Ping recibido es ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`
	);
	response.sendStatus(200);
});
app.listen(process.env.PORT);

/////////////////////CONSTANTES2/////////////////////
const Discord = require('discord.js');
Discord.Constants.DefaultOptions.ws.properties.$browser = 'Discord Android';
const client = new Discord.Client();
const config = require('./config.json');

/////////////////////VARIABLES/////////////////////
let prefix = config.prefix;
/////////////////////PRESENCIA/////////////////////

function presence() {
	client.user.setPresence({
		status: 'online',
		activity: {
			name: 'codigo 🐊',
			type: 'PLAYING'
		}
	});
}

client.on('ready', () => {
	presence();
});

client.on('guildMemberAdd', miembro => {
	var Canal = client.channels.cache.get('737127649276592138');
	Canal.send(
		'Hola! <@' +
			miembro.id +
			'> , Bienvenido a :fire: :flag_pe: Inca Nation :flag_pe: :fire:!\n\nRecuerda   usar el comando `.help` ó `.ayuda` para obtener la información de los comandos de respuesta con imágenes de nuestro bot.'
	);
});
/////////////////////MENSAJES/////////////////////
client.on('message', message => {
	if (message.author.bot) return;

	if (message.content.startsWith('hola')) {
		message.channel.send('Hola UwU');
	}
	if (message.content.startsWith('bye')) {
		message.channel.send('Yo también safo loco');
	}
	if (message.content.startsWith('jaja')) {
		var jaja = [
			'https://media.discordapp.net/attachments/738235429060345908/738249226357833778/IMG_20200729_231815.jpg?width=893&height=658',
			'jajjjajzZZZZZZZZZZZZZ'
		];
		//variable "random" escoge un valor de acuerdo al tamaño en forma aleatoria del arreglo "ya"
		var random = Math.floor(Math.random() * jaja.length);
		//envía una imagen aleatoria del arreglo
		message.channel.send(jaja[random]);
	}
	if (message.content === 'ok') {
		message.channel.send('YA PAPI CHVRE TU COMENTARIZZZZZZZZZZZZZZ');
	}
	if (message.content === 'Momento risa') {
		message.channel.send('* c ríe *');
	}
  if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))){
    message.channel.send('Que fue xd. Recuerda que puedes ver los comandos con `.help` ó `.ayuda` :D');
  }

	if (message.content === 'ya') {
		var ya = [
			'https://media.discordapp.net/attachments/738235429060345908/738250633710403594/FB_IMG_1588879940063.jpg',
			'https://media.discordapp.net/attachments/738538710777331732/743515600877387817/FB_IMG_1597206513658.jpg?width=683&height=658'
		];

		//variable "random" escoge un valor de acuerdo al tamaño en forma aleatoria del arreglo "ya"
		var random = Math.floor(Math.random() * ya.length);

		//envía una imagen aleatoria del arreglo
		message.channel.send(ya[random]);
	}
	if (message.content === ':0') {
		var sor = [
			'https://media.discordapp.net/attachments/738486906945274018/738817339344027648/7.jpeg',
			'https://media.discordapp.net/attachments/738486906945274018/738817362341396630/11.jpeg',
			'https://media.discordapp.net/attachments/738486906945274018/738817374597152829/14.jpeg',
			'https://i.imgur.com/aCkIoea.jpg',
			'https://i.imgur.com/2wkSBGk.jpg'
		];

		//variable "random" escoge un valor de acuerdo al tamaño en forma aleatoria del arreglo  "sor"
		var random = Math.floor(Math.random() * sor.length);

		//envía una imagen aleatoria del arreglo
		message.channel.send(sor[random]);
	}
	if (message.content.startsWith("xd")) {
	  var array = [
	    'https://i.imgur.com/L2I3ayI.jpg',
	    'https://i.imgur.com/b5Fj7Vl.jpg',
	    'https://i.imgur.com/N1REmCh.png'
	    ]
	    
	    var random = Math.floor(Math.random() * array.length);
	    
	    message.channel.send(array[random]);
	}
	if (message.content.startsWith('zzzz')) {
		var zeta = [
			'https://media.discordapp.net/attachments/738538710777331732/738588610491842580/FB_IMG_1596163645285.jpg',
			'https://media.discordapp.net/attachments/749389967507062945/749392169705406535/52d4900d-51c2-4f43-9151-4848545a614b.jpeg',
			'https://media.discordapp.net/attachments/749389967507062945/749392178991726622/9847e210-6b5e-4645-8aa2-01d861d4a119.jpeg',
			'https://media.discordapp.net/attachments/749389967507062945/749392182703816704/a09feb05-0dfc-4c97-b0bb-71cadd225d22.jpeg'
		];
		var random = Math.floor(Math.random() * zeta.length);
		message.channel.send(zeta[random]);
	}
	if (message.content === 'silencio') {
		const img = new Discord.MessageAttachment(
			'https://media.discordapp.net/attachments/749389967507062945/824083978536747028/IMG-20210323-WA0006.jpg'
		);
		message.channel.send(img);
	}
	if (message.content === 'asu') {
		const img = new Discord.MessageAttachment(
			'https://media.discordapp.net/attachments/738486906945274018/738817334378233907/4.jpeg'
		);
		message.channel.send(img);
	}
	if (message.content === 'go') {
		const img = new Discord.MessageAttachment(
			'https://media.discordapp.net/attachments/771527095356489748/830217847329783888/2Q.png'
		);
		message.channel.send(img);
	}
	/////////////////////EMBEDS/////////////////////

	if (!message.content.startsWith(prefix)) return;
	//Comandos
	const args = message.content
		.slice(prefix.length)
		.trim()
		.split(/ + /g);
    
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		message.channel.send('Pong!');
	}
	if (command === 'help') {
		const embed = new Discord.MessageEmbed()
			.setTitle('Comandos')
			.setColor(0xb62eff)
			.setDescription(
				"Recuerda usar un `punto '.'` como prefijo para el comando"
			)
			.addField(
				'Comandos de Imagenes : ',
				'`.candia`,`.tusa`, `.austin`, `.decision`, `.achicando`, `.atencion`,  `.follar`, `.detalle`, `.hacker`, `.culos`, `.patricio`, `.kgado`, `.chaufa`, `.patrona`, `.cachetada`,  `.camara`, `.desahuevate`'
			)
			.addField(
				'Si necesitas que un amigo entre al grupo puedes colocar el comando `.invitar` para `generar un link de invitación` del grupo de INCA NATION',
				'Disfruta del servidor :D'
			)
      .addField(
        'NUEVA FUNCIÓN: YOUTUBE DENTRO DE DISCORD - Gracias al bot Discord Activites',
        'Si deseas probarlo coloca el comando `.youtube`'
      )
			.addField(
				'Streamers: ',
				'[AckerBoy](https://www.facebook.com/gaming/ackerboytv)',
				true
			)
			.addField(
				'Streamers: ',
				'[AngeloContreras](https://www.facebook.com/gaming/AngeloContrerasss)',
				true
			)
			.setThumbnail(
				'https://media.giphy.com/media/U7bo3ZBR8lcKSmGdlT/giphy.gif'
			);
		message.channel.send(embed);
	}
	//mismo comando que el ".help" pero en español
	if (command === 'ayuda') {
		const embed = new Discord.MessageEmbed()
			.setTitle('Comandos')
			.setColor(0xb62eff)
			.setDescription(
				"Recuerda usar un `punto '.'` como prefijo para el comando"
			)
			.addField(
				'Comandos de Imagenes : ',
				'`.candia`,`.tusa`, `.austin`, `.decision`, `.achicando`, `.atencion`,  `.follar`, `.detalle`, `.hacker`, `.culos`, `.patricio`, `.kgado`, `.chaufa`, `.patrona`, `.cachetada`,  `.camara`, `.desahuevate`'
			)
			.addField(
				'Si necesitas que un amigo entre al grupo puedes colocar el comando `.invitar` para `generar un link de invitación` del grupo de INCA NATION',
				'Disfruta del servidor :D'
			)
      .addField(
        'NUEVA FUNCIÓN: YOUTUBE DENTRO DE DISCORD - Gracias al bot Discord Activites',
        'Si deseas probarlo coloca el comando `.youtube`'
      )
			.addField(
				'Streamers: ',
				'[AckerBoy](https://www.twitch.tv/ackerboytv)',
				true
			)
			.addField(
				'Streamers: ',
				'[AngeloContreras](https://www.facebook.com/gaming/AngeloContrerasss)',
				true
			)
			.setThumbnail(
				'https://media.giphy.com/media/U7bo3ZBR8lcKSmGdlT/giphy.gif'
			);
		message.channel.send(embed);
	}
	if (command === 'ackerboy') {
		const embed = new Discord.MessageEmbed()
			.setTitle('AckerBoy - Directos')
			.setColor(0xA970FF)
			.setDescription(
				'Disfruta de los directos de AckerBoy en Twitch - @everyone'
			)
			.addField('Twitch:', 'https://www.twitch.tv/ackerboytv')
			.addField(
				'Instagram: ',
				'[@willi02](https://www.instagram.com/willii02/)',
				true
			)
			.setImage('https://i.imgur.com/TBI3n7h.jpg');
		message.channel.send(embed);
	}
	if (command === 'angelo') {
		const embed = new Discord.MessageEmbed()
			.setTitle('Angelo Contreras - Directos')
			.setColor(0x2a80fb)
			.setDescription(
				'Disfruta de los directos de Angelo Contreras en Facebook Gaming - @everyone'
			)
			.addField('Facebook Gaming', 'https://fb.gg/AngeloContrerasss')
			.addField(
				'Instagram: ',
				'[@angelocontrera5](https://www.instagram.com/angelocontrera5/)',
				true
			)
			//.setAuthor(client.user.username, client.user.avatarURL())
			.setImage('https://i.imgur.com/mTNHLz3.jpg');
		message.channel.send(embed);
	}
    if (command === 'youtube'){
        const embed = new Discord.MessageEmbed()
            .setTitle('Youtube en Discord - Bot Discord Activites')
            .setColor(0xff1313)
            .setDescription(
            'Ahora puedes disfrutar de un bot que puede poner Youtube sin salir de la app de Discord!'
            )
            .addField('Comando:',
             '`/activity [#escoger el canal de voz] YouTube Together`'
            )
            .addField('Luego el bot enviará un link de invitación para que tu y tus amigos puedan entrar a ver Youtube juntos',
            'Disfruta del bot :D'
            )
            //.setAuthor(client.user.username, client.user.avatarURL())
            .setImage('https://i.imgur.com/TrXVNLq.gif');
        message.channel.send(embed)
    }

	/////////////////////GENERA LINK DE INVITACION AL GRUPO/////////////////////
	if (command === 'invitar') {
		message.channel.send('https://discord.gg/a7zGZH7BUE');
	}
	/////////////////////RESPUESTAS CON IMAGENES/////////////////////

	if (command === 'jajaja') {
		const img = new Discord.MessageAttachment(
			'https://media.discordapp.net/attachments/738235429060345908/738249226357833778/IMG_20200729_231815.jpg?  width=893&height=658'
		);
		message.channel.send(img);
	}
	if (command === 'candia') {
		const img = new Discord.MessageAttachment(
			'https://media.discordapp.net/attachments/738235429060345908/738249897647669258/images_81.jpeg'
		);
		message.channel.send(img);
	}

  if (command === 'sumari') {
		var sumari = [
			'https://media.discordapp.net/attachments/749389967507062945/844242640580640768/ESUQrBAX0AIPBHM.jpg',
      'https://media.discordapp.net/attachments/693896578288713780/844430211000958996/unknown.png'
		];
		var random = Math.floor(Math.random() * sumari.length);
		message.channel.send(sumari[random]);
	}

  if (command === 'fernando') {
		const img = new Discord.MessageAttachment(
			'https://media.discordapp.net/attachments/749389967507062945/844243396365123614/unknown.png'
		);
		message.channel.send(img);
	}

  if (command === 'jefferson') {
		const img = new Discord.MessageAttachment(
			'https://media.discordapp.net/attachments/749389967507062945/844243897956958238/la-caida-de-edgar-860.jpg'
		);
		message.channel.send(img);
	}

	///////////////// COMANDOS PARA SERVIDOR DE NATE /////////////////

	if (command === 'manuel') {
		const img = new Discord.MessageAttachment(
			'https://pbs.twimg.com/profile_images/973865461816455168/nvPsK0CL_400x400.jpg'
		);
		message.channel.send(img);
	}

	if (command === 'valentino') {
		const img = new Discord.MessageAttachment(
			'https://i.imgur.com/yaJdYGl.png'
		);
		message.channel.send(img);
	}
	if (command === 'ling') {
		const img = new Discord.MessageAttachment(
			'https://tiempogamer.com/download/multimedia.normal.866a94b094cc7f71.416275656c6f2047616d65725f6e6f726d616c2e6a7067.jpg'
		);
		message.channel.send(img);
	}
	if (command === 'n4te') {
		const img = new Discord.MessageAttachment(
			'https://images-ext-2.discordapp.net/external/vtW4JTsQUpnAglDskyY2c1DXccc9Q2CjnQHfMZB_rqU/https/i1.sndcdn.com/artworks-5wlKUV5TXCGuALCy-zLVWgg-t500x500.jpg'
		);
		message.channel.send(img);
	}
	if (command === 'jea') {
		const img = new Discord.MessageAttachment(
			'https://media.discordapp.net/attachments/787542717088399360/838618457440256050/AAA.jpg?width=647&height=657'
		);
		message.channel.send(img);
	}

	/////////////////FIN /////////////////

	if (command === 'tusa') {
		const img = new Discord.MessageAttachment(
			'https://media.discordapp.net/attachments/738235429060345908/738250633936633947/FB_IMG_1588486789426.jpg? width=946&height=658'
		);
		message.channel.send(img);
	}
	if (command === 'austin') {
		const img = new Discord.MessageAttachment(
			'https://media.discordapp.net/attachments/738235429060345908/738251576166318180/FB_IMG_1587477832824.jpg'
		);
		message.channel.send(img);
	}
	if (command === 'decision') {
		const img = new Discord.MessageAttachment(
			'https://media.discordapp.net/attachments/738235429060345908/738251576313118786/FB_IMG_1586012280749.jpg'
		);
		message.channel.send(img);
	}
	if (command === 'bob') {
		var bob = [
			'https://media.discordapp.net/attachments/738235429060345908/738251576539349082/FB_IMG_1585755441108.jpg',
			'https://media.discordapp.net/attachments/738235429060345908/738251576770297916/FB_IMG_1585755436066.jpg',
			'https://media.discordapp.net/attachments/738235429060345908/738251577042665513/FB_IMG_1585755411021.jpg',
			'https://media.discordapp.net/attachments/738235429060345908/738251577210568736/FB_IMG_1585755368752.jpg',
			'https://media.discordapp.net/attachments/738235429060345908/738251577634193458/FB_IMG_1585755292195.jpg'
		];
		var random = Math.floor(Math.random() * bob.length);
		message.channel.send(bob[random]);
	}
	if (command === 'achicando') {
		const img = new Discord.MessageAttachment(
			'https://media.discordapp.net/attachments/738235429060345908/738251577432735814/FB_IMG_1585755324042.jpg'
		);
		message.channel.send(img);
	}
	if (command === 'atencion') {
		const img = new Discord.MessageAttachment(
			'https://media.discordapp.net/attachments/738235429060345908/738251578045235260/FB_IMG_1585237173278.jpg'
		);
		message.channel.send(img);
	}
	if (command === 'follar') {
		const img = new Discord.MessageAttachment(
			'https://media.discordapp.net/attachments/738235429060345908/738251577856622713/FB_IMG_1585752714821.jpg'
		);
		message.channel.send(img);
	}
	if (command === 'detalle') {
		const img = new Discord.MessageAttachment(
			'https://media.discordapp.net/attachments/738486906945274018/738817319073218580/1.jpeg'
		);
		message.channel.send(img);
	}
	if (command === 'hacker') {
		const img = new Discord.MessageAttachment(
			'https://media.discordapp.net/attachments/738486906945274018/738817332691861512/3.jpeg'
		);
		message.channel.send(img);
	}
	if (command === 'culos') {
		const img = new Discord.MessageAttachment(
			'https://media.discordapp.net/attachments/738486906945274018/738817330921996308/2.jpeg'
		);
		message.channel.send(img);
	}
	if (command === 'patricio') {
		const img = new Discord.MessageAttachment(
			'https://media.discordapp.net/attachments/738486906945274018/738817337452658818/6.jpeg'
		);
		message.channel.send(img);
	}
	if (command === 'kgado') {
		const img = new Discord.MessageAttachment(
			'https://media.discordapp.net/attachments/738486906945274018/738817335724343357/5.jpeg'
		);
		message.channel.send(img);
	}
	if (command === 'chaufa') {
		const img = new Discord.MessageAttachment(
			'https://media.discordapp.net/attachments/738486906945274018/738817340640067584/8.jpeg'
		);
		message.channel.send(img);
	}
	if (command === 'patrona') {
		const img = new Discord.MessageAttachment(
			'https://media.discordapp.net/attachments/738486906945274018/738817342976426054/9.jpeg?width=695&height=658'
		);
		message.channel.send(img);
	}
	if (command === 'cachetada') {
		const img = new Discord.MessageAttachment(
			'https://media.discordapp.net/attachments/738486906945274018/738817344737902612/10.jpeg'
		);
		message.channel.send(img);
	}
	if (command === 'camara') {
		const img = new Discord.MessageAttachment(
			'https://media.discordapp.net/attachments/738486906945274018/738817368440176711/12.jpeg?width=887&height=658'
		);
		message.channel.send(img);
	}
	if (command === 'desahuevate') {
		const img = new Discord.MessageAttachment(
			'https://media.discordapp.net/attachments/738486906945274018/738817371912929281/13.jpeg'
		);
		message.channel.send(img);
	}
	if (message.content.startsWith(prefix + 'eresonoeres')) {
		let porcentaje = [
			'1%',
			'22%',
			'31%',
			'50%',
			'101%',
			'99%',
			'101%',
			'150%',
			'200%'
		];
		var gay = porcentaje[Math.floor(Math.random() * porcentaje.length)];
		let userm = message.mentions.users.first();
		if (!userm)
			return message.reply(
				'Mencione a quien medir el porcentaje para saber si es o no es :flushed:'
			);
		const embed = new Discord.MessageEmbed()
			.addField(
				`Porcentaje de ${userm.username}`,
				`${userm.username} es **${gay}** kbro :rainbow_flag:`
			)
			.setColor('RANDOM');
		message.channel.send(embed);
	}

/* jshint esversion: 6 */
// args = TOKEN CLIENTID INTERVAL

/*
const https = require("https"),
      fs = require("fs"),
      Discord = require("discord.js"),
      bot = new Discord.Client(),
      channelPath = __dirname + "/.channels",
      token = args[0],
      twitchClientID = args[1],
      interval = args[2] * 1000,
      apiUrl = "https://api.twitch.tv/kraken",
      // two minutes
      timeout = 2*60*1000;
var servers = [];


function leadingZero(d){
    if(d < 10){
        return "0" + d;
    }else{
        return d;
    }
}

// adds a timestamp before msg/err
function print(msg, err){
    var date = new Date();
    var h = leadingZero(date.getHours());
    var m = leadingZero(date.getMinutes());
    var s = leadingZero(date.getSeconds());

    console.log("[" + h + ":" + m + ":" + s + "]", msg);
    if(err){
        console.log(err);
    }
}

function indexOfObjectByName(array, value){
    for(let i = 0; i < array.length; i++){
        if(array[i].name.toLowerCase().trim() === value.toLowerCase().trim()){
            return i;
        }
    }
    return -1;
}


function exitHandler(opt, err){
    if(err){
        print(err);
    }
    if(opt.save){
        print("Saving channels to " + channelPath + " before exiting");
        print(JSON.stringify(servers));
        fs.writeFileSync(channelPath, JSON.stringify(servers, null, 4));
        print("Done");
    }
    if(opt.exit){
        process.exit();
    }
}

process.on("exit", exitHandler.bind(null, {save:true}));
process.on("SIGINT", exitHandler.bind(null, {exit:true}));
process.on("SIGTERM", exitHandler.bind(null, {exit:true}));
process.on("uncaughtException", exitHandler.bind(null, {exit:true}));


function callApi(server, twitchChannel, callback, getStreamInfo){
    var opt;
    try {
        var apiPath;
        if(getStreamInfo){
            apiPath = "/kraken/streams/" + twitchChannel.name.trim();
        }else{
            apiPath = "/kraken/channels/" + twitchChannel.name.trim();
        }
        opt = {
            host: "api.twitch.tv",
            path: apiPath,
            headers: {
                "Client-ID": twitchClientID,
                Accept: "application/vnd.twitchtv.v3+json"
            }
        };
    }
    catch(err){
        print(err);
        return;
    }

    https.get(opt, (res)=>{
        var body = "";

        res.on("data", (chunk)=>{
            body += chunk;
        });

        res.on("end", ()=>{
            var json;
            try {
                json = JSON.parse(body);
            }
            catch(err){
                print(err);
                return;
            }
            if(json.status == 404){
                callback(server, undefined, undefined);
            }else{
                callback(server, twitchChannel, json);
            }
        });

    }).on("error", (err)=>{
        print(err);
    });
}


function apiCallback(server, twitchChannel, res){
    if(res && !twitchChannel.online && res.stream &&
       twitchChannel.timestamp + timeout <= Date.now()){
        try {
            var channels = [], defaultChannel;
            var guild = bot.guilds.find("name", server.name);


            if(server.discordChannels.length === 0){
                defaultChannel = guild.channels.find("type", "text");
            }else{
                for(let i = 0; i < server.discordChannels.length; i++){
                    channels.push(guild.channels.find("name", server.discordChannels[i]));
                }
            }
            var embed = new Discord.RichEmbed()
                        .setColor("#9689b9")
                        .setTitle(res.stream.channel.display_name.replace(/_/g, "\\_"))
                        .setURL(res.stream.channel.url)
                        .setDescription("**" + res.stream.channel.status +
                                        "**\n" + res.stream.game)
                        .setImage(res.stream.preview.large)
                        .setThumbnail(res.stream.channel.logo)
                        .addField("Viewers", res.stream.viewers, true)
                        .addField("Followers", res.stream.channel.followers, true);

            if(channels.length !== 0){
                for(let i = 0; i < channels.length; i++){
                    channels[i].sendEmbed(embed).then(
                        print("Sent embed to channel '" + channels[i].name +
                              "'."));
                }
                twitchChannel.online = true;
                twitchChannel.timestamp = Date.now();
            }else if(defaultChannel){
                defaultChannel.sendEmbed(embed).then(
                    print("Sent embed to channel '" + defaultChannel.name +
                          "'.")
                );
                twitchChannel.online = true;
                twitchChannel.timestamp = Date.now();
            }
        }
        catch(err){
            print(err);
        }
    }else if(res.stream === null){
        twitchChannel.online = false;
    }
}

function tick(){
    for(let i = 0; i < servers.length; i++){
        for(let j = 0; j < servers[i].twitchChannels.length; j++){
            for(let k = -1; k < servers[i].discordChannels.length; k++){
                if(servers[i].twitchChannels[j]){
                    callApi(servers[i], servers[i].twitchChannels[j], apiCallback, true);
                }
            }
        }
    }
}


bot.on("message", (message)=>{
    var server, twitchChannels;
    if(!message.guild){
        return;

    }else{
        let index = indexOfObjectByName(servers, message.guild.name);
        if(index == -1){
            servers.push({name: message.guild.name,
                          lastPrefix: "!", prefix: "/",
                          role: "botadmin", discordChannels: [],
                          twitchChannels: []});
            index = servers.length - 1;
        }

        server =  servers[index];
        twitchChannels = servers[index].twitchChannels;
    }

    if(message.content[0] == server.prefix){
        var permission;
        try {
            permission = message.member.roles.exists("name", server.role);
        }
        catch(err){
            print(server.role + " is not a role on the server", err);
        }

        let index;
        var streamer;
        if(message.content.substring(1, 7) == "remove"){
            if(permission){
                streamer = message.content.slice(7).trim();
                index = indexOfObjectByName(twitchChannels, streamer);
                if(index != -1){
                    twitchChannels.splice(index, 1);
                    index = indexOfObjectByName(twitchChannels, streamer);
                    if(index == -1){
                        message.reply("Removed " + streamer + ".");
                    }else{
                        message.reply(streamer + " isn't in the list.");
                    }
                }else{
                    message.reply(streamer + " isn't in the list.");
                }
            }else{
                message.reply("you're lacking the role _" + server.role + "_.");
            }

        }else if(message.content.substring(1, 4) == "add"){
            if(permission){
                streamer = message.content.slice(4).trim();
                var channelObject = {name: streamer};
                index = indexOfObjectByName(twitchChannels, streamer);
                callApi(server, channelObject, (serv, chan, res)=>{
                    if(index != -1){
                        message.reply(streamer + " is already in the list.");
                    }else if(res){
                        twitchChannels.push({name: streamer, timestamp: 0,
                                             online: false});
                        message.reply("Added " + streamer + ".");
                        tick();
                    }else{
                        message.reply(streamer + " doesn't seem to exist.");
                    }
                }, false);
            }else{
                message.reply("you're lacking the role _" + server.role + "_.");
            }

        }else if(message.content.substring(1, 5) == "list"){
            let msg = "\n";
            for(let i = 0; i < twitchChannels.length; i++){
                var streamStatus;
                if(twitchChannels[i].online){
                    msg += "**" + twitchChannels[i].name + " online**\n";
                }else{
                    streamStatus = "offline";
                    msg += twitchChannels[i].name + " offline\n";
                }
            }
            if(!msg){
                message.reply("The list is empty.");
            }else{
                message.reply(msg.replace(/_/g, "\\_"));
            }

        }else if(message.content.substring(1,10) == "configure"){
            let msg = "";
            if(message.guild.owner == message.member){
                if(message.content.substring(11, 15) == "list"){
                    msg += "```\n" +
                           "prefix    " + server.prefix + "\n" +
                           "role      " + server.role + "\n";

                    msg += "channels  " + server.discordChannels[0];
                    if(server.discordChannels.length > 1){
                        msg += ",";
                    }
                    msg += "\n";

                    for(let i = 1; i < server.discordChannels.length; i++){
                        msg += "          " + server.discordChannels[i];
                        if(i != server.discordChannels.length -1){
                            msg += ",";
                        }
                        msg += "\n";
                    }
                    msg += "```";

                }else if(message.content.substring(11, 17) == "prefix"){
                    let newPrefix = message.content.substring(18, 19);
                    if(newPrefix.replace(/\s/g, '').length === 0){
                        msg += "Please specify an argument";
                    }else if(newPrefix == server.prefix){
                        msg += "Prefix already is " + server.prefix;
                    }else{
                        server.lastPrefix = server.prefix;
                        server.prefix = newPrefix;
                        msg += "Changed prefix to " + server.prefix;
                    }

                }else if(message.content.substring(11, 15) == "role"){
                    if(message.content.substring(16).replace(/\s/g, '').length === 0){
                        msg += "Please specify an argument";
                    }else{
                        server.role = message.content.substring(16);
                        msg += "Changed role to " + server.role;
                    }

                }else if(message.content.substring(11, 18) == "channel"){
                    if(message.content.substring(19, 22) == "add"){
                        let channel = message.content.substring(23);
                        if(channel.replace(/\s/g, '').length === 0){
                            msg += "Please specify an argument";
                        }else if(message.guild.channels.exists("name", channel)){
                            server.discordChannels.push(channel);
                            msg += "Added " + channel + " to list of channels to post in.";
                        }else{
                            msg += channel + " does not exist on this server.";
                        }

                    }else if(message.content.substring(19, 25) == "remove"){
                        for(let i = server.discordChannels.length; i >= 0; i--){
                            let channel = message.content.substring(26);
                            if(channel.replace(/\s/g, '').length === 0){
                                msg = "Please specify an argument";
                                break;
                            }else if(server.discordChannels[i] == channel){
                                server.discordChannels.splice(i, 1);
                                msg = "Removed " + channel + " from list of channels to post in.";
                                break;
                            }else{
                                msg = channel + " does not exist in list.";
                            }
                        }
                    }else{
                        msg = "Please specify an argument for channel";
                    }

                }else{
                    msg += "```\n" +
                           "Usage: " + server.prefix + "configure OPTION [SUBOPTION] VALUE\n" +
                           "Example: " + server.prefix + "configure channel add example\n" +
                           "\nOptions:\n" +
                           "  list        List current config\n" +
                           "  prefix      Character to use in front of commands\n" +
                           "  role        Role permitting usage of add and remove\n" +
                           "  channel     Channel(s) to post in, empty list will use the first channel\n" +
                           "      add         Add a discord channel to the list\n" +
                           "      remove      Remove a discord channel from the list\n" +
                           "```";
                }

            }else{
                msg += "You are not the server owner.";
            }
            message.reply(msg);

        }else{
            message.reply("Usage:\n" + server.prefix +
                               "[configure args|list|add channel_name|remove channel_name]");
        }
    }else if(message.content[0] == server.lastPrefix){
        message.reply("The prefix was changed from `" + server.lastPrefix +
                      "` to `" + server.prefix +
                      "`. Please use the new prefix.");
    }
});


bot.login(token).then((token)=>{
    if(token){
        print("Logged in with token " + token);
        print("Reading file " + channelPath);
        var file = fs.readFileSync(channelPath, {encoding:"utf-8"});
        servers = JSON.parse(file);

        // tick once on startup
        tick();
        setInterval(tick, interval);
    }else{
        print("An error occured while loging in:", err);
        process.exit(1);
    }
});

*/




	////////////TODO CODIGO ARRIBA - CON ESTO CIERRA
});
client.login(process.env.TOKEN).catch(() => console.log('Invalid token.'));
