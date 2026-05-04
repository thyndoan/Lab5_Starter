// explore.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  // TODO
  const voiceSelect = document.getElementById("voice-select");
  const synth = window.speechSynthesis;
  const talkButton = document.querySelector("button");
  const textArea = document.querySelector("textarea");
  const img = document.querySelector("#explore img");

  //load voice options
  function loadVoices() {
    //get voice from synth
    const voice = synth.getVoices();

    //add each voice as an option to the dropdown menu
    voice.forEach(function (voice) {
      const option = document.createElement("option");
      option.value = voice.name;
      option.textContent = voice.name + " (" + voice.lang + ")";
      voiceSelect.appendChild(option);
    });
  }
  loadVoices();
  synth.addEventListener("voiceschanged", loadVoices);
  //Press the talk button
  talkButton.addEventListener("click", function () {
    //get the text
    const text = textArea.value;

    //create a new utterance with the text
    const utterThis = new SpeechSynthesisUtterance(textArea.value);
    const voice = synth.getVoices();
    utterThis.voice = voice.find((v) => v.name === voiceSelect.value);

    //Change the image
    //swap face image while speaking
    utterThis.onstart = function () {
      img.src = "assets/images/smiling-open.png";
    };
    //swap back when finish speaking
    utterThis.onend = function () {
      img.src = "assets/images/smiling.png";
    };

    //Get it to speak
    synth.speak(utterThis);
  });
}
