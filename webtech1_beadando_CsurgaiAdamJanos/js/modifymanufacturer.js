$(document).ready(function(){
    var Form = $("#modManufacturer");
    Form.submit(function(event){
        event.preventDefault();
        
        var ID = $(this).serializeArray();
        $.ajax({
            type: 'DELETE',
            url: "https://webtechcars.herokuapp.com/api/manufacturers/" + ID[0].value,
            data: JSON.stringify(ID),
            contentType:"application/json",
        });
    });
});

$(document).ready(function(){
    var Form = $("#modManufacturer");
    Form.submit(function(event){
        event.preventDefault();

        var objektum = $(this).serializeArray();

        var name= objektum[1].value;
        var country= objektum[2].value;
        var founded= objektum[3].value;

        $.ajax({
            type: 'POST',
            url: "https://webtechcars.herokuapp.com/api/manufacturers/",
            data: JSON.stringify({
                name, country, founded
            }),
            contentType:"application/json",
            succes: alert("Sikeresen módosítva."),
        });
        setTimeout(() => {  $("#manufacturersDiv").click(); }, 100); 
    });
});
