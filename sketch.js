// var symbolSize = 26;
// var streams = [];
//
// function setup() {
//   createCanvas(
//     window.innerWidth,
//     window.innerHeight
//   );
//   background(0);
//   var x = 0;
//   for (var i = 0; i <= width / symbolSize; i++) {
//     var stream = new Stream();
//     stream.generateSymbols(x, random(-1000, 0));
//     streams.push(stream);
//     x += symbolSize;
//   }
//   textSize(symbolSize);
// }
//
// function draw() {
//   background(0, 150);
//   streams.forEach(function(stream) {
//     stream.render();
//   });
// }
//
// function Symbol(x, y, speed, first) {
//   this.x = x;
//   this.y = y;
//   this.value;
//   this.speed = speed;
//   this.switchInterval = round(random(2, 20));
//   this.first = first;
//
//   this.setToRandomSymbol = function() {
//     if (frameCount % this.siwtchInterval == 0) {
//       this.value = String.fromCharCode(
//         0x30A0 + round(random(0, 96))
//       );
//     }
//   }
//
//   this.rain = function() {
//     this.y = (this.y >= height) ? 0 : this.y += this.speed;
//   }
// }
//
// function Stream() {
//   this.symbols = [];
//   this.totalSymbols = round(random(5, 30));
//   this.speed = random(5, 20);
//
//   this.generateSymbols = function(x, y) {
//     var first = round(random(0, 4)) == 1;
//     for (var i = 0; i <= this.totalSymbols; i++) {
//       symbol = new Symbol(x, y, this.speed);
//       symbol.setToRandomSymbol();
//       this.symbols.push(symbol);
//       y -= symbolSize;
//       first = false;
//     }
//   }
//
//   this.render = function() {
//     this.symbols.forEach(function(symbol) {
//       if (symbol.first) {
//         fill(180, 255, 180);
//       } else {
//         fill(0, 255, 70);
//       }
//       text(symbol.value, symbol.x, symbol.y);
//       symbol.rain();
//       symbol.setToRandomSymbol();
//     });
//   }
// }


var streams = [];
var fadeInterval = 1.6;
var symbolSize = 14;
var clickCounter = 0;

function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );
  background(0);

  var x = 0;
  for (var i = 0; i <= width / symbolSize; i++) {
    var stream = new Stream();
    stream.generateSymbols(x, random(-2000, 0));
    streams.push(stream);
    x += symbolSize
  }

  textFont('Consolas');
  textSize(symbolSize);
}

function draw() {
  background(0, 150);
  streams.forEach(function(stream) {
    stream.render();
  });
}

function Symbol(x, y, speed, first, opacity) {
  this.x = x;
  this.y = y;
  this.value;

  this.speed = speed;
  this.first = first;
  this.opacity = opacity;

  this.switchInterval = round(random(2, 25));

  this.setToRandomSymbol = function() {
    var charType = round(random(0, 5));
    if (frameCount % this.switchInterval == 0) {
      if (charType > 1) {
        // set it to Katakana
        this.value = String.fromCharCode(
          0x30A0 + round(random(0, 96))
        );
      } else {
        // set it to numeric
        this.value = round(random(0,9));
      }
    }
  }

  this.rain = function() {
    this.y = (this.y >= height) ? 0 : this.y += this.speed;
  }

}

function mousePressed() {
  clickCounter++;
  console.log(clickCounter);
}

