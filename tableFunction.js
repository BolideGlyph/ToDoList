var radioInput = "";
var textInput = "";
var frequencyInput = "";
var perIntervalInput = "";
var selectInput = "";


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

	$("#headerWrapper").append( "<p class=\"tableHeader\">" +
    						    "Every "+ numCustomInt.value + " " + customIntSelect.value + "</p>" +
								"<div class=\"Table\">" +
									"<div class=\"Row\">" +
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
							        "</div>" +
					        	"</div>");


	$('.deleteButton').click(function(){
	   $(this).parent().parent().remove();

	});
	}
};



