var radioInput = "";
var textInput = "";
var frequencyInput = "";
var perIntervalInput = "";
var selectInput = "";
var tableData = [];


//FUNCTION USED TO TAKE INPUT FROM FORM AND PUT IT INTO A TABLE ROW


function getTableData() {

for(i=0; i < tableData.length; i++) {
	if(tableData[i].rowValue === rowValue)
		rowValue = rowValue + .01;
}

tableData.push({textInput, perIntervalInput, radioInput, rowValue, activityInt, span});

}


function renderTable(){

$(".intDiv").html("");

//sorts the array items (activities) according to their allotted intervals

tableData.sort(function(a, b) { 
    return a.rowValue - b.rowValue;
})

//appends activity list to the table


for(var i = 0; i < tableData.length; i++) {


	var rowString = "<p class=\"tableHeader\">" +
    				    "Every " + tableData[i].activityInt + " " + tableData[i].span + "</p>" +
						"<div class=\"Table\">" +
							"<div data-id=" + "'" + tableData[i].rowValue + "'" + "class=\"Row\">" +
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
					        "</div>" +
					      	"</div>";
					      	


$("#tables").append(rowString);


$('.deleteButton').click(function(){
	   
	   var thisId = $(this).parent().parent().data('id');

	   for(var i = 0; i < tableData.length; i++) {

	   	var deleteIndex = tableData.indexOf(tableData[i]);

	   if(tableData[i].rowValue === thisId){
		tableData.splice(deleteIndex, 1);
		}
		}

		$(this).parent().parent().remove();


//fix this

if($(this).parent().parent().parent().is(":empty")) {
		$(this).parent().closest(".tableHeader").remove();
}
});

}
}







