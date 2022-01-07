

const calculateVolume = () => {
  console.log("Button clicked!")

  let r = document.getElementById("radius").value;

  let volume = (4.0 / 3.0) * Math.PI * Math.pow(r, 3);

  volume = (Math.round(volume * 100) / 100).toFixed(2);

  let volumeLabel = document.getElementById("volumeLabel");

  volumeLabel.innerText = "Volume: " + volume;

  return false;
}