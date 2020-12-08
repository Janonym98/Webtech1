$(document).ready(function(){
        $.getJSON("https://webtechcars.herokuapp.com/api/cars", function(data){
            console.log(data);
            var table =$("#carTable");
            $.each(data, function(key, value){
                var row = $('<tr></tr>');
                var idCell = $("<td>" + value._id + "</td>");
                var nameCell = $('<td>'+value.name+'</td>');
                var consumptionCell = $('<td>'+value.consumption+'</td>');
                var colorCell = $('<td>'+value.color+'</td>');
                var manufacturerCell = $('<td>'+value.manufacturer+'</td>');
                var avaiableCell = $('<td>'+value.avaiable+'</td>');
                var yearCell = $('<td>'+value.year+'</td>');
                var horsepowerCell = $('<td>'+value.horsepower+'</td>');
                $(row).append(idCell);
                $(row).append(nameCell);
                $(row).append(consumptionCell);
                $(row).append(colorCell);
                $(row).append(manufacturerCell);
                $(row).append(avaiableCell);
                $(row).append(yearCell);
                $(row).append(horsepowerCell);
                $(table).append(row);
            })
        })
    });