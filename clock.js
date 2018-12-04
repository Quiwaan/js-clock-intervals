document.addEventListener('DOMContentLoaded', function(){
	console.log('DOM was loaded!');

	var sec = document.getElementById("second");
	var min = document.getElementById("minute");
	var hou = document.getElementById("hour");
	var sdeg = 0;
	var mdeg = 0;
	var hdeg = 0;


	
	var time = new Date;
	var currentSec = time.getSeconds();
	var currentMin = time.getMinutes();
	var currentHr = time.getHours();
	

	var secRoto = function(ssmm){
		let secRoto = (ssmm / 60) * 360;
		return secRoto;
	};

	var hourRoto = function(hr, min){
		let hourRoto = (hr * 30 ) + (min * .5);
		console.log(currentHr)
		return hourRoto;
	};


var hands = function(){
sec.style.transform = "rotate(" + secRoto(currentSec) + "deg)";
min.style.transform = "rotate(" + secRoto(currentMin) + "deg)";
hou.style.transform = "rotate(" + hourRoto(currentHr, currentMin) + "deg)";
};

hands();




	var mins = setInterval(function(){
		time = new Date;
	currentSec = time.getSeconds();
	currentMin = time.getMinutes();
	currentHr = time.getHours();
	hands();
	console.log(currentHr)
	}, 1000);
 

});




// 	rotoSeconds();
// 	rotoMintues();
// 	rotoHour();
// }, 1000);


// function rotoSeconds(){
// 	sdeg += 6;
// 	sec.style.transfrom = "rotate(" + sdeg + "deg)";
// }

// function rotoMintues(){
// 	mdeg += .1;
// 	min.style.transform = "rotate(" + mdeg + "deg)";
// }

// function rotoHour (){
// 	hdeg += (.1/60);
// 	hou.style.transform = "rotate(" + hdeg + "deg)";
// }

// var hands = function(){
// sec.style.transform = "rotate(" + sdeg + "deg)";
// min.style.transform = "rotate(" + mdeg + "deg)";
// hou.style.transform = "rotate(" + hdeg + "deg)";
// };





// 	currentSec = timer.getSeconds();
// 	currentMin = timer.getMinutes();
// 	currentHr = timer.getHours();


	
// 	var mins = setInterval(function(){
// 		timer = new Date;
// 	currentSec = timer.getSeconds();
// 	currentMin = timer.getMinutes();
// 	currentHr = timer.getHours();
// 	}, 1000);


// // var secRoto function(sec, min) {
// // 	let	sdeg = (sec, min / 60) * 360;
// 		// second.style.transform = "rotate(" + sdeg + "deg)";
// 		// min.style.transform = "rotate(" + mdeg + "deg)";
// 		return sdeg, mdeg;
// 	}

// 	// function minuteRoto(sec) {
// 	// 	mdeg = (sec, min / 60) * 360;
// 	// 	min.style.transform = "rotate(" + mdeg + "deg)";
// 	// }	

// function hourRoto(min, hr) {
// 	let	hdeg = (min, hr / 12) * 360;
// 		// hou.style.transform = "rotate(" + hdeg + "deg)";
// 		// return hdeg;
// 	}
// var hands = function(){
// shand.style.transform = "rotate(" + sdeg + "deg)";
// min.style.transform = "rotate(" + mdeg + "deg)";
// hou.style.transform = "rotate(" + hdeg + "deg)";
// };















// var timer = new Date;
// var currentSec = timer.getSeconds();
// var currentMin = timer.getMinutes();
// var currentHr = timer.getHours();



















// 	function secondRoto(sec) {
// 		sdeg = (sec / 60) * 360
// 		return sdeg
// 	}


// 	function minuteRoto(sec, min) {
// 		mdeg = (min / 60) * 360
// 		if (sec >= 30) {
// 			mdeg += 3
// 		}
// 		return mdeg
// 	}


// 	function hourRoto(min, hr) {
// 		hdeg = (hr / 12) * 360
// 		hdeg += (min * 0.5)
// 		return hdeg
// 	}

// 	function handRoto(clockHand, degree) {
// 		clockHand.style.transform = "rotate(" + "degree" + "deg)"
// 	}

// 	function clockMove(ss, mm, hh) {
// 		var secDeg = secondRoto(ss)
// 			var minDeg = minuteRoto(ss, mm)
// 			var hrdeg = hourRoto(mm, hh)
// 			handRoto(sec, secDeg)
// 			handRoto(min, minDeg)
// 			handRoto(hou, hrdeg)
// 	}
// 	function clockStart() {
// 		var now = new Date()
// 		moveClock(now.getSeconds(), now.getMinutes(), now.getHours())
// 	}

// var timer = new Date;
// var currentSec = timer.getSeconds();
// var currentMin = timer.getMinutes();
// var currentHr = timer.getHours();



// var fullTockClick = setInterval(function(){
// 	timer = new Date;
// 	currentSec = timer.getSeconds();
// 	currentMin = timer.getMinutes();
// 	currentHr = timer.getHours();
// 	ticker();	
// 	}, 1000);
// }
// });


