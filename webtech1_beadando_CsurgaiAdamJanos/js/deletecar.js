$(document).ready(function(){
    var Form = $("#deleteCar");
    Form.submit(function(event){
        event.preventDefault();
        
        var ID = $(this).serializeArray();
        $.ajax({
            type: 'DELETE',
            url: "https://webtechcars.herokuapp.com/api/cars/" + ID[0].value,
            data: JSON.stringify(ID),
            contentType:"application/json",
            succes: alert("Sikeresen törölve.")
        });
        setTimeout(() => {  $("#carsDiv").click(); }, 100); 
    });
});


