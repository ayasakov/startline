$(document).on("click", function() {
    var location = window.location.toString();
    $("#navigation").children().each(function(i, v) {
        if (v.firstChild.href == location) {
            $(".menu").removeClass("current");
            $(v.firstChild).addClass("current");
        }
        if (v.firstChild.href + '_single' == location) {
            $(".menu").removeClass("current");
            $(v.firstChild).addClass("current");
        }
    });
});

function formatDate(d) {
    debugger;
    var date = new Date(d);
    var m = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль',
        'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    return date.getDate() + ' ' + m[date.getMonth()] + ', ' + date.getYear();
}