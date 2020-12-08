$(document).ready(function(){
    $("#content").load("home.html");

    $.each($(".menuButton"), function(mbIndex, mbValue){
        $(mbValue).click(function(event){
            event.preventDefault();
            if($(this).find('a').attr("href") == "index.html"){
                open("index.html", "_self");
            } else{
                $("#content").load($(this).find('a').attr("href"));
            }
        })
    })
});