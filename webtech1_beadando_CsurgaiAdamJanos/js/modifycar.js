$(document).ready(function(){
    var Form = $("#modCar");
    Form.submit(function(event){
        event.preventDefault();
        
        var ID = $(this).serializeArray();
        $.ajax({
            type: 'DELETE',
            url: "https://webtechcars.herokuapp.com/api/cars/" + ID[0].value,
            data: JSON.stringify(ID),
            contentType:"application/json",
        });
    });
});
$(document).ready(function(){
    var Form = $("#modCar");
    Form.submit(function(event){
        event.preventDefault();

        var objektum = $(this).serializeArray();
        var name= objektum[1].value;
        var consumption= objektum[2].value;
        var color= objektum[3].value;
        var manufacturer= objektum[4].value;
        var avaiable= objektum[5].value;
        var year= objektum[6].value;
        var horsepower=  objektum[7].value;

        $.ajax({
            type: 'POST',
            url: "https://webtechcars.herokuapp.com/api/cars/",
            data: JSON.stringify({
                name, consumption, color, manufacturer, avaiable, year, horsepower
            }),
            contentType:"application/json",
            succes: alert("Sikeresen módosítva."),
        });
        setTimeout(() => {  $("#carsDiv").click(); }, 100); 
    });
});