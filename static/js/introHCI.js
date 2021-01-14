function projectClick(e) {
    // prevent the page from reloading
    e.preventDefault();

    let styleattr = $(this).attr('style');
    if (typeof styleattr !== typeof undefined && styleattr !== false)
        $(this).removeAttr('style');
    else
        $(this).css("background-color", "#7fff00");
}

function initializePage() {
    $('#testjs').click(function(e) {
        $('.jumbotron h1').text('Javascript is connected');
    });

    $('a.thumbnail').click(projectClick);
}

$(document).ready(initializePage);