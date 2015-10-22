var radioInput = "";
var textInput = "";
var frequencyInput = "";
var perIntervalInput = "";


//FUNCTION USED TO TAKE INPUT FROM FORM AND PUT IT INTO A TABLE ROW

function getTableData() {
	if(frequencyInput === "Daily") {
	$("#daily").append("<div class=\"Row\">" +
				        "<div class=\"Cell\">" +
				            "<p>" + textInput + "</p>" +
				        "</div>" +
				        "<div class=\"Cell\">" +
				        	"<p>" + perIntervalInput + "</p>" +
				        "</div>" +
				        "<div class=\"Cell\">" +
				            "<p>" + radioInput + "</p>" +
				        "</div>" +
				        "<div class=\"Cell\">" +
				            "<button class=\"deleteButton\">Delete</button>" +
				        "</div>" +
				        "</div>");

	$('#dailyHeader').show();

	$('.deleteButton').click(function(){
	   $(this).parent().parent().remove();
	});
	}

	else if(frequencyInput === "Weekly") {
	$("#weekly").append("<div class=\"Row\">" +
				        "<div class=\"Cell\">" +
				            "<p>" + textInput + "</p>" +
				        "</div>" +
				        "<div class=\"Cell\">" +
				        	"<p>" + perIntervalInput + "</p>" +
				        "</div>" +
				        "<div class=\"Cell\">" +
				            "<p>" + radioInput + "</p>" +
				        "</div>" +
				        "<div class=\"Cell\">" +
				            "<button class=\"deleteButton\">Delete</button>" +
				        "</div>" +
				        "</div>");

	$('#weeklyHeader').show();

	$('.deleteButton').click(function(){
	   $(this).parent().parent().remove();
	});
	}

	else if(frequencyInput === "Monthly") {
	$("#monthly").append("<div class=\"Row\">" +
				        "<div class=\"Cell\">" +
				            "<p>" + textInput + "</p>" +
				        "</div>" +
				        "<div class=\"Cell\">" +
				        	"<p>" + perIntervalInput + "</p>" +
				        "</div>" +
				        "<div class=\"Cell\">" +
				            "<p>" + radioInput + "</p>" +
				        "</div>" +
				        "<div class=\"Cell\">" +
				            "<button class=\"deleteButton\">Delete</button>" +
				        "</div>" +
				        "</div>");

	$('#monthlyHeader').show();

	$('.deleteButton').click(function(){
	   $(this).parent().parent().remove();
	});
	}

	else if(frequencyInput === "Yearly") {
	$("#yearly").append("<div class=\"Row\">" +
				        "<div class=\"Cell\">" +
				            "<p>" + textInput + "</p>" +
				        "</div>" +
				        "<div class=\"Cell\">" +
				        	"<p>" + perIntervalInput + "</p>" +
				        "</div>" +
				        "<div class=\"Cell\">" +
				            "<p>" + radioInput + "</p>" +
				        "</div>" +
				        "<div class=\"Cell\">" +
				            "<button class=\"deleteButton\">Delete</button>" +
				        "</div>" +
				        "</div>");

	$('#yearlyHeader').show();

	$('.deleteButton').click(function(){
	   $(this).parent().parent().remove();
	});
	}

	else if(frequencyInput === "customInterval") {
	$("#custom").append("<div class=\"Row\">" +
				        "<div class=\"Cell\">" +
				            "<p>" + textInput + "</p>" +
				        "</div>" +
				        "<div class=\"Cell\">" +
				        	"<p>" + perIntervalInput + "</p>" +
				        "</div>" +
				        "<div class=\"Cell\">" +
				            "<p>" + radioInput + "</p>" +
				        "</div>" +
				        "<div class=\"Cell\">" +
				            "<button class=\"deleteButton\">Delete</button>" +
				        "</div>" +
				        "</div>");

	$("#customHeader").append("Every " + numCustomInt.value + " " + customIntSelect.value);
	$('#customHeader').show();

	/*$("#headerWrapper").append("<p id=\"customHeader\" style=\"display:none\" class=\"tableHeader\"></p>" +
"<div id=\"custom\" class=\"Table\"></div>");*/

/*for adding new headers for custom intervals*/


	$('.deleteButton').click(function(){
	   $(this).parent().parent().remove();

	});
	}
};
