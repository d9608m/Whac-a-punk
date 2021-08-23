const score = args || 0;

//End Sound
const end = play("gameover");

//Adding Background
add([
  rect(width(), height()),
  color(0, 0, 0),
  layer("bg"),
])

//Adding Text and Score
add([
  text("Game Over", 12),
  origin("center"),
  pos(width() / 2, 35),
  color(rgb(1, 0, 0, 1)),
  layer("ui")
])

add([
  text("Score: " + score, 8),
  origin("center"),
  pos(width() / 2 + 5, height() / 2 + 10),
  color(rgb(1, 0, 0, 1)),
  layer("ui")
])

add([
  text("Press 'space' to start again!", 5),
  origin("center"),
  pos(width() / 2, height() - 10),
  color(rgb(1, 0, 0, 1)),
  layer("ui")
])


//Restart Main (Game)
mouseClick(() => {
  go("main");
})

keyPress("space", () => {
  go("main");
})