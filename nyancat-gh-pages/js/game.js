console.log('Blaid!')

var gameData = {
	seconds: 0,
	blaidonuts: 0,
	donutModCost: 15,
	donutMod: false,
	blaidwithhatCost: 15,
	blaidwithhat: false
}

var saveGameLoop = window.setInterval(function(){
	localStorage.setItem("blaidonutSaveGame", JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("blaidonutSaveGame"))
if (savegame !== null){
	gameData = savegame
}

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
	setInterval(() => {
		gameData.seconds++
		document.getElementById("countertext").innerHTML = "You've successfully wasted " + gameData.seconds + " seconds";
	}, 1000);

	setInterval(() => {
		gameData.blaidonuts++
		document.getElementById("donuts").innerHTML = "Blaidonuts: " + gameData.blaidonuts + " 🍩";
	}, 900000);
	/*setInterval(()=> {
		buttonCheck();
		modCheck();
	}, 60000);*/
}

/*function modCheck(){
    if(gameData.donutMod == true) {
      document.getElementById("buyDonutMod").disabled = true;
      document.getElementById("buyDonutMod").innerHTML = "Blaidonut Mod: Acquired ✅"
    }
  }

function buttonCheck()  {
  if(gameData.blaidonuts < gameData.blaidwithhatCost){
   document.getElementById("buyBlaidwithHat").disabled = true;
  } else document.getElementById("buyBlaidwithHat").disabled = false;
  if(gameData.blaidonuts < gameData.blaidwithhatCost){
   document.getElementById("buyBlaidwithHat").disabled = true;
  } else document.getElementById("buyBlaidwithHat").disabled = false;
}

function buydonutMod() {
    if(gameData.blaidonuts >= gameData.donutModCost) {
      gameData.blaidonuts -= gameData.donutModCost
      gameData.donutMod = true
      ocument.getElementById("donuts").innerHTML = "Blaidonuts: " + gameData.blaidonuts;
      document.getElementById("buyDonutMod").innerHTML = "Blaidonut Mod: Acquired ✅"
    }
}*/