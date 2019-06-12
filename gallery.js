
$('.full').hide();
$('#1').show();
$('#1.little').css("opacity", "1");

function swapPhoto(elem) {
    var id = $(elem).attr("id");
    $('.full').hide();
    $('#' + id).show();
    $('.little').css("opacity", "0.5");
    $(elem).css("opacity", "1");
}