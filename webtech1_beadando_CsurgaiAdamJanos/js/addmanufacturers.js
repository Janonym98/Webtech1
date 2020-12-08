$(document).ready(function(){
    var Form = $("#addManufacturer");
    Form.submit(function(event){
        event.preventDefault();

        var objektum = $(this).serializeArray();

        var name= objektum[0].value;
        var country= objektum[1].value;
        var founded= objektum[2].value;

        $.ajax({
            type: 'POST',
            url: "https://webtechcars.herokuapp.com/api/manufacturers/",
            data: JSON.stringify({
                name, country, founded
            }),
            contentType:"application/json",
            succes: alert("Sikeresen hozzáadva."),
        });
        setTimeout(() => {  $("#manufacturersDiv").click(); }, 100); 
    });
});
