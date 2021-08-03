//Lee Hao Ming B1801011

//search for residence (filter)
function searchFunction() {
    var input, filter, cards, cardContainer, i;
    input = document.getElementById("searchBar");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("residenceList");
    cards = cardContainer.getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".card-box h4.card-title");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

function loadCard(){
	// create array 
	// This array we will use to populate the div and table
	var residences = new Array();
	residences.push(["ResidenceID" , "Address" , "Amenities" , "Monthly Rental(RM)", "Size of Each Unit(sqrt)", "Number of Unit Available"]);
	residences.push(["Dream City", "Danau Villa", "The Binjai", "Windy Room", "Alola Cream", "Lovely Palace"]);
	residences.push(["assets/images/home1-696x464.jpg","assets/images/home2-696x464.jpg","assets/images/home3-696x463.jpg","assets/images/home4-696x464.jpg","assets/images/home5-696x464.jpg","assets/images/home6-696x464.jpg"]);
	residences.push(["A123B234" , "Puchong" , "1 Bedroom, 1 Bathroom, 1 Kitchen" , 750, 600, 25]);
	residences.push(["D456E789" , "Puchong" , "1 Bedroom, 1 Bathroom, 1 Kitchen" , 850, 650, 10]);
	residences.push(["G537W244" , "Damansara" , "1 Bedroom, 1 Bathroom, 1 Kitchen" , 900, 470, 16]);
	residences.push(["H27ENNK2" , "Bukit Jalil" , "1 Bedroom, 1 Bathroom, 1 Kitchen" , 350, 450, 11]);
	residences.push(["ID82799C" , "TTDI" , "1 Bedroom, 1 Bathroom, 1 Kitchen" , 700, 565, 9]);
	residences.push(["S72EE22E" , "Damansara" , "1 Bedroom, 1 Bathroom, 1 Kitchen" , 650, 550, 18]);
	
	var residenceCount = residences.length;
	//for loop (create div boostrap card) depends on residence array length
	//I use i=3 first since i want to get the residence array start from [3] and put them in table (check line 91)
	for (var i = 3; i < residenceCount; i++){
		var lineBreak = document.createElement("br");
		var lineBreak2 = document.createElement("br");
		var divContainer = document.getElementById("residenceList");
		
		//start to create bootstrap card
		var divCard = document.createElement("div");
		divCard.setAttribute("class","card col-12 col-md-6 p-3 col-lg-4");
		divContainer.appendChild(divCard);
		
		//create card-wrapper
		var divCardWrapper = document.createElement("div");
		divCardWrapper.setAttribute("class","card-wrapper");
		divCard.appendChild(divCardWrapper);
		
		//load image from array and make it into the card-img
		var divCardImage = document.createElement("div");
		divCardImage.setAttribute("class","card-img");
		var img = document.createElement("img");
		img.src = residences[2][i-3];
		
		divCardWrapper.appendChild(divCardImage);
		divCardImage.appendChild(img);
		
		//create car-box
		var divCardBox = document.createElement("div");
		divCardBox.setAttribute("class","card-box");
		divCardWrapper.appendChild(divCardBox);
		
		//set card-title
		//search title from array (for loop)
		var centerTag = document.createElement("center");
		var title = document.createElement("h4");
		title.setAttribute("class","card-title");
		title.innerHTML = residences[1][i-3];
		divCardBox.appendChild(lineBreak);
		divCardBox.appendChild(centerTag);
		centerTag.appendChild(title);

		// create the table element and attributes
		var table = document.createElement("Table");

		table.setAttribute("class","table table-borderless");
		table.style.fontSize = "14px";
		
		//search data from residences array and load it into table
		for (var j = 0; j < residences.length - 3; j++){
			var row = table.insertRow(-1);
			row.setAttribute("class","d-flex");
			var headerCell = document.createElement("TH");
			headerCell.setAttribute("class","col-8");
			var dataCell = document.createElement("TD");
			dataCell.setAttribute("class","col-4");
			headerCell.innerHTML = residences[0][j];
			dataCell.innerHTML = residences[i][j];
			row.appendChild(headerCell);
			row.appendChild(dataCell);
			row.appendChild(lineBreak2);
		}

		divCardBox.appendChild(table);
		
		//create apply button (modal)
		var centerTag2 = document.createElement("center");
		var applyBtn = document.createElement("button");
		applyBtn.setAttribute("type","button");
		applyBtn.setAttribute("class","btn btn-primary");
		applyBtn.setAttribute("data-toggle","modal");
		applyBtn.setAttribute("data-target","#exampleModalCenter");
		applyBtn.innerHTML = "Apply";
		divCardBox.appendChild(centerTag2);
		centerTag2.appendChild(applyBtn);
	}
}


//Validation
(function() {
'use strict';
window.addEventListener('load', function() {
	// Get the forms we want to add validation styles to
	var forms = document.getElementsByClassName('needs-validation');
	// Loop over them and prevent submission
	var validation = Array.prototype.filter.call(forms, function(form) {
		form.addEventListener('submit', function(event) {
			if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
			} else{
			alert("Submit successfully!");
			}
			form.classList.add('was-validated')
			;
		}, false);
	});
}, false);
})();