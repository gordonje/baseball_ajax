var playerData;

$(document).ready(function() {
    getData();
});

function getData() {
	$.getJSON('js/baseballcard.json', function(data) {
		playerData = data;
		drawStuff();
	})
};

function drawStuff() {

	lastSeason = playerData.stats.length - 1
	
	lastSeasonHomeRuns = playerData.stats[lastSeason].HR
	lastSeasonYear = playerData.stats[lastSeason].year
	lastSeasonTeam = playerData.stats[lastSeason].club	

	$(".chart").append("<h1>" + playerData.name + '</h1>');
	$(".chart").append("<h3>" + playerData.club + '</h3>');
	$(".chart").append("<p>In "+lastSeasonYear+", "+playerData.name+" hit "+lastSeasonHomeRuns+" home runs for the "+lastSeasonTeam+".");

};
