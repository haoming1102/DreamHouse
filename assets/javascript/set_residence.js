// Add residence
    $(document).ready(function(){
        $(".add-row").click(function(){
			var residenceID = $("#residenceID").val();
			var amenities = $("#amenities").val();
            var monthly_rental = $("#monthly-rental").val();
            var number_units = $("#no-units").val();
            var size_units = $("#size-units").val();
            var address = $("#address").val();
            var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + residenceID + "</td><td>" +  amenities + "</td><td>" + monthly_rental + "</td><td>" + size_units + "</td><td>" + number_units + "</td><td>" + address + "</td></tr>" ;
            $("table tbody").append(markup);
        });
        
        // Find and remove selected table rows
        $(".delete-row").click(function(){
            $("table tbody").find('input[name="record"]').each(function(){
            	if($(this).is(":checked")){
                    $(this).parents("tr").remove();
                }
            });
        });
    });   
    
    
    //Button appear and disappear

    
