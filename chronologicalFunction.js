///PLACES NUMERICAL VALUE ON AN ACTIVITY BASED ON IT'S CHRONOLOGICAL LENGTH,
///AND THEN USES THAT NUMERICAL VALUE TO SORT THE ACTIVITIES IN A FORM FROM LEAST TO GREATEST

var intSelectValue = "";
var customIntSelectValue = "";
var selectBoxChoice = "";


function numericalValue() {
	if (frequencyInput === "Daily") {
	intSelectValue = 1; }
	else if (frequencyInput === "Weekly") {
	intSelectValue = 7; }
	else if (frequencyInput === "Monthly") {
	intSelectValue = 30; }
	else if (frequencyInput === "Yearly") {
	intSelectValue = 365; }
}



function getSelectBoxChoice() {
    var indexSelect = document.getElementById("customIntSelect").selectedIndex;
	var valueSelect = document.getElementById("customIntSelect").options[indexSelect].text;
	selectBoxChoice = valueSelect;
}

function customNumericalValue() {
	if(selectBoxChoice === "Days") {
	customIntSelectValue = 1 * numCustomInt.value; }
	else if (selectBoxChoice === "Weeks") {
	customIntSelectValue = 7 * numCustomInt.value; }
	else if (selectBoxChoice === "Months") {
	customIntSelectValue = 30 * numCustomInt.value; }
	else if (selectBoxChoice === "Years") {
	customIntSelectValue = 365 * numCustomInt.value; }
}


/*var rowChrono = "";

function() {
if(user selects normal interval freq) {
rowChrono = IntSelectValue;
}
if else() {
rowChrono = customIntSelectValue * #customPerInterval.value;
}
}*/