// Name of Student: Tan Wen Siang
// Student ID: B1700948

// viewApplicationsForHO.html

	// Create arrays for each table row.  
	// These arrays are to populate the table. 

	var applications = new Array();
	applications.push(["#" , "Application ID" , "Residence ID" , "Number of Units Available" + "<br>" + "(Monthly Rental)" , "Applicant Username" , "Amenities" , "Monthly Income" , "Month &amp; Year Required" , "Application Status"]);
	applications.push([1 , "A0001" , "S72EE22E" , 18 + "<br>" + "(RM650)" , "SarahZ" , "1 Room, Bathroom, Kitchen" , "RM750 - RM1,500" , "January 2020" , "New"]);
	applications.push([2 , "A0002" , "A123B234" , 25 + "<br>" + " (RM750)" , "SarahZ" , "1 Room, Bathroom, Kitchen" , "RM750 - RM1,500" , "January 2020" , "New"]);
	applications.push([3 , "A0003" , "H27ENNK2" , 11 + "<br>" + "(RM300)" , "SarahZ" , "1 Room, Bathroom, Kitchen" , "RM750 - RM1,500" , "January 2020" , "New"]);
	applications.push([4 , "A0004" , "D456E789" , 10 + "<br>" + " (RM800)" , "OngHK" , "1 Room, Bathroom, Kitchen" , "Above RM2,000" , "December 2019" , "New"]);
	applications.push([5 , "A0005" , "ID82799C" , 9 + "<br>" + "(RM700)" , "YCK" , "1 Room, Bathroom, Kitchen" , "Below RM750" , "January 2020" , "New"]);
	applications.push([6 , "A0012" , "G537W244" , 16 + "<br>" + "(RM900)" , "Iskandar" , "1 Room, Bathroom, Kitchen" , "RM1,500 - RM2,000" , "February 2020" , "Wait List"]);
	applications.push([7 , "A0015" , "D456E789" , 10 + "<br>" + "(RM800)" , "Ily" , "1 Room, Bathroom, Kitchen" , "RM750 - RM1,500" , "January 2020" , "Wait List"]);
	applications.push([8 , "A0016" , "ID82799C" , 9 + "<br>" + "(RM700)" , "Yamada" , "1 Room, Bathroom, Kitchen" , "RM1,500 - RM2,000" , "January 2020" , "Wait List"]);
	applications.push([9 , "A0021" , "G537W244" , 16 + "<br>" + "(RM900)" , "MElias" , "1 Room, Bathroom, Kitchen" , "Below RM750" , "December 2019" , "Appeal Pending"]);
	applications.push([10 , "A0023" , "S72EE22E" , 18 + "<br>" + "(RM650)" , "Sanithan" , "1 Room, Bathroom, Kitchen" , "Above RM2,000" , "January 2020" , "Appeal Pending"]);
	
	// Create the table element 
	var table = document.createElement("Table");
	
	// Set table attributes 
	table.setAttribute("class","table table-hover");

    //Get the count of columns
    var columnCount = applications[0].length;

    // Add the header row
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = applications[0][i];
        row.appendChild(headerCell);
    }

    // Add the data rows
    for (var i = 1; i < applications.length; i++) {
        row = table.insertRow(-1);
        // for each row, add the columns (cells)
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = applications[i][j];
        }
    }

    var dvTable = document.getElementById("applicationsList");
    dvTable.appendChild(table);