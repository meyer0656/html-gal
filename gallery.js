
$('.full').hide();
$('#1').show();

function swapPhoto(elem) {
    var id = $(elem).attr("id");
    $('.full').hide();
    $('#' + id).show();
}