const letters = document.getElementsByTagName("span");
const state = "animation";
 
window.onload =	setInterval(function(){
		for(let i = 0; i < letters.length; i++) {
			if(letters[i].className != state) {
				letters[i].className = state;
			} else {
				letters[i].className = "normal"; 
			}
		}
	}, 500);
