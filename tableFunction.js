var radioInput = "";
var textInput = "";
var frequencyInput = "";
var perIntervalInput = "";
var selectInput = "";
var tableData = [];



//FUNCTION USED TO TAKE INPUT FROM FORM AND PUT IT INTO A TABLE ROW


/*
function getTableData() {
	if(frequencyInput === "Daily") {
	tableData.splice(1, 0 ,"<div value=" + "'" + rowValue + "'" + "class=\"Row\">" +
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
	tableData.splice(7, 0, "<div value=" + "'" + rowValue + "'" + "class=\"Row\">" +
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
	tableData.splice(30, 0, "<div value=" + "'" + rowValue + "'" + "class=\"Row\">" +
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
	tableData.splice(365, 0, "<div value=" + "'" + rowValue + "'" + "class=\"Row\">" +
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

	tableData.splice(customIntSelectValue, 0, "<p class=\"tableHeader\">" +
    						    "Every "+ numCustomInt.value + " " + customIntSelect.value + "</p>" +
								"<div class=\"Table\">" +
									"<div value=" + "'" + rowValue + "'" + "class=\"Row\">" +
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


*/



function getTableData() {

for(i=0; i < tableData.length; i++) {
	if(tableData[i].rowValue === rowValue)
		rowValue = rowValue + .01;
}

tableData.push({textInput, perIntervalInput, radioInput, rowValue});

}



function renderTable(){

$("#tableWrapper").html("");

//sorts the array items (activities) according to their allotted intervals

tableData.sort(function(a, b) { 
    return a.rowValue - b.rowValue;
})

//appends activity list to the table



for(var i = 0; i < tableData.length; i++) {
$("#tableWrapper").append("<div data-id='" + tableData[i].rowValue + "' class=\"Row\">" +
							"<div class=\"Cell\">" +
						    "<p>" + tableData[i].textInput + "</p>" +
						"</div>" +
						"<div class=\"Cell\">" +
							"<p>" + tableData[i].perIntervalInput + "</p>" +
						"</div>" +
						"<div class=\"Cell\">" +
						    "<p>" + tableData[i].radioInput + "</p>" +
						"</div>" +
						"<div class=\"Cell\">" +
						    "<button class=\"deleteButton\">Delete</button>" +
						"</div>" +
						"</div>");

//deletes the activity from the table and array

	$('.deleteButton').click(function(){
	   
	   var thisId = $(this).parent().parent().data('id');

	   for(var i = 0; i < tableData.length; i++) {

	   	var deleteIndex = tableData.indexOf(tableData[i]);

	   if(tableData[i].rowValue === thisId){
		tableData.splice(deleteIndex, 1);
		}
		}

		$(this).parent().parent().remove();

	   });

}
}

























