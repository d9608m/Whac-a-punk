//Load Resources
loadSound("score", "https://kaboomjs.com/assets/sounds/score.mp3")
loadSound("ludwigvb", "https://kaboomjs.com/assets/sounds/ludwigvb.mp3")

loadSound("gameover", "https://kaboomjs.com/assets/sounds/gameover.mp3")


//Opening Sound
play("ludwigvb");


layers([
	"ground",
	"game",
	"ui",
], "game");


const upBound = 11;
const lowBound = height() - 100;
const speed = 110;
let speedMod = 1;

add([
	sprite("ground1"),
	layer("ground1"),
  scale(5),
]);


//Player Icon & Movements
const player = add([
	sprite("player"),
  pos(24,24),
	scale(1.5),
]);

//Movement Speed
const pSPEED = 150;

//Movement Direction
const dirs = {
		"left": vec2(-1, 0),
		"right": vec2(1, 0),
		"up": vec2(0, -1),
		"down": vec2(0, 1),
	};

	for (const dir in dirs) {
		keyDown(dir, () => {
			player.move(dirs[dir].scale(pSPEED));
		});
	}


//Adding the Items to each row
//Trench 1
const trench1 = 6;
loop(1.5, () => {
	const obj1 = choose([
		"punk",
		"wassie",
	]);
	add([
		sprite(obj1),
		"obj1",
		obj1,
		pos(width(), rand(trench1, trench1)),
	]);
});

action("obj1", (o) => {
	o.move(-speed * speedMod, 0);
	if (o.pos.x <= -width()) {
		destroy(o);
	}
});




//Trench 2
const trench2 = 46;
loop(1.8, () => {
	const obj2 = choose([
		"punk2",
		"wassie",
	]);
	add([
		sprite(obj2),
		"obj2",
		obj2,
		pos(width(), rand(trench2, trench2)),
	]);
});

action("obj2", (o) => {
	o.move(-speed * speedMod, 0);
	if (o.pos.x <= -width()) {
		destroy(o);
	}
});



//Trench 3
const trench3 = 86;
loop(1.7, () => {
	const obj3 = choose([
		"punk3",
		"wassie",
	]);
	add([
		sprite(obj3),
		"obj3",
		obj3,
		pos(width(), rand(trench3, trench3)),
	]);
});

action("obj3", (o) => {
	o.move(-speed * speedMod, 0);
	if (o.pos.x <= -width()) {
		destroy(o);
	}
});



//Trench 4
const trench4 = 126;
loop(1.4, () => {
	const obj4 = choose([
		"punk4",
		"wassie",
	]);
	add([
		sprite(obj4),
		"obj4",
		obj4,
		pos(width(), rand(trench4, trench4)),
	]);
});

action("obj4", (o) => {
	o.move(-speed * speedMod, 0);
	if (o.pos.x <= -width()) {
		destroy(o);
	}
});



// collisions or overlaps?
player.collides("punk", (p) => {
	destroy(p);
  play("score");
  score.value += 1;
  score.text = score.value;
});


player.collides("punk2", (p2) => {
	destroy(p2);
  play("score");
  score.value += 1;
  score.text = score.value;
});

player.collides("punk3", (p3) => {
	destroy(p3);
  play("score");
  score.value += 1;
  score.text = score.value;
});

player.collides("punk4", (p4) => {
	destroy(p4);
  play("score");
  score.value += 1;
  score.text = score.value;
});

player.collides("wassie", (w) => {
	destroy(player);
  go ("win");
});


//Score
const score = add([
	text(0),
	pos(5, 5),
	layer("ui"),
	{ value: 0, },
]);

 
//When score reaches X speed up 

//time
const time = add([
	text("1:00"),
	pos(5, 185),
	layer("ui"),
	{ value: 0, },
]);



//End Scene (Score = 10)
scene("win", () => {
	add([
		text("Gameover!"),
     play("gameover"),
		pos(width() / 2, height() / 2),
		origin("center"),
	]);
});


/*

//Outline Layers
layers([
	"game",
  "items",
	"ui",
], "game");

//Set Background
const background = add([
	sprite("ground"),
  scale(9),
]);


//Board Setup
const board = addLevel([
  "                        ",
  "                        ",
  "                        ",
	"   @    @     @    @    ",
	"   x    x     x    x    ",
  "                        ",
  "                        ",
  "                        ",
  "                        ",
  "                        ",
  "                        ",
  "                        ",
  "                        ",
	"     @     @     @      ",
	"     x     x     x      ",
  "                        ",
  "                        ",
  "                        ",
  "                        ",
  "                        ",
  "                        ",
  "                        ",
  "                        ",
	"       @      @         ",
	"       x      x         ",
  "                        ",
  "                        ",
  "                        ",
  "                        ",
  "                        ",
  "                        ",
  "                        ",
  "                        ",
	"           @            ",
	"           x            ",
], {
  width: 15,
	height: 7,
  "x" : [
    sprite("holeshape"), 
    layer("items"), 
    scale(2),
    ],
  "@" : [
    sprite("punk"), 
    layer("ui"), 
    'punk',
    scale(1.85),
    ],  
});




//Player Icon & Movements
const player = add([
	sprite("stone hammer"),
  pos(board.getPos(0, 0)),
  layer("ui"), 
	scale(2),
]);

//Movement Speed
const SPEED = 120;

//Movement Direction
const dirs = {
		"left": vec2(-1, 0),
		"right": vec2(1, 0),
		"up": vec2(0, -1),
		"down": vec2(0, 1),
	};

	for (const dir in dirs) {
		keyDown(dir, () => {
			player.move(dirs[dir].scale(SPEED));
		});
	}

//Keep Player Icon on Board
player.action(() => {
	if (player.pos.y >= 320) {
		respawn();
	}
});


//Punk Spawing @ random in holes
//Drive Example https://kaboomjs.com/examples#drive
const upBound = 40;
const lowBound = height() - 12;

loop(0.4, () => {
	const obj = choose([
		"punk",
    "wassie",
	]);
	add([
		sprite(obj),
		"obj",
		obj,
		pos(width(), rand(lowBound, upBound)),
    layer("ui")
	]);
});










//If play overlaps punk destroy & add score
player.overlaps('punk', (p) => {
  destroy(p);
  play("score");
  score.value += 1;
	score.text = score.value;
  if (score.value == 10){
    go ('win');
  }
});

//Score
const score = add([
	text(0),
	pos(12, 12),
	layer("ui"),
	{ value: 0, },
]);

//End Scene (Score = 10)
scene("win", () => {
	add([
		text("you win!"),
		pos(width() / 2, height() / 2),
		origin("center"),
	]);
});


*/


/*

Snippets:

const MOVE_SPEED = 500

keyDown("right", () => {
  player.move(MOVE_SPEED, 0)
});

keyDown("left", () => {
  player.move(-MOVE_SPEED, 0)
});

keyDown("up", () => {
  player.move(MOVE_SPEED, 0)
});


const player = add([
	render(() => {
  drawSprite("hammer", {
      pos: mousePos('game'),
      scale: 2,
    });
  })
]);

*/
