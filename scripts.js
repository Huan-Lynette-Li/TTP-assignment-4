
document
  .getElementsByTagName('button')[0]
  .addEventListener('click', function (event) {
    document.getElementsByClassName('row')[1].innerHTML =
      " <p>I'm right!</p><p>*C'mon click me*</p>";
  });
document
  .getElementsByTagName('button')[1]
  .addEventListener('click', function (event) {
    document.getElementsByClassName('row')[1].innerHTML =
      " <p>*C'mon click me*</p><p>No, I'm right!</p>";
  });

const calculateVolume = () => {
  console.log("Button clicked!")

  let r = document.getElementById("radius").value;

  let volume = (4.0 / 3.0) * Math.PI * Math.pow(r, 3);

  volume = (Math.round(volume * 100) / 100).toFixed(2);

  let volumeLabel = document.getElementById("volumeLabel");

  volumeLabel.innerText = "Volume: " + volume;

  return false;
}

$('.noHover').hover(function(){
  alert("Hey, I told you to not hover over me!");
})
