// (function ($) {
//   $(document).ready(function () {
  
//   });
// })(jQuery);

//Animate the Login
$(document).ready(function () {


    //stick in the fixed 100% height behind the navbar but don't wrap it
    $('#slide-nav.navbar-inverse').after($('<div class="inverse" id="navbar-height-col"></div>'));
  
    $('#slide-nav.navbar-default').after($('<div id="navbar-height-col"></div>'));  

    // Enter your ids or classes
    var toggler = '.navbar-toggle';
    var pagewrapper = '#page-content';
    var navigationwrapper = '.navbar-header';
    var menuwidth = '100%'; // the menu inside the slide menu itself
    var slidewidth = '80%';
    var menuneg = '-100%';
    var slideneg = '-80%';


    $("#slide-nav").on("click", toggler, function (e) {

        var selected = $(this).hasClass('slide-active');

        $('#slidemenu').stop().animate({
            left: selected ? menuneg : '0px'
        });

        $('#navbar-height-col').stop().animate({
            left: selected ? slideneg : '0px'
        });

        $(pagewrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });

        $(navigationwrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });

        $(this).toggleClass('slide-active', !selected);
        $('#slidemenu').toggleClass('slide-active');
        $('#page-content, .navbar, body, .navbar-header').toggleClass('slide-active');
    });
    var selected = '#slidemenu, #page-content, body, .navbar, .navbar-header';
    $(window).on("resize", function () {
        if ($(window).width() > 767 && $('.navbar-toggle').is(':hidden')) {
            $(selected).removeClass('slide-active');
        }


    });





// Beautify the Table and add search function
 $('.filterable .btn-filter').click(function(){
        var $panel = $(this).parents('.filterable'),
        $filters = $panel.find('.filters input'),
        $tbody = $panel.find('.table tbody');
        if ($filters.prop('disabled') == true) {
            $filters.prop('disabled', false);
            $filters.first().focus();
        } else {
            $filters.val('').prop('disabled', true);
            $tbody.find('.no-result').remove();
            $tbody.find('tr').show();
        }
    });

    $('.filterable .filters input').keyup(function(e){
        /* Ignore tab key */
        var code = e.keyCode || e.which;
        if (code == '9') return;
        /* Useful DOM data and selectors */
        var $input = $(this),
        inputContent = $input.val().toLowerCase(),
        $panel = $input.parents('.filterable'),
        column = $panel.find('.filters th').index($input.parents('th')),
        $table = $panel.find('.table'),
        $rows = $table.find('tbody tr');
        /* Dirtiest filter function ever ;) */
        var $filteredRows = $rows.filter(function(){
            var value = $(this).find('td').eq(column).text().toLowerCase();
            return value.indexOf(inputContent) === -1;
        });
        /* Clean previous no-result if exist */
        $table.find('tbody .no-result').remove();
        /* Show all rows, hide filtered ones (never do that outside of a demo ! xD) */
        $rows.show();
        $filteredRows.hide();
        /* Prepend no-result row if all rows are filtered */
        if ($filteredRows.length === $rows.length) {
            $table.find('tbody').prepend($('<tr class="no-result text-center"><td colspan="'+ $table.find('.filters th').length +'">No result found</td></tr>'));
        }
    });


//login form animate
$('#login-form-link').click(function(e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
$('#register-form-link').click(function(e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

// Admmin Nav tabs
$('#events').click(function(e) {
        $("#viewevent").delay(100).fadeIn(100);
        $("#viewreport").fadeOut(100);
        $('#report').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

$('#report').click(function(e) {
        $("#viewreport").delay(100).fadeIn(100);
        $("#viewevent").fadeOut(100);
        $('#events').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });



//autopopulate Eventlist
// var eventList = {};
// var eventListTags = [];

// for (events in jsonEvents){
//     eventList[jsonEvents[events].title] = events;
//     eventListTags.push(jsonEvents[events].title);
// }
//     $( "#search" ).autocomplete({
//       source: eventListTags
//     });


// Create Event using Ajax for better UX

// $('#create-event').click(function(e) {
//     $('#new-event-form').filter(':input').each(function(e){
//     alert($(e));
// });
//   // var eventDetails = {'eventTitle':req.body.eventTitle, 'eventDate':req.body.eventDate,'eventStartTime':req.body.eventStartTime };
//   // indexcontroller.createnewevent(eventDetails);

});


function viewReport(jsonUserDetails, jsonEvents){
    $('#report-table > tbody').html("");
    for (var user in jsonUserDetails){
        var rowData = '<td>' + users[user].fullname + '</td>'
        '<td>' + users[user].email + '</td>';
        rowData += jsonEvents.attendees.hasProperty(users[user].email) ? '<td>' + "Present" + </td>: <td> + "Absent" + '</td>';
            $('#report-table > tbody:last-child').append('<tr>' + rowData + '<tr>')
        }

}

