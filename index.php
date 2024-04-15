<audio1 src="e4.wav" id="audio" controls style ="display: none;">
<audio2 src="b3.wav" id="audio" controls style ="display: none;">
<audio3 src="g3.wav" id="audio" controls style ="display: none;">
<audio4 src="d3.wav" id="audio" controls style ="display: none;">
<audio5 src="a2.wav" id="audio" controls style ="display: none;">
<audio6 src="e2.wav" id="audio" controls style ="display: none;">

<button type="button" onclick="playAudio();">
Play e' (1th String)
</button>
<button type="button" onclick="playAudio();">
Play b  (2th String)
</button>
<button type="button" onclick="playAudio();">
Play g  (3th String)
</button>
<button type="button" onclick="playAudio();">
Play d  (4th String)
</button>
<button type="button" onclick="playAudio();">
Play A  (5th String)
</button>
<button type="button" onclick="playAudio();">
Play E  (6th String)
</button>

<script>
		function playAudio() {
		document.getElementById("audio1").play();
	}
		function playAudio() {
		document.getElementById("audio2").play();
	}
		function playAudio() {
		document.getElementById("audio3").play();
	}
		function playAudio() {
		document.getElementById("audio4").play();
	}
		function playAudio() {
		document.getElementById("audio5").play();
	}
		function playAudio() {
		document.getElementById("audio6").play();
	}
</script>