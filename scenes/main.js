//Load Resources
loadSound("score", "https://kaboomjs.com/assets/sounds/score.mp3")
loadSound("ludwigvb", "https://kaboomjs.com/assets/sounds/ludwigvb.mp3")


//Opening Sound
play("ludwigvb");

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
