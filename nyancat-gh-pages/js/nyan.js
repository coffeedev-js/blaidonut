console.log('Blaid!')

let playing = false;

function cycleFrames (_nyanCat, _currentFrame) {
	_nyanCat.classList = []
	_nyanCat.classList.add(`frame${_currentFrame}`)
}

function replicateSparks (_sparksRow) {
	const numberOfRowsToCoverEntireScreen = Math.ceil(document.body.offsetHeight / _sparksRow.offsetHeight)
	const newSparksRows = document.createElement('div')

	for (let a = 0; a < numberOfRowsToCoverEntireScreen-1; a++) {
		newSparksRows.append(_sparksRow.cloneNode(true))
	}

	document.body.prepend(newSparksRows)
}

(function () {
	let nyanCat = document.getElementById('nyan-cat')
	let currentFrame = 1

	replicateSparks(document.getElementsByClassName('sparks-combo')[0])

	setInterval(function () {
		currentFrame = (currentFrame % 6) + 1
		cycleFrames(nyanCat, currentFrame)
	}, 70);

	document.onclick = () => {
		if (!playing) {
			playing = true;
			document.querySelector("audio").play();
			document.querySelector(".clicktoplay").classList.add("hidden");
		}
	}
})();



function blaidEngine(){
	var blaidonuts = 0;
	setInterval(() => {
	blaidonuts++
	document.getElementById("countertext").innerHTML = "You've successfully wasted " + blaidonuts + " seconds";
	}, 1000);
}
