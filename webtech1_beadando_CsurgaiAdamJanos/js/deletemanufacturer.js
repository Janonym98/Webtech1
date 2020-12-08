$(document).ready(function(){
    var Form = $("#deleteManufacturer");
    Form.submit(function(event){
        event.preventDefault();
        
        var ID = $(this).serializeArray();
        $.ajax({
            type: 'DELETE',
            url: "https://webtechcars.herokuapp.com/api/manufacturers/" + ID[0].value,
            data: JSON.stringify(ID),
            contentType:"application/json",
            succes: alert("Sikeresen törölve.")
        });
        setTimeout(() => {  $("#manufacturersDiv").click(); }, 100); 
    });
});
