$(document).ready(function(){
    $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", function(data){
        console.log(data);
        var table =$("#manufacturerTable");
        $.each(data, function(key, value){
            var row = $('<tr></tr>');
            var idCell = $("<td>" + value._id + "</td>");
            var nameCell = $('<td>'+value.name+'</td>');
            var countrynCell = $('<td>'+value.country+'</td>');
            var foundedCell = $('<td>'+value.founded+'</td>');
            $(row).append(idCell);
            $(row).append(nameCell);
            $(row).append(countrynCell);
            $(row).append(foundedCell);
            $(table).append(row);
        })
    })
});