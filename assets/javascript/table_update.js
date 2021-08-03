

	// create array 
    // This array we will use to populate the table 
    

    
	var applications = new Array();
	applications.push(["Residence ID" , "Application ID" , "Date From" , "Due Date", "Status"]);
	applications.push(["S72EE22E" , "A0001" , "01/2020" , "12/2021","Approved"]);
	applications.push(["A123B234" , "A0002" , "01/2020", "12/2021", "Approved"]);
	applications.push(["H27ENNK2" , "A0003" , "01/2020", "01/2020", "Approved"]);
	



	// Create the table element 
	var table = document.createElement("Table");
	
	
	table.setAttribute("class","table table-hover");



    //Get the count of columns.
    var columnCount = applications[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = applications[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
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


    