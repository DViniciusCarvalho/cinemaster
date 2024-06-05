import Movie from "./models/Movie";
import { getImageURL } from "./utils/path";

const knyMugenTrain = new Movie(
	'Demon Slayer: Mugen Train - O Filme',
	'Tanjiro Kamado, junto com Inosuke Hashibira e Zenitsu Agatsuma embarcam no Trem do Infinito em uma nova missão com o Pilar de Fogo, Kyojuro Rengoku, para derrotar um demônio que tem atormentado as pessoas.',
	'Natsuki Hanae, Akari Kito, Yoshitsugu Matsuoka',
	'Haruo Sotozaki',
	'Ação, Animação, Aventura',
	4.9,
	getImageURL('kny-movie-post.jpg'),
	'https://youtu.be/bFwdl2PDAFM?si=OvjCAa99hrOmlEdt',
	{
		seconds: 117,
		hours: '1h57 min'
	},
	{
		age: 14,
		message: 'Atos Criminosos, Linguagem Imprópria, Temas Sensíveis, Violência.'
	}
);

const dbsBroly = new Movie(
	'Dragon Ball Super: Broly',
	'Depois que o Torneio do Poder é jogado, a Terra está em paz. Percebendo que ainda existem pessoas extremamente fortes no universo, Goku continua treinando para se tornar mais forte. Mas um dia, Freeza aparece na Terra com um misterioso Saiyajin chamado Broly, que confronta Goku e Vegeta. A primeira parte deste filme é baseada no mangá Dragon Ball Minus, que conta a origem de Goku e como ele veio para a Terra.',
	'Masako Nozawa, Ryô Horikawa, Takeshi Kusao, Kôichi Yamadera, Ryûzaburô Ôtomo, Naoko Watanabe, Shigeru Chiba, Nana Mizuki, Masami Kikuchi, Aya Hisakawa, Toshio Furukawa, Ryûsei Nakao, Masakazu Morita, Katsuhisa Hôki, Banjô Ginga, Tetsu Inada, Tomokazu Sugita, Kimiko Saitô',
	'Tatsuya Nagamine',
	'Animação, Aventura',
	4.3,
	getImageURL('dbs-movie-post.jpg'),
	'https://youtu.be/IRG_el_OpQg?si=uo2eorabcpmucPhw',
	{
		minutes: 100,
		hours: '1h40min'
	},
	{
		age: 10,
		message: 'Temas Sensíveis, Violência'
	}
);

const opStampede = new Movie(
	'One Piece: Stampede',
	'Em "One Piece: Stampede", Luffy e sua tripulação dos Chapéus de Palha são convidados para o maior evento de piratas do mundo: a Expo Mundial de Piratas. Organizada por piratas, para piratas, a Expo reúne os piratas mais renomados do mundo em uma competição épica em busca de um tesouro deixado pelo lendário Rei dos Piratas, Gol D. Roger. No entanto, a situação rapidamente se transforma em um caos quando a verdadeira intenção por trás do evento é revelada, colocando todos em uma luta desesperada pela sobrevivência.',
	'Mayumi Tanaka, Kazuya Nakai, Akemi Okamura, Kappei Yamaguchi, Hiroaki Hirata, Ikue Otani, Yuriko Yamaguchi, Kazuki Yao, Cho, Toshio Furukawa, Yūichi Nakamura',
	'Takashi Otsuka',
	'Ação, Aventura, Animação',
	4.5,
	getImageURL('op-stamp-movie-post.jpg'),
	'https://youtu.be/S8_YwFLCh4U?si=cKigVRWPbgLBzpIG',
	{
		minutes: 100,
		hours: '1h40min'
	},
	{
		age: 12,
		message: 'Violência, Temas Sensíveis'
	}
);

const pkmFirstMovie = new Movie(
	'Pokémon: The First Movie',
	'Em "Pokémon: The First Movie", Ash, Misty e Brock recebem um convite misterioso para participar de uma batalha Pokémon na Nova Ilha. Ao chegar, descobrem que o evento foi organizado por Mewtwo, um poderoso Pokémon criado geneticamente que deseja se vingar dos humanos que o criaram. Mewtwo planeja dominar o mundo com um exército de clones de Pokémon. Ash e seus amigos precisam impedir Mewtwo e salvar tanto os Pokémon quanto o mundo.',
	'Veronica Taylor, Rachael Lillis, Eric Stuart, Madeleine Blaustein, Ikue Otani, Jay Goede, Philip Bartlett',
	'Kunihiko Yuyama',
	'Aventura, Animação, Fantasia',
	3.5,
	getImageURL('pkm-movie-post.jpg'),
	'https://youtu.be/hX-NHafvY5I?si=YAXW65Oe-p3u3s5v&t=18',
	{
		minutes: 75,
		hours: '1h15min'
	},
	{
		age: 0,
		message: 'Livre para todos os públicos'
	}
);

