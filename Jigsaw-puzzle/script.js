$( document ).ready(function() {
let rows = 4, columns = 4;
let pieces ="";
for (let i=0 , top = 0;i<rows;i++, top -= 102){
    for (let j=0 , left = 0;j<columns;j++, left -= 98){
        pieces += "<div style = 'background-position:" + left +"px " + top + "px;' class = 'piece' ></div>"
    }
}
$("#puzzle-container").html(pieces);
});

$("#btn-start").click(function(){
    let blanckPieces = "";
    var pieces = $("#puzzle-container div");
    pieces.each(function(){
        var leftPosition = Math.floor(Math.random()*300) + "px";
        var topPosition = Math.floor(Math.random()*280) + "px";
        $(this).css({
            position: "absolute",
            left: leftPosition,
            top: topPosition
        });
        $("#pices-container").append($(this));
    });
    for (let i=0;i<4;i++){
        for (let j=0;j<4;j++){
           blanckPieces += "<div style = 'background-image:none;' class = 'piece'></div>"
        }
    }
    $("#puzzle-container").html(blanckPieces);
    $(this).hide();
    $("#btn-reset").show();
});

$("#btn-reset").click(function(){

    $(this).hide();
    $("#btn-start").show();
});