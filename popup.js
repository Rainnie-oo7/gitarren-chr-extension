function resizeInput() {
    $(this).attr('size', $(this).val().length);
}

$('input[type="text"]')
    // event handler
    .keyup(resizeInput)
    // resize on page load
    .each(resizeInput);


//Pull text from user inputbox
var data = document.getElementById("this_input").value;
//Save it to the localStorage variable which will always remember what you store in it
localStorage["inputText"] = data;
    
var audio = new Audio ('https://vincens2005.github.io/vr/Nyan%20Cat%20[original].mp3');
    audio.play();

$(document).ready(function () {

    var $input = $('#id_of_input_element');
    $input.focus(function () {
        if ($(this).val() == $(this).data('placeholder-text')) {
            $(this).val('')
        }
    }).blur(function () {
        if ($(this).val() == '') {
            $(this).val($(this).data('placeholder-text'));
        }
    }).trigger('blur');
});




