///PLACES NUMERICAL VALUE ON AN ACTIVITY BASED ON IT'S CHRONOLOGICAL LENGTH


var intSelectValue = "";
var customIntSelectValue = "";
var selectBoxChoice = "";
var rowValue = 0;




function standardValue() {
	if (frequencyInput === "Daily") {
	intSelectValue = 1; }
	else if (frequencyInput === "Weekly") {
	intSelectValue = 7; }
	else if (frequencyInput === "Monthly") {
	intSelectValue = 30; }
	else if (frequencyInput === "Yearly") {
	intSelectValue = 365; }
	else {
	intSelectValue = 0; }
}


function getSelectBoxChoice() {
    var indexSelect = document.getElementById("customIntSelect").selectedIndex;
	var valueSelect = document.getElementById("customIntSelect").options[indexSelect].text;
	selectBoxChoice = valueSelect;
}


function customValue() {
	if(selectBoxChoice === "Days") {
	customIntSelectValue = 1 * numCustomInt.value; }
	else if (selectBoxChoice === "Weeks") {
	customIntSelectValue = 7 * numCustomInt.value; }
	else if (selectBoxChoice === "Months") {
	customIntSelectValue = 30 * numCustomInt.value; }
	else if (selectBoxChoice === "Years") {
	customIntSelectValue = 365 * numCustomInt.value; }
	else {customIntSelectValue = 0;}
}








