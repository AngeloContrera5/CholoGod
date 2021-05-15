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
	    'https://i.imgur.com/b5Fj7Vl.jpg'
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

		//variable "random" escoge un valor de acuerdo al tamaño en forma aleatoria del arreglo "zeta"
		var random = Math.floor(Math.random() * zeta.length);

		//envía una imagen aleatoria del arreglo
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
				'Streamers: ',
				'[AckerBoy](https://www.facebook.com/gaming/ackerboytv)',
				true
			)
			.addField(
				'Streamers: ',
				'[AngeloContreras](https://www.facebook.com/gaming/AngeloContrerasss)',
				true
			)
			.setAuthor(client.user.username, client.user.avatarURL())
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
				'Streamers: ',
				'[AckerBoy](https://www.facebook.com/gaming/ackerboytv)',
				true
			)
			.addField(
				'Streamers: ',
				'[AngeloContreras](https://www.facebook.com/gaming/AngeloContrerasss)',
				true
			)
			.setAuthor(client.user.username, client.user.avatarURL())
			.setThumbnail(
				'https://media.giphy.com/media/U7bo3ZBR8lcKSmGdlT/giphy.gif'
			);
		message.channel.send(embed);
	}
	if (command === 'ackerboy') {
		const embed = new Discord.MessageEmbed()
			.setTitle('AckerBoy - Directos')
			.setColor(0x2a80fb)
			.setDescription(
				'Disfruta de los directos de AckerBoy en Facebook Gaming - @everyone'
			)
			.addField('Facebook Gaming:', 'https://fb.gg/ackerboytv')
			.addField(
				'Instagram: ',
				'[@willi02](https://www.instagram.com/willii02/)',
				true
			)
			.setAuthor(client.user.username, client.user.avatarURL())
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
			.setAuthor(client.user.username, client.user.avatarURL())
			.setImage('https://i.imgur.com/mTNHLz3.jpg');
		message.channel.send(embed);
	}
    if (command === 'youtube'){
        const embed = new Discord.MessageEmbed()
            .setTitle('Youtube en Discord - Bot Discord Activites')
            .setColor(0x2a80fb)
            .setDescription(
            'Ahora puedes disfrutar de un bot que puede poner Youtube sin salir de la app de Discord!'
            )
            .addField('Comando:',
             '`/activity [#escoger el canal de voz] YouTube Together`'
            )
            .addField('Luego el bot enviará un link de invitación para que tu y tus amigos puedan entrar a ver Youtube juntos',
            'Disfruta del bot :D'
            )
            .setAuthor(client.user.username, client.user.avatarURL())
            .setImage('https://i.imgur.com/YMmDZGC.png');
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
	//////////////////////  ZONA DE PRUEBAS  //////////////////////

	//var chologod = client.user.username;

  //console.log(chologod);
/*
	if (command === 'react') {
    let man = "🚹";
    let woman = "🚺";

		message.channel.send('Escoje tu genero xd').then(msg => {
        msg.react(man);
        msg.react(woman);

        const filter = (reaction, user) => {
          return [man,woman].includes(reaction.emoji.name) && user.id == message.author.id;
        };

        msg.awaitReactions(filter,{max:1,time:60000})
              .then(collection => {
                 const reaction = collection.first();

                  if(reaction.emoji.name === man) {
                      let idMan = message.guild.roles.cache.find(r => r.name === "CAMPESINOS");
                      let miembro  = client.user.username.;
                      console.log(miembro);
                      
                      //poner el rol de hombre




                  }else if(reaction.emoji.name === woman){
                      let idWoman = message.guild.roles.cache.get("736991847246856203");
                      console.log(idWoman);
                      //poner el rol de mujer




                  }
          })
    });
	};
*/
	//////////////////////  FIN DE ZONA DE PRUEBAS  //////////////////////

	////////////TODO CODIGO ARRIBA - CON ESTO CIERRA
});

client.login(process.env.TOKEN).catch(() => console.log('Invalid token.'));
