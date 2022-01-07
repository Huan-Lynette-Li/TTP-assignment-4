
$(document).ready(function() {

	function printHTML(text){
		let printHTML = document.getElementById('text');
		printHTML.innerHTML += text;
	}


	$('#buttonOne').click(function(){
        $('.text2').remove();
			printHTML("<h1 class='text1'>I'm right! </h1>" );
		})

	$('#buttonTwo').click(function(){
        $('.text1').remove();
			printHTML("<h1 class='text2'> No, I'm right!! </h1>");
    })
})

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