// Name of Student: Tan Wen Siang
// Student ID: B1700948

// viewApplicationsForApplicant.html
var applications = new Array();
	applications.push(["#" , "Application ID" , "Residence ID" , "Number of Units Available" + "<br>" + "(Monthly Rental)" , "Application Status"]);
	applications.push([1 , "A0001" , "S72EE22E" , 18 + "<br>" + "(RM650)" , "New"]);
	applications.push([2 , "A0002" , "A123B234" , 25 + "<br>" + " (RM750)" , "New"]);
	applications.push([3 , "A0003" , "H27ENNK2" , 11 + "<br>" + "(RM300)" , "New"]);
	
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
	
	// Attach the table 
    var dvTable = document.getElementById("applicantApplications");
    dvTable.appendChild(table);

// appealRejection.html
function disableButton(btn){
    if (btn.file.value==''){
		// Alert message for no document uploaded
		alert('Please upload your document.');  
		
	}
	else {
		// Disable the appeal button after submitting the document
		document.getElementById("appealBtn").disabled = true; 
		alert("Your appeal has been submitted."); 
	}
} // Function ends 