function Stream() {
  this.symbols = [];
  this.totalSymbols = round(random(5, 35));
  this.speed = random(5, 22);

  this.generateSymbols = function(x, y) {
    var opacity = 255;
    var first = round(random(0, 4)) == 1;
    for (var i =0; i <= this.totalSymbols; i++) {
      symbol = new Symbol(
        x,
        y,
        this.speed,
        first,
        opacity
      );
      symbol.setToRandomSymbol();
      this.symbols.push(symbol);
      opacity -= (255 / this.totalSymbols) / fadeInterval;
      y -= symbolSize;
      first = false;
    }
  }

  this.render = function() {
    this.symbols.forEach(function(symbol) {
      if (clickCounter == 0) {
        if (symbol.first) {
          fill(255, 128, 128, symbol.opacity);

          // fill(round(random(0,255)),round(random(0,255)),round(random(0,255)),symbol.opacity)
        } else {
          fill(255, 0, 0, symbol.opacity);

          // fill(round(random(0,255)),round(random(0,255)),round(random(0,255)),symbol.opacity)
        }
      } else if (clickCounter == 1) {
        if (symbol.first) {
          // fill(140, 255, 170, symbol.opacity);
          fill(255, 191, 128, symbol.opacity);

          // fill(round(random(0,255)),round(random(0,255)),round(random(0,255)),symbol.opacity)
        } else {
          // fill(0, 255, 70, symbol.opacity);
          fill(255, 128, 0, symbol.opacity);

          // fill(round(random(0,255)),round(random(0,255)),round(random(0,255)),symbol.opacity)
        }
      } else if (clickCounter == 2) {
        if (symbol.first) {
          // fill(140, 255, 170, symbol.opacity);
          fill(255, 255, 128, symbol.opacity);

          // fill(round(random(0,255)),round(random(0,255)),round(random(0,255)),symbol.opacity)
        } else {
          // fill(0, 255, 70, symbol.opacity);
          fill(255, 255, 0, symbol.opacity);

          // fill(round(random(0,255)),round(random(0,255)),round(random(0,255)),symbol.opacity)
        }
      } else if (clickCounter == 3) {
        if (symbol.first) {
          fill(140, 255, 170, symbol.opacity);
          // fill(255, 255, 128, symbol.opacity);

          // fill(round(random(0,255)),round(random(0,255)),round(random(0,255)),symbol.opacity)
        } else {
          fill(0, 255, 70, symbol.opacity);
          // fill(255, 255, 0, symbol.opacity);

          // fill(round(random(0,255)),round(random(0,255)),round(random(0,255)),symbol.opacity)
        }
      } else if (clickCounter == 4) {
        if (symbol.first) {
          fill(128, 128, 255, symbol.opacity);
          // fill(255, 255, 128, symbol.opacity);

          // fill(round(random(0,255)),round(random(0,255)),round(random(0,255)),symbol.opacity)
        } else {
          fill(0, 0, 255, symbol.opacity);
          // fill(255, 255, 0, symbol.opacity);

          // fill(round(random(0,255)),round(random(0,255)),round(random(0,255)),symbol.opacity)
        }
      } else if (clickCounter == 5) {
        if (symbol.first) {
          fill(191, 128, 255, symbol.opacity);
          // fill(255, 255, 128, symbol.opacity);

          // fill(round(random(0,255)),round(random(0,255)),round(random(0,255)),symbol.opacity)
        } else {
          fill(128, 0, 255, symbol.opacity);
          // fill(255, 255, 0, symbol.opacity);

          // fill(round(random(0,255)),round(random(0,255)),round(random(0,255)),symbol.opacity)
        }
      } else if (clickCounter == 6) {
        if (symbol.first) {
          // fill(140, 255, 170, symbol.opacity);
          // fill(255, 255, 128, symbol.opacity);

          fill(round(random(0,255)),round(random(0,255)),round(random(0,255)),symbol.opacity)
        } else {
          // fill(0, 255, 70, symbol.opacity);
          // fill(255, 255, 0, symbol.opacity);

          fill(round(random(0,255)),round(random(0,255)),round(random(0,255)),symbol.opacity)
        }
      }  else if (clickCounter == 7) {
        if (symbol.first) {
          fill(145, 237, 228, symbol.opacity);
          // fill(255, 255, 128, symbol.opacity);

          // fill(round(random(0,255)),round(random(0,255)),round(random(0,255)),symbol.opacity)
        } else {
          fill(64, 224, 208, symbol.opacity);
          // fill(255, 255, 0, symbol.opacity);

          // fill(round(random(0,255)),round(random(0,255)),round(random(0,255)),symbol.opacity)
        }
      }  else if (clickCounter == 8) {
        if (symbol.first) {
          fill(255, 230, 234, symbol.opacity);
          // fill(255, 255, 128, symbol.opacity);

          // fill(round(random(0,255)),round(random(0,255)),round(random(0,255)),symbol.opacity)
        } else {
          fill(255, 192, 203, symbol.opacity);
          // fill(255, 255, 0, symbol.opacity);

          // fill(round(random(0,255)),round(random(0,255)),round(random(0,255)),symbol.opacity)
        }
      } else {
        clickCounter = 0;
      }
      text(symbol.value, symbol.x, symbol.y);
      symbol.rain();
      symbol.setToRandomSymbol();
    });
  }
}






// $(document).ready(function() {
//
//   $('#clickme').on("click", function(){
//     alert('sup');
//     console.log('hi');
//   });
//
// });
