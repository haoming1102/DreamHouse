// javascript for due date

function getDueDate(){


    // data object
    var dt = new Date(document.getElementById("date-from"));

    //get the date , month and year

    var date = dt.getDate();
    var month = dt.getMonth();
    var year = dt.getFullYear();


    //get the first and last date of the month

    document.getElementById("date-due").innerHTML = [date, month, year].join('/');


}





// update applicant




    $(document).ready(function(){
        $(".add-row").click(function(){
            var residence_id = $("#residence_id").val();
            var unit_number = $("#unit-number").val();
            var residence_name = $("#residence_name").val();
            var application_id = $("#application_id").val();
            
            var date_from = $("#date-from").val();
            
            var date_due =  additionOfDates(date_from);
            var status = $("#status").val();
            
            var markup = "<tr><td>" + residence_id + "</td><td>" + residence_name +"</td><td>"+ application_id + "</td><td>" + formatDate(date_from) + "</td><td>" + formatDate(date_due) + "</td><td>" +
             status + "</td></tr>" ;
            $(".table2 tbody").append(markup);
        });
        
        function additionOfDates(date) {
            var d = new Date(date),
                month = d.getMonth() + 1,
                day = d.getDate(),
                year = d.getFullYear();
            var durationOfRental = document.getElementById("duration").value;
            
            if(durationOfRental == 12)
            {

                year = year + 1;
            }
            
            else{
                year = year + 1;
                month = month + 6;

                if(month > 12)
                {
                    year = year + 1;
                    month = month -12;

                }

            }
            
            
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
        
            return [day, month, year].join('/');
        }   

        function formatDate(date){
            var d= new Date(date);
            month = d.getMonth() + 1,  
            year = d.getFullYear();


            return [month,year].join('/');

        }

        
        function add_months(dt, n) 
        {

            return new Date(dt.setMonth(dt.getMonth() + n));      
        }




        // Find and remove selected table rows
        $(".delete-row").click(function(){
            $("table tbody").find('input[name="record"]').each(function(){
            	if($(this).is(":checked")){
                    $(this).parents("tr").remove();
                }
            });
        });
    });   


    //validation
    
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            } 		
            form.classList.add('was-validated');
        }, false);
        });
    }, false);
    })();
    


    