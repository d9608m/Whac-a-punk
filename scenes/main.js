
//Tag and const
const player_tag = "player";
const punk_tag ="punks";
const obstacle_tag = "obstacle";


let score = 0;

const bgMusic = play("music");
bgMusic.volume(0.5);


//Layers
layers([
	"background",
	"game",
	"ui"
])

//Background
add([
  rect(width(), height()),
  color(0, 0, 0),
  layer("background")
])

//Bottom
const bottom = add([
  sprite("ground1"),
  layer("background"),
  pos(0,162),
])

loop(0.5, () => {
  bottom.frame = bottom.frame === 1 ? 1 : 1;
});


//Add Player Icon - Movement & Speed
const player = add([
	sprite("player", {
    frame: 0,
  }),
  layer("game"),
  pos(90,165),
	scale(1.5),
  player_tag
]);

//Player Icon Movement
loop(0.5, () => {
  player.frame = player.frame === 1 ? 2 : 1;
});


//Player Movement Speed
const pSPEED = 160;


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



const upBound = width() - 1;
const lowBound = height() - 1;


function isOutOfBound() {
  if ((player.pos.x < 0
    || player.pos.x > width() - 10
    || player.pos.y > height() - 10
  )) { return true; }
}

function resetPos() {
  player.pos.x = 90;
  player.pos.y = height() - 20;
}

action(() => {
  if (isOutOfBound()) {
    resetPos();
  }
})



let speedMod = 1;
let speed = 130;


//const speed if score >10 speed = 

//Adding Game Items (Punk or Wassie) for each of the rows - Item Added, Position, Speed
//Trench 1
const trench1 = 15;
loop(1.2, () => {
	const obj1 = choose([
		"punk",
		"wassie",
	]);
	add([
		sprite(obj1),
    layer("game"),
		"obj1",
		obj1,
		pos(width(), rand(trench1, trench1)),
	]);
});

//Make item move and destroy when out of screen
action("obj1", (o) => {
	o.move(-speed * speedMod, 0);
	if (o.pos.x <= -width()) {
		destroy(o);
	}
});

//Trench 2
const trench2 = 55;
loop(1.4, () => {
	const obj2 = choose([
		"punk2",
		"wassie",
	]);
	add([
		sprite(obj2),
    layer("game"),
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
const trench3 = 95;
loop(1.6, () => {
	const obj3 = choose([
		"punk5",
		"wassie",
	]);
	add([
		sprite(obj3),
    layer("game"),
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
const trench4 = 135;
loop(1.3, () => {
	const obj4 = choose([
		"punk3",
		"wassie",
	]);
	add([
		sprite(obj4),
    layer("game"),
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



const scoreText = add([
	text("0", 8),
  pos(183,2),
	layer("ui"),
]);

const speedText = add([
	text("Speed 0", 8),
  pos(0,0),
	layer("background"),
  color(0, 0, 0),
]);

// collisions or overlaps?
player.collides("punk", (p) => {
	destroy(p);
  play("score");
  score += 5;
  speed += 3;
  speedText.text = speed;
  scoreText.text = score;
  speedText.text = speed;
});


player.collides("punk2", (p2) => {
	destroy(p2);
  play("score");
  score += 3;
  speed += 5;
  speedText.text = speed;
  scoreText.text = score;
});

player.collides("punk5", (p3) => {
	destroy(p3);
  play("score");
  score += 2;
  speed += 6;
  speedText.text = speed;
  scoreText.text = score;
});

player.collides("punk3", (p4) => {
	destroy(p4);
  play("score");
  score += 1;
  speed += 7;
  speedText.text = speed;
  scoreText.text = score;
});

player.collides("wassie", (w) => {
	destroy(player);
  bgMusic.stop();
  go("gameover", score);
});