$(document).ready(function(){
    var Form = $("#addCar");
    Form.submit(function(event){
        event.preventDefault();

        var objektum = $(this).serializeArray();

        var name= objektum[0].value;
        var consumption= objektum[1].value;
        var color= objektum[2].value;
        var manufacturer= objektum[3].value;
        var avaiable= objektum[4].value;
        var year= objektum[5].value;
        var horsepower=  objektum[6].value;

        $.ajax({
            type: 'POST',
            url: "https://webtechcars.herokuapp.com/api/cars/",
            data: JSON.stringify({
                name, consumption, color, manufacturer, avaiable, year, horsepower
            }),
            contentType:"application/json",
            succes: alert("Sikeresen hozzáadva."),
        });
        setTimeout(() => {  $("#carsDiv").click(); }, 100); 
    });
});
