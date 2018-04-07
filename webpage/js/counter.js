console.log('test: ' + ("00" + 3).slice(-2) + ' :: ' + ("00" + 10).slice(-2));
window.onload = function(){
	window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

	var dateOpenICO = new Date('2018-05-15T09:00:00Z');

	function getTimeRemaining(endtime){
		var t = Date.parse(endtime) - Date.parse(new Date());
		var seconds = Math.floor( (t/1000) % 60 );
		var minutes = Math.floor( (t/1000/60) % 60 );
		var hours = Math.floor( (t/(1000*60*60)) % 24 );
		var days = Math.floor( t/(1000*60*60*24) );
		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function showCounter(){
		var time = getTimeRemaining(dateOpenICO);

		if(time.total > 0){
			HTMLClock.days.innerHTML = ("00" + time.days).slice(-2);
			HTMLClock.hours.innerHTML = ("00" + time.hours).slice(-2);
			HTMLClock.minutes.innerHTML = ("00" + time.minutes).slice(-2);
			HTMLClock.seconds.innerHTML = ("00" + time.seconds).slice(-2);

			requestAnimationFrame(showCounter);	
		}
	}
	var HTMLClock = {
		days: document.getElementById('days'),
		hours: document.getElementById('hours'),
		minutes: document.getElementById('minutes'),
		seconds: document.getElementById('seconds'),
	};

	
	console.log('window loaded');
	requestAnimationFrame(showCounter);
}