const silentVoice = new Movie(
	'A Silent Voice',
	'A Silent Voice segue a história de Shoya Ishida, um jovem que bulliou uma colega surda, Shoko Nishimiya, na escola primária. Depois de ser condenado por suas ações, Shoya se encontra isolado e atormentado pelo arrependimento. Anos depois, ele tenta fazer as pazes com Shoko, agora uma adolescente, e busca redenção por suas ações passadas.',
	'Miyu Irino, Saori Hayami, Aoi Yuki, Kensho Ono, Yuki Kaneko, Yui Ishikawa',
	'Naoko Yamada',
	'Drama, Romance, Animação',
	4.8,
	getImageURL('sv-movie-post.jpg'),
	'https://youtu.be/nfK6UgLra7g?si=9-OSshrvvno0UpCm',
	{
		minutes: 129,
		hours: '2h09min'
	},
	{
		age: 14,
		message: 'Temas Sensíveis'
	}
);

const saoOrdinalScale = new Movie(
	'Sword Art Online: Ordinal Scale',
	'Em "Sword Art Online: Ordinal Scale", os jogadores de realidade virtual se veem imersos em um novo jogo de realidade aumentada chamado Ordinal Scale. Kirito e seus amigos mergulham na emocionante nova aventura, mas logo descobrem que há segredos sombrios por trás do jogo, relacionados ao misterioso incidente conhecido como "A Mortandade de SAO". Agora, eles devem desvendar o mistério por trás de Ordinal Scale antes que seja tarde demais.',
	'Yoshitsugu Matsuoka, Haruka Tomatsu, Kanae Itō, Ayana Taketatsu, Rina Hidaka, Hiroaki Hirata',
	'Tomohiko Itō',
	'Ação, Aventura, Fantasia, Ficção Científica',
	4.2,
	getImageURL('sao-movie-post.jpg'),
	'https://youtu.be/Xu3FqvH11To?si=Ag-BAUEfOj_gxLgm',
	{
		minutes: 119,
		hours: '1h59min'
	},
	{
		age: 10,
		message: 'Temas Sensíveis, Violência'
	}
);

const opZ = new Movie(
	'One Piece Z: Filme',
	'"One Piece Z" segue os Chapéus de Palha quando eles enfrentam seu inimigo mais poderoso até agora, o ex-Almirante da Marinha, Zephyr, também conhecido como Z. Determinado a erradicar todos os piratas do mundo, Zephyr está em uma missão de destruição total. Cabe a Luffy e seus companheiros impedir os planos de Zephyr e salvar o mundo da destruição iminente.',
	'Mayumi Tanaka, Kazuya Nakai, Akemi Okamura, Kappei Yamaguchi, Hiroaki Hirata, Ikue Otani, Yuriko Yamaguchi, Kazuki Yao, Cho, Toshio Furukawa, Yūichi Nakamura',
	'Tatsuya Nagamine',
	'Ação, Aventura, Animação',
	4.4,
	getImageURL('op-z-movie-post.jpg'),
	'https://youtu.be/1gGt1Mg_zSo?si=b8tjFetc198JA9Om',
	{
		minutes: 108,
		hours: '1h48min'
	},
	{
		age: 12,
		message: 'Violência, Temas Sensíveis'
	}
);

const dgmAdventure = new Movie(
	'Digimon Adventure: Last Evolution Kizuna',
	'Em "Digimon Adventure: Last Evolution Kizuna", Tai e seus amigos DigiEscolhidos enfrentam uma jornada emocional quando descobrem que estão perdendo sua conexão com seus parceiros Digimon à medida que crescem. Enquanto lutam para encontrar uma maneira de manter suas amizades e salvar o Mundo Digital, são confrontados por uma ameaça sinistra que pode significar o fim de sua jornada como DigiEscolhidos.',
	'Natsuki Hanae, Yoshimasa Hosoya, Suzuko Mimori, Mutsumi Tamura, Junya Enoki, Hitomi Yoshida',
	'Tomohisa Taguchi',
	'Animação, Aventura, Fantasia',
	4.6,
	getImageURL('dgm-movie-post.jpg'),
	'https://youtu.be/wR7U3IDmFYA?si=WrQQXFP_P_ZoxUEN',
	{
		minutes: 94,
		hours: '1h34min'
	},
	{
		age: 10,
		message: 'Violência'
	}
);

const ygohDarkSide = new Movie(
	'Yu-Gi-Oh! The Dark Side of Dimensions',
	'Em "Yu-Gi-Oh! The Dark Side of Dimensions", Yugi Muto e seus amigos estão prestes a se formar no ensino médio quando um novo inimigo, Diva, surge com planos para ressuscitar o antigo Faraó do Milênio, Atem. Enquanto Yugi e seus amigos enfrentam Diva e sua poderosa magia, segredos do passado são revelados e o destino do mundo dos duelos de monstros é colocado em jogo.',
	'Dan Green, Eric Stuart, Amy Birnbaum, Wayne Grayson, Greg Abbey, Tara Sands',
	'Satoshi Kuwabara',
	'Animação, Ação, Fantasia',
	4.3,
	getImageURL('ygoh-movie-post.jpg'),
	'https://youtu.be/7tmC0KE-ASs?si=ICZGj6i2YRq53Epk',
	{
		minutes: 130,
		hours: '2h07min'
	},
	{
		age: 0,
		message: 'Livre para todos os públicos'
	}
);

