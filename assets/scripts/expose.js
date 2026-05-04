// expose.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  // TODO
  const dropdown = document.getElementById("horn-select"); // Get the dropdown element
  const img = document.querySelector("#expose img"); // Get the image element
  const audio = document.querySelector("audio"); // Get the audio element
  const slider = document.getElementById("volume"); // Get the volume slider element
  const volumeIcon = document.querySelector("#volume-controls img"); // Get the volume icon element
  const playButton = document.querySelector("button"); // Get the play button element

  audio.volume = slider.value / 100; // Set the initial volume of the audio element

  //Select the horn
  dropdown.addEventListener("change", function () {
    const value = dropdown.value; //get the value of the selected option

    //update the image
    img.src = "assets/images/" + value + ".svg";
    img.alt = value;

    //update the audio
    audio.src = "assets/audio/" + value + ".mp3";
  });

  //Volume slider
  slider.addEventListener("input", function () {
    const volume = slider.value;
    audio.volume = volume / 100;

    if (volume == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
      volumeIcon.alt = "Volume at Level 0";
    } else if (volume < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
      volumeIcon.alt = "Volume at Level 1";
    } else if (volume < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
      volumeIcon.alt = "Volume at Level 2";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
      volumeIcon.alt = "Volume at Level 3";
    }
  });

  //Play button
  playButton.addEventListener("click", function () {
    if (dropdown.value === "select") {
      return;
    }
    audio.play();

    if (dropdown.value == "party-horn") {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
}
