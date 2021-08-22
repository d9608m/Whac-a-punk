const score = args || 0;

const end = play("ludwigvb");
end.volume(0.5);

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
  color(rgb(0.95, 0.5, 0.03)),
  layer("ui")
])

add([
  text(score, 8),
  origin("center"),
  pos(width() / 2 + 10, height() / 2 + 10),
  color(rgb(0.95, 0.5, 0.03)),
  layer("ui")
])

add([
  text("Press 'space' to start again!", 8),
  origin("center"),
  pos(width() / 2, height() - 10),
  color(rgb(0.95, 0.5, 0.03)),
  layer("ui")
])


//Restart Main (Game)
mouseClick(() => {
  go("main");
})

keyPress("space", () => {
  go("main");
})