let startsCount = 200;
let startsMin = 50;
let startsMax = 3000;
let stars = [];
let starsSlider;
let speed = 5;
let minSpeed = 1;
let maxSpeed = 40;
let speedSlider;

function setup() {
  createCanvas(400, 400);

  for (let i = 1; i <= startsCount; i++) {
    stars.push(
      new Star(
        random(-width, width),
        random(-height, height),
        random(width, width * 2)
      )
    );
  }

  createSliders();
}

function draw() {
  background("black");
  translate(width / 2, height / 2);

  adjustStarCount();
  adjustSpeed();

  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}

createSliders = () => {
  let countContainer = createDiv();
  countContainer.style("display", "flex");
  countContainer.style("align-items", "center");
  countContainer.style("gap", "10px");

  let countText = createP("Number of Stars:");
  countText.parent(countContainer);

  starsSlider = createSlider(startsMin, startsMax, startsCount);
  starsSlider.size(200);
  starsSlider.parent(countContainer);

  let speedContainer = createDiv();
  speedContainer.style("display", "flex");
  speedContainer.style("align-items", "center");
  speedContainer.style("gap", "10px");

  let speedText = createP("Speed:");
  speedText.parent(speedContainer);

  speedSlider = createSlider(minSpeed, maxSpeed, speed);
  speedSlider.size(200);
  speedSlider.parent(speedContainer);
};

adjustSpeed = () => {
  let sliderValue = speedSlider.value();
  for (let i = 0; i < stars.length; i++) {
    stars[i].speed = sliderValue;
  }
};

adjustStarCount = () => {
  let sliderValue = starsSlider.value();

  if (sliderValue > stars.length) {
    // Add more stars if the slider value is greater than the current number of stars
    for (let i = stars.length; i < sliderValue; i++) {
      stars.push(
        new Star(
          random(-width, width),
          random(-height, height),
          random(width, width * 2)
        )
      );
    }
  }

  if (sliderValue < stars.length) {
    // Remove stars if the slider value is less than the current number of stars
    stars.splice(sliderValue);
  }
};
