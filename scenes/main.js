layers([
	"game",
  "items",
	"ui",
], "game");

const mpos = mousePos();

render(() => {
    drawSprite("hammer", {
      pos: mousePos('game'),
    });
});

add([
	sprite("ground"),
  layer("game"),
	scale(6),
]);

add([
	sprite("hole1"),
  layer("ui"),
	pos(20, 20),
	scale(2),
]);


add([
	sprite("hole1"),
  layer("ui"),
	pos(60, 20),
	scale(2),
]);


add([
	sprite("hole1"),
  layer("ui"),
	pos(100, 20),
	scale(2),
]);


add([
	sprite("hole1"),
  layer("ui"),
	pos(40, 60),
	scale(2),
]);

add([
	sprite("hole1"),
  layer("ui"),
	pos(80, 60),
	scale(2),
]);


add([
	sprite("hole1"),
  layer("ui"),
	pos(60, 100),
	scale(2),
]);

add([
	sprite("wassie"),
  layer("items"),
	pos(60, 100),
	scale(1.3),
]);






/*
kaboom({
	global: true,
	fullscreen: true,
	scale: 4,
	clearColor: [0, 0, 0, 1],
});

loadRoot("/pub/examples/");
loadSprite("steel", "img/steel.png");
loadSprite("ch1", "img/ch1.png");
loadSprite("ch2", "img/ch2.png");
loadSprite("grass", "img/grass.png");
loadSprite("door", "img/door.png");
loadSprite("key", "img/key.png");
loadSprite("guy", "img/guy.png");

scene("main", (levelIdx) => {

	const SPEED = 80;

	const characters = {
		"a": {
			sprite: "ch1",
			msg: "ohhi how are you",
		},
		"b": {
			sprite: "ch2",
			msg: "get out!",
		},
	};

	const levels = [
		[
			"=======|==",
			"=        =",
			"= a      =",
			"=        =",
			"=        =",
			"=    $   =",
			"=        =",
			"=        =",
			"=   @    =",
			"==========",
		],
		[
			"==========",
			"=        =",
			"=  $     =",
			"=        =",
			"|        =",
			"=        =",
			"=      b =",
			"=        =",
			"=   @    =",
			"==========",
		],
	];

	addLevel(levels[levelIdx], {
		width: 11,
		height: 11,
		pos: vec2(20, 20),
		"=": [
			sprite("steel"),
			solid(),
		],
		"$": [
			sprite("key"),
			"key",
		],
		"@": [
			sprite("guy"),
			"player",
		],
		"|": [
			sprite("door"),
			solid(),
			"door",
		],
		any(ch) {
			const char = characters[ch];
			if (char) {
				return [
					sprite(char.sprite),
					solid(),
					"character",
					{
						msg: char.msg,
					},
				];
			}
		},
	});

	const player = get("player")[0];

	let hasKey = false;
	let talking = null;

	function talk(msg) {
		talking = add([
			text(msg),
		]);
	}

	player.overlaps("key", (key) => {
		destroy(key);
		hasKey = true;
	});

	player.overlaps("door", () => {
		if (hasKey) {
			if (levelIdx + 1 < levels.length) {
				go("main", levelIdx + 1);
			} else {
				go("win");
			}
		} else {
			talk("you got no key!");
		}
	});

	player.overlaps("character", (ch) => {
		talk(ch.msg);
	});

	const dirs = {
		"left": vec2(-1, 0),
		"right": vec2(1, 0),
		"up": vec2(0, -1),
		"down": vec2(0, 1),
	};

	for (const dir in dirs) {
		keyPress(dir, () => {
			if (talking) {
				destroy(talking);
				talking = null;
			}
		});
		keyDown(dir, () => {
			player.move(dirs[dir].scale(SPEED));
		});
	}

	player.action(() => {
		player.pushOutAll();
	});

});

scene("win", () => {
	add([
		text("you win!"),
		pos(width() / 2, height() / 2),
		origin("center"),
	]);
});

go("main", 0);















addLevel([  // Add Objects
  '  @  @ ', ' ',//Position
  '  @  ',
  '  @  ',
  'xxxxx',
], {
  width: 40,
  height: 40,
  'x' : [sprite('ground'), solid()], //Show sprite / make solid
  //dangerous tag
  '@' : [sprite('enemy'), scale(0.5), 'dangerous']
})

*/


//drag
//Redraw of Hammer
