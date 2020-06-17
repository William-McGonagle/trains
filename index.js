const express = require('express');
const sharp = require('sharp');
const app = express();
const port = 8000;
const fs = require('fs');

const maxTrain = 8;

const quotes = [
  'If ur going too fast ur going to derail, crash into a residential area, kill everyone onboard ur train, and probably a lot of people in houses',
  'Trains rights are human rights',
  'When life gets tough, get right back on the train tracks',
  'Train your mental state and you may be emotionally stable some day!',
  "I'm all about that Beijing-Tianjin Intercity Rail -Meghan TRAINor",
  "just because you're at the railroad tracks doesn't mean you should jump",
  "I'm only happy when it trains",
  "I'm all about that trans-por, trans-por, transportation -Meghan TRAINor",
  "The rain in Spain falls gently on the train",
  "Make out with a steam engine and you'll be trainsported to new heights",
  "More than 300 times last year, people walked onto railroad tracks to intentionally put themselves in the path of a train — and in 266 cases they successfully committed suicide.",
  "why make out in the rain when you can make out in the train",
  "Choo choo motherfucker, as once said by a vehicle called by Thomas",
  "don't play on the tracks, because no matter how much you can run away from your sins, you can never run away from your trains",
  "The little engine that could... but they never said you were as capable",
  "Railroad crossing? More like crossing over to the other side",
  "it's train o' clock! what emotional train wreck do you want to be apart of?",
  "It's a bird? It's a plane? It's a... train!",
  "yknow the movie, how to train your dragon? lets that that, but trains",
  "Why did the chicken cross the road? So that it could bring more train quotes to you",
  "emotional rollercoaster?? i only know the everlasting pain of being hit by multiple trains",
  "show your devotion to the apparent locomotion",
  "do you like danganronpa?? this post has nothing to do with trains",
  "they committed the murder without a good... locomotive",
  "haha train go brrt",
  "chugga chugga you lonely fucker",
  "car sex? public sex? semi-public sex? no, train sex, we fuck like men",
  "train train train i am in pain pain pain",
  "i'm a train kinnie uwu",
  "TRAIN me to suck ur toes, double daddy",
  "The mile high club is nothing compared to the railroad rut shack",
  "I'd say we're all letting this train run off the tracks",
  "if you can get turned on by hope, then you can get turned on by trains. this was brought to you by a nagito komaeda kinnie",
  "i like big trains and i cannot lie.",
  "my parents got run over by trains. but at least i got free train rides for the rest of my life!!",
  "If you're feeling horny, just railroad me rn ;)",
  "you'll know what true love is like once you lie on the tracks and feel death train's kiss",
  "death's a funny pal with a weird sort of talent",
  "birds might not be real, but trains are. don't you fucking dare play on the tracks"
];

app.get('/api/train/:x/:y/', function (req, res) {

  if (req.params.x == undefined || req.params.y == undefined) return res.sendStatus(400);

  let x = parseInt(req.params.x);
  let y = parseInt(req.params.y);

  if (isNaN(x) || isNaN(y)) return res.sendStatus(400);

  var readStream = fs.createReadStream(__dirname + '/train/' + Math.ceil(maxTrain * Math.random()) + '.jpg');
  var resize = sharp().resize(x, y);

  readStream.pipe(resize).pipe(res);

});

app.get('/api/quote/', function (req, res) {

  return res.json({
    quote: quotes[Math.floor(Math.random() * quotes.length)]
  });

});

app.use(express.static('public'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