const nrtsWillOfFire = new Movie(
	'Naruto Shippuden the Movie: The Will of Fire',
	'"Naruto Shippuden the Movie: The Will of Fire" segue Naruto Uzumaki e seus companheiros ninjas da Vila da Folha quando eles enfrentam uma ameaça devastadora. Um ninja renegado, Hiruko, busca o poder da técnica proibida para controlar os cinco elementos. Com a Vila da Folha em perigo, Naruto e seus amigos embarcam em uma missão para deter Hiruko e proteger sua casa.',
	'Junko Takeuchi, Chie Nakamura, Satoshi Hino, Nana Mizuki, Kazuhiko Inoue, Showtaro Morikubo',
	'Masahiko Murata',
	'Ação, Aventura, Animação',
	4.1,
	getImageURL('nrts-movie-post.jpg'),
	'https://youtu.be/xR62roSYoAo?si=BHHnCmjM6PR5O8tK',
	{
		minutes: 96,
		hours: '1h35min'
	},
	{
		age: 10,
		message: 'Violência'
	}
);

const bnhWorldHeroes = new Movie(
	'Boku no Hero Academia the Movie 3: World Heroes\' Mission',
	'"Boku no Hero Academia the Movie 3: World Heroes\' Mission" segue Izuku Midoriya e seus colegas da U.A. High School quando eles são acusados injustamente de um crime que não cometeram. Agora, fugitivos da lei, eles se unem a um misterioso herói chamado "Rody Soul" para limpar seus nomes e impedir uma conspiração global que ameaça a segurança de heróis e vilões em todo o mundo.',
	'Daiki Yamashita, Nobuhiko Okamoto, Yuka Terasaki, Toshiki Masuda, Kenta Miyake, Ayane Sakura',
	'Kenji Nagasaki',
	'Ação, Aventura, Animação',
	4.5,
	getImageURL('bnh-movie-post.jpg'),
	'https://youtu.be/ZclBluzAZVE?si=AQjDXSAMMAUu5lKp',
	{
		minutes: 104,
		hours: '1h44min'
	},
	{
		age: 12,
		message: 'Violência, Temas Sensíveis'
	}
);

const jjk0 = new Movie(
	'Jujutsu Kaisen 0: O Filme',
	'Em "Jujutsu Kaisen 0: O Filme", acompanhamos a história de Yuta Okkotsu, um jovem assombrado por eventos trágicos envolvendo uma maldição que o atormenta desde a infância. Ele se junta à Tokyo Metropolitan Curse Technical School para aprender a controlar sua maldição. No entanto, quando uma ameaça poderosa surge, Yuta e seus colegas se veem envolvidos em uma batalha que pode determinar o destino do mundo dos vivos e dos amaldiçoados.',
	'Megumi Ogata, Yuichi Nakamura, Asami Seto, Junya Enoki, Yuma Uchida, Kana Hanazawa, Ayane Sakura',
	'Sung Hoo Park',
	'Ação, Sobrenatural, Animação',
	4.7,
	getImageURL('jjk-movie-post.jpg'),
	'https://youtu.be/aTpSx7ERT7w?si=kaqIdvtCmt8w8seE',
	{
		minutes: 104,
		hours: '1h44min'
	},
	{
		age: 14,
		message: 'Atos Criminosos, Linguagem Imprópria, Temas Sensíveis, Violência'
	}
);

const weekdaysMovies = {
	seg: [
		knyMugenTrain,
		dbsBroly,
		pkmFirstMovie,
		jjk0
	],
	ter: [
		opStampede,
		silentVoice,
		saoOrdinalScale
	],
	qua: [
		opZ,
		dgmAdventure,
		ygohDarkSide,
		silentVoice,
		jjk0
	],
	qui: [
		nrtsWillOfFire,
		bnhWorldHeroes,
		jjk0
	],
	sex: [
		knyMugenTrain,
		dbsBroly,
		opStampede
	],
	sab: [
		saoOrdinalScale,
		opZ,
		dgmAdventure,
		ygohDarkSide
	],
	dom: [
		nrtsWillOfFire,
		bnhWorldHeroes,
		jjk0,
		pkmFirstMovie
	]
};

const initialWeekday = 'seg';
const initialMovieData = weekdaysMovies[initialWeekday][0];

export {
	knyMugenTrain,
	dbsBroly,
	opStampede,
	pkmFirstMovie,
	silentVoice,
	saoOrdinalScale,
	opZ,
	dgmAdventure,
	ygohDarkSide,
	nrtsWillOfFire,
	bnhWorldHeroes,
	jjk0,
	weekdaysMovies,
	initialMovieData
}