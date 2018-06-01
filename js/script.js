function calendar(month) {
	var year = parseInt(document.getElementById("year").value);

    //Variables to be used later.
    var calBody = "";
    var zemen = "";
    var count = 1;
    var dayAmount;
    var ZEMENBLUE = 5500;
    var ameteAlem= ZEMENBLUE + year;
    var ndays= ameteAlem + ameteAlem/4 + (month- 1)*30 + 2;

    // Setting up arrays for the name of the months and days.
    var monthNames = ["መስከረም", "ጥቅምት", "ህዳር", "ታህሳስ", "ጥር", "የካቲት","መጋቢት", "ሚያዝያ", "ግንቦት", "ሰኔ", "ሃምሌ", "ነሃሴ", "ፓጉሜ"];

    // starting day of the month
    var dayStart= (ndays + 6)%7;
    var dayStart2 = dayStart;

    // Determine the class of the year.
    if(year%4==0){
        zemen="ዮሃንስ";
    }
    else if(year%4==1){
        zemen="ማቴዎስ";
    }
    else if (year%4==2){
        zemen="ማርቆስ";
    }
    else {
        zemen="ሉቃስ";
    }
    //pagume has only 6 days.
    if(month == 12){
        // for mateos the number of days are six
        if(zemen=="ማቴዎስ"){
            dayAmount = 6;
        }else{
            dayAmount = 5;
        }
    }else{
        dayAmount = 30;
    }
   /* leave a space until the beginning of the firstday in that month.*/
    while (dayStart > 0) {
        calBody += "<td></td>";
        //preAmount++;
        dayStart--;
    }
    // Filling in the calendar with the current month days in the correct location along.
    while (count <= dayAmount) {

        // Determining when to start a new row
        if (dayStart2 > 6) {
            dayStart2 = 0;
            calBody += "</tr><tr>";
        }
        calBody += "<td>" + count + "</td>";
        dayStart2++;
        count++;
    }

    // Outputing the calendar onto the site.  Also, putting in the month name and class of the year.
    var MonthTable = "<table><tr><th colspan='2'>" + monthNames[month] + "</th><th colspan='3'></th><th colspan='2'>" + zemen + "</th></tr>";
    MonthTable += "<tr><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td><td>Sun</td></tr>";
    MonthTable += "<tr>";
    MonthTable += calBody;
    MonthTable += "</tr></table>";
    document.getElementById("calendar").innerHTML += MonthTable;
    document.getElementById("hyd").innerHTML = MonthTable;
}

// called when we want to display only month calendar.
function displayMonthCalendar(){
	document.getElementById("calendar").innerHTML = "";
	var month = parseInt(document.getElementById("month").value);
	calendar(month);
	displayHolidays(month);
}

// called when we want to display yearly calendar.
function displayYearCalendar(){
	document.getElementById("calendar").innerHTML = "<p>የዚህ አመት የኢትዮጵያ የቀን መቁጠሪያ: "+document.getElementById("year").value+"</p>";
    //iterate by the monthes of the year. calling calendar function again and again.
    for (i = 0; i < 13; i++) {
        calendar(i);
        if((i+1)%3==0){
        	document.getElementById("calendar").innerHTML += "<h5>~</h5>";
        }
    }
    displayHolidays(parseInt(document.getElementById("month").value));
}

// called when we want to display holidays in selected month.
function displayHolidays(month){
	var msg = "በአላት:</br>";
	switch(month){
		case 0:msg += "-1- አዲስ አመት </br>-17- መስቀል";break;
		case 1:msg += "-10- ፉ";break;
		case 2:msg += "-19- የብሔራዊ ቀን";break;
		case 3:msg += "-29- ገና";break;
		case 4:msg += "-11- ጥቅምት";break;
		case 5:msg += "-19- ሰማእታት";break;
		case 6:msg += "መጋቢት";break;
		case 7:msg += "ሚያዝያ";break;
		case 8:msg += "-17- ደርግ የወደቀበት";break;
		case 9:msg += "ሰኔ";break;
		case 10:msg += "ሃምሌ";break;
		case 11:msg += "-13- ቡሄ";break;
		case 12:msg += "ፓጉሜ";break;
	}
	document.getElementById("hyd").innerHTML = msg;
}