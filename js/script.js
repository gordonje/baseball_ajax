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
	
	lastSeasonHomeRuns = playerData.stats[playerData.stats.length -1].HR
	lastSeasonYear = playerData.stats[playerData.stats.length -1].year
	lastSeasonTeam = playerData.stats[playerData.stats.length -1].club	

	$(".chart").append("<h1>" + playerData.name + '</h1>');
	$(".chart").append("<h3>" + playerData.club + '</h3>');
	$(".chart").append("<p>In "+lastSeasonYear+", "+playerData.name+" hit "+lastSeasonHomeRuns+" home runs for the "+lastSeasonTeam+".");

};
