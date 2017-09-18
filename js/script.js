const letters = document.getElementsByTagName("span");

const states = "animation";

 

function togglePulse() {
	setInterval(function(){
		for(let i = 0; i < letters.length; i++) {
			if(letters[i].className != states) {
				letters[i].className = states;
			} else {
				letters[i].className = "normal"; 
			}
		}
	}, 500);
}

togglePulse();